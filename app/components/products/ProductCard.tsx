"use client"
import Image from 'next/image'
import React from 'react'

interface ProductCardProps {
    data: any
}

const ProductCard:React.FC<ProductCardProps> = ({data}) => {
  return (
    <div className='col-span-1 cursion-pointer border-2 border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm'>
        <div className='flex flex-col items-center w-full selection:'>
            <div className='aspect-square overflow-hidden relative w-full'>
                <Image fill src={data.images[0].image} alt={data.name} className='w-full h-full object-contain '/>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default ProductCard