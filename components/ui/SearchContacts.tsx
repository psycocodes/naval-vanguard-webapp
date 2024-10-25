"use client"
import { Input } from '@/components/ui/input'
import React from 'react'
const SearchContacts = () => {
  return (
    <div className="bg-transparent">
    <Input type="text" placeholder="Search Contacts" className='border border-emerald-700/40 w-full ' />
  </div>
  )
}

export default SearchContacts