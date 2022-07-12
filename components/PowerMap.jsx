import { useState } from 'react';
import { FiX } from 'react-icons/fi'
// import { motion } from 'framer-motion'

function PowerMap({ item, className, id, setMapModal }) {

    return (
        <div onClick={() => setMapModal(item)}
            className={`w-full left-0 top-0 sm:w-1/2 transform ease-in-out duration-500 h-[120px] transition-all p-2 cursor-pointer ${className}`}> 
            <div className="p-5 relative h-full w-full bg-orange-100">
                <h1 className="text-2xl font-bold trispace uppercase text-orange-300">{item.id}</h1>
                <h2 className="text-sm w-[82%] lg:text-xl font-medium">{item.title}</h2>
                <img src={item.img} alt="" className="absolute bottom-3 right-5 w-[50px]" />
            </div>
        </div>
    )
}

export default PowerMap