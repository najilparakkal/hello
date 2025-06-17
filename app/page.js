"use client";



import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center w-full  '>
      <h1>Hello</h1>
      <Link href={"/products"} className='bg-blue-400 rounded-3xl px-10 py-2'>Products</Link>
    </div>
  )
}

export default page
