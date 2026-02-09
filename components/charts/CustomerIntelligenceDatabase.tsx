'use client'

import { useDashboardStore } from '@/lib/store'

interface CustomerData {
  companyName: string
  yearEstablished: string
  headquarters: string
  numEmployees: string
  revenueTurnover: string
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  websiteURL: string
  productCategories: string
  annualQuantity: string
  purchaseFrequency: string
  salesChannel: string
  regionOperation: string
  engagementLevel: string
  preferredContact: string
  responseSpeed: string
}

// Sample data matching the feed industry structure
const sampleCustomerData: CustomerData[] = [
  {
    companyName: 'Customer 1',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 2',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 3',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 4',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 5',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 6',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 7',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 8',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 9',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 10',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 11',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 12',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 13',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 14',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 15',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  },
  {
    companyName: 'Customer 16',
    yearEstablished: 'xx',
    headquarters: 'xx',
    numEmployees: 'xx',
    revenueTurnover: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteURL: 'xx',
    productCategories: 'xx',
    annualQuantity: 'xx',
    purchaseFrequency: 'xx',
    salesChannel: 'xx',
    regionOperation: 'xx',
    engagementLevel: 'xx',
    preferredContact: 'xx',
    responseSpeed: 'xx'
  }
]

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({
  title = "Customer Intelligence Database",
  height
}: CustomerIntelligenceDatabaseProps) {
  const { customerIntelligenceData } = useDashboardStore()

  // Use uploaded data if available, otherwise use sample data
  const displayData = customerIntelligenceData && customerIntelligenceData.length > 0
    ? customerIntelligenceData
    : sampleCustomerData

  return (
    <div className="w-full bg-white rounded-lg p-6" style={height ? { height: `${height}px` } : undefined}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black mb-2">{title}</h2>
      </div>

      {/* Single Complete Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-400">
          <thead>
            {/* Section Headers Row */}
            <tr>
              <th colSpan={5} className="bg-[#E8DCC8] border border-gray-400 px-4 py-3 text-center text-base font-bold text-black">
                COMPANY INFORMATION
              </th>
              <th colSpan={6} className="bg-[#B3D9E6] border border-gray-400 px-4 py-3 text-center text-base font-bold text-black">
                CONTACT DETAILS
              </th>
              <th colSpan={3} className="bg-[#C8D7E8] border border-gray-400 px-4 py-3 text-center text-base font-bold text-black">
                PRODUCT REQUIRED
              </th>
              <th colSpan={2} className="bg-[#FFF4C8] border border-gray-400 px-4 py-3 text-center text-base font-bold text-black">
                CUSTOMER CAPACITY & OPERATIONS
              </th>
              <th colSpan={3} className="bg-[#E6F4EA] border border-gray-400 px-4 py-3 text-center text-base font-bold text-black">
                CUSTOMER ENGAGEMENT LEVEL
              </th>
            </tr>
            {/* Column Headers Row */}
            <tr>
              {/* Company Information Columns */}
              <th className="bg-[#E8DCC8] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[120px]">
                Company Name
              </th>
              <th className="bg-[#E8DCC8] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[120px]">
                Year Established
              </th>
              <th className="bg-[#E8DCC8] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[120px]">
                Headquarters
              </th>
              <th className="bg-[#E8DCC8] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[150px]">
                No. of Employees (est.)<br />(if available)
              </th>
              <th className="bg-[#E8DCC8] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[150px]">
                Revenue/Turnover<br />(if available)
              </th>
              {/* Contact Details Columns */}
              <th className="bg-[#B3D9E6] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[140px]">
                Key Contact Person
              </th>
              <th className="bg-[#B3D9E6] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[140px]">
                Designation / Role
              </th>
              <th className="bg-[#B3D9E6] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[180px]">
                Email Address (verified /<br />generic)
              </th>
              <th className="bg-[#B3D9E6] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[150px]">
                Phone / WhatsApp<br />Number
              </th>
              <th className="bg-[#B3D9E6] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[130px]">
                LinkedIn Profile
              </th>
              <th className="bg-[#B3D9E6] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[130px]">
                Website URL
              </th>
              {/* Product Required Columns */}
              <th className="bg-[#C8D7E8] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[180px]">
                Product Categories Required<br />(Type of Additives)
              </th>
              <th className="bg-[#C8D7E8] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[180px]">
                Annual / Seasonal Quantity<br />Required
              </th>
              <th className="bg-[#C8D7E8] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[180px]">
                Purchase Frequency (Seasonal,<br />Monthly, Quarterly)
              </th>
              {/* Customer Capacity & Operations Columns */}
              <th className="bg-[#FFF4C8] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[180px]">
                Sales Channel Type<br />(Distributors, Wholesaler,<br />Trader)
              </th>
              <th className="bg-[#FFF4C8] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[160px]">
                Region-specific Operation
              </th>
              {/* Customer Engagement Level Columns */}
              <th className="bg-[#E6F4EA] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[160px]">
                Engagement With<br />Suppliers (Low,<br />Medium, High)
              </th>
              <th className="bg-[#E6F4EA] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[180px]">
                Preferred Contact<br />Method (Phone, E<br />Mail, B2B, Others)
              </th>
              <th className="bg-[#E6F4EA] border border-gray-400 px-3 py-3 text-center text-xs font-bold text-black min-w-[160px]">
                Response Speed (for<br />procurement)
              </th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((customer, index) => (
              <tr key={index} className="bg-white hover:bg-gray-50">
                {/* Company Information */}
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.companyName}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.yearEstablished}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.headquarters}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.numEmployees}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.revenueTurnover}
                </td>
                {/* Contact Details */}
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.keyContactPerson}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.designation}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.emailAddress}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.phoneNumber}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.linkedInProfile}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.websiteURL}
                </td>
                {/* Product Required */}
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.productCategories}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.annualQuantity}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.purchaseFrequency}
                </td>
                {/* Customer Capacity & Operations */}
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.salesChannel}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.regionOperation}
                </td>
                {/* Customer Engagement Level */}
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.engagementLevel}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.preferredContact}
                </td>
                <td className="border border-gray-400 px-3 py-3 text-sm text-black text-center">
                  {customer.responseSpeed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
