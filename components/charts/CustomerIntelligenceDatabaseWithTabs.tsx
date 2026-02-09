'use client'

import CustomerIntelligenceDatabase from './CustomerIntelligenceDatabase'

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabaseWithTabs({ title = "Customer Intelligence Database", height }: CustomerIntelligenceDatabaseProps) {
  return <CustomerIntelligenceDatabase title={title} height={height} />
}
