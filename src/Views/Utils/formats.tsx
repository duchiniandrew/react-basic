import React from "react"

export function dateStringFormat(date: string) {
    const dateObj = new Date(date)
    return `${dateObj.getDate()}/${dateObj.getMonth() < 9 ? "0" + (dateObj.getMonth() + 1) : dateObj.getMonth() + 1}/${dateObj.getFullYear()}`
}
export function dateDiffInMonths(startDate: Date, endDate: Date) {
    const monthDiff = ((endDate.getFullYear() - startDate.getFullYear()) * 12) + endDate.getMonth() - startDate.getMonth()
    if (monthDiff === 0) {
        return endDate.getDate() - startDate.getDate()
    }
    return monthDiff
}