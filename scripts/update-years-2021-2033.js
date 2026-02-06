const fs = require('fs');
const path = require('path');

/**
 * Script to update year range from 2020-2032 to 2021-2033
 * - Removes 2020 data from all time series
 * - Adds 2033 data based on 2031-2032 growth rate
 */

// Function to calculate 2033 value based on growth from 2031 to 2032
function calculate2033Value(value2031, value2032) {
  if (!value2031 || !value2032 || value2031 === 0) return 0;
  const growthRate = (value2032 - value2031) / value2031;
  return parseFloat((value2032 * (1 + growthRate)).toFixed(1));
}

// Function to process nested object: remove 2020, add 2033
function updateYearRange(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // Check if this object has year keys
  const keys = Object.keys(obj);
  const hasYearKeys = keys.some(k => /^20[0-9]{2}$/.test(k));

  if (hasYearKeys) {
    // This is a time series object
    // Remove 2020
    if (obj['2020'] !== undefined) {
      delete obj['2020'];
    }

    // Add 2033 if we have 2031 and 2032
    const value2031 = obj['2031'];
    const value2032 = obj['2032'];

    if (value2031 && value2032 && !obj['2033']) {
      obj['2033'] = calculate2033Value(value2031, value2032);
    }

    return obj;
  }

  // Recursively process nested objects
  for (const key in obj) {
    obj[key] = updateYearRange(obj[key]);
  }

  return obj;
}

// Main execution
function main() {
  const dataDir = path.join(__dirname, '../public/data');
  const filesToUpdate = ['value.json', 'volume.json', 'segmentation_analysis.json'];

  console.log('🔄 Updating year range from 2020-2032 to 2021-2033...\n');

  filesToUpdate.forEach(filename => {
    const filePath = path.join(dataDir, filename);

    try {
      if (!fs.existsSync(filePath)) {
        console.log(`⏭️  Skipping ${filename} (file not found)`);
        return;
      }

      console.log(`📄 Processing ${filename}...`);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      // Update the data
      const updatedData = updateYearRange(data);

      // Write back to file
      fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
      console.log(`✅ ${filename} updated successfully`);
      console.log(`   - Removed 2020 data`);
      console.log(`   - Added 2033 data (calculated from 2031-2032 growth)\n`);
    } catch (error) {
      console.error(`❌ Error processing ${filename}:`, error.message);
    }
  });

  console.log('🎉 All files updated! Year range is now 2021-2033.');
}

// Run the script
main();
