"use client"

import * as React from "react"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

export default function Calendar04() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 9),
    to: new Date(2025, 5, 26),
  })

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      className="rounded-lg border shadow-sm [&_.rdp-day_selected]:bg-red-500 [&_.rdp-day_selected]:text-white [&_.rdp-day_range_start]:bg-red-500 [&_.rdp-day_range_end]:bg-red-500 [&_.rdp-day_range_middle]:bg-red-100 [&_.rdp-day_range_middle]:text-red-900 [&_.rdp-day:hover]:bg-red-50 [&_.rdp-day:hover]:text-red-900"
    />
  )
}
