import React from 'react'
import Container from './Container'
import { brands } from '../constants'
import Image from 'next/image'

const Brands = () => {
    return (
        <Container >
            <h1 className="font-bold text-xl md:text-3xl mt-10 ">Premium Markalarimizi Kesfedin</h1>
            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-5 mt-5'>
                {brands.map((item) => (
                    <div className='bg-white shadow rounded-lg flex 
                    flex-col items-center p-3 cursor-pointer tansition hover:shadow-lg'>
                        <Image width={70} height={70} src={item.icon} alt="brand logo" />
                        <h2 className='text-base'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Brands
