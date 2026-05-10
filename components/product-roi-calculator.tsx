"use client"

import { useMemo, useState } from "react"
import { Clock, DollarSign } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const minutesPerHour = 60
const weeksPerMonth = 4
const numberLocale = "en-US"

export function ProductRoiCalculator() {
  const [questionsPerWeek, setQuestionsPerWeek] = useState(40)
  const [searchMinutes, setSearchMinutes] = useState(20)
  const [hourlyValue, setHourlyValue] = useState(150)

  const estimates = useMemo(() => {
    const safeQuestions = Number.isFinite(questionsPerWeek) ? questionsPerWeek : 0
    const safeMinutes = Number.isFinite(searchMinutes) ? searchMinutes : 0
    const safeHourlyValue = Number.isFinite(hourlyValue) ? hourlyValue : 0
    const weeklyHours = (safeQuestions * safeMinutes) / minutesPerHour
    const monthlyValue = weeklyHours * safeHourlyValue * weeksPerMonth

    return {
      weeklyHours,
      monthlyValue,
    }
  }, [hourlyValue, questionsPerWeek, searchMinutes])

  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xl shadow-foreground/5">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="questions-per-week">Questions per week</Label>
          <Input
            id="questions-per-week"
            inputMode="numeric"
            pattern="[0-9]*"
            type="text"
            value={questionsPerWeek}
            onChange={(event) => setQuestionsPerWeek(Number(event.target.value))}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="search-minutes">Average search time</Label>
          <Input
            id="search-minutes"
            inputMode="numeric"
            pattern="[0-9]*"
            type="text"
            value={searchMinutes}
            onChange={(event) => setSearchMinutes(Number(event.target.value))}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="hourly-value">Hourly billing value</Label>
          <Input
            id="hourly-value"
            inputMode="numeric"
            pattern="[0-9]*"
            type="text"
            value={hourlyValue}
            onChange={(event) => setHourlyValue(Number(event.target.value))}
            className="mt-2"
          />
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl bg-muted/50 border border-border p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            Estimated time lost
          </div>
          <p className="mt-3 text-3xl font-bold text-foreground">
            {estimates.weeklyHours.toLocaleString(numberLocale, {
              maximumFractionDigits: 1,
            })}{" "}
            hrs/week
          </p>
        </div>
        <div className="rounded-xl bg-primary text-primary-foreground p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80">
            <DollarSign className="h-4 w-4" />
            Estimated monthly value
          </div>
          <p className="mt-3 text-3xl font-bold">
            {estimates.monthlyValue.toLocaleString(numberLocale, {
              currency: "USD",
              maximumFractionDigits: 0,
              style: "currency",
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
