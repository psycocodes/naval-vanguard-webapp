"use client"
import React from 'react'
import { Input } from "@/components/ui/input"

const SearchZone = () => {
  return (
    <div className="bg-transparent">
      <Input type="text" placeholder="Search Zone" className='border border-emerald-700/40 w-full' />
    </div>
  )
}

export default SearchZone