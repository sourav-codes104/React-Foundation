import React from 'react'
import { ArrowUpRight } from "lucide-react";

const Content = () => {
    return (
        <div className='flex h-170 mr-16 ml-16 relative'>
            <div className=' w-80 ml-12'>
                <div>
                    <div className='text-3xl mt-12 font-extrabold'>Prospective customer segmentation</div>
                </div>
                <div className='mt-4 font-medium w-70 text-gray-800'>
                    Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.
                </div>
                <div className="w-14 h-14 rounded-full  flex items-center justify-center  absolute bottom-10">
                    <ArrowUpRight size={45}/>
                </div>
            </div>
            <div className='ml-12 flex-1 font-bold flex gap-6 mb-6'>
                <div className='w-40 rounded-4xl grow relative'>
                    <div className='h-full brightness-50'>
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D" className=' w-full h-full object-cover rounded-4xl'></img>
                    </div>
                    <div className='absolute top-4 left-8 bg-white w-6 h-6 rounded-full text-center'>
                        1
                    </div>
                    <div className=' w-44 absolute left-8 top-100 text-white overflow-hidden font-light brightness-75'>
                        Prime customers,that have access to bank credit and are satisfied with the current product
                    </div>
                    <button className='absolute left-8 bottom-5 bg-blue-600 w-60 h-10 text-gray-200 font-bold rounded-full mr-3'>
                        Satified
                    </button>
                </div>
                <div className=' w-40 rounded-4xl grow relative'>
                    <div className='h-full  brightness-50'>
                        <img src="https://images.unsplash.com/photo-1773332598451-8a0a59941912?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" className=' w-full h-full object-cover rounded-4xl'></img>
                    </div>
                    <div className='absolute top-4 left-8 bg-white w-6 h-6 rounded-full text-center'>
                        2
                    </div>
                    <div className=' w-44 absolute left-8 top-100 text-white overflow-hidden font-light brightness-75'>
                        Prime customers, that have access to bank credit and are not satisfied with the current service
                    </div>
                    <button className='absolute left-8 bottom-5 bg-blue-600 w-60 h-10 text-gray-200  rounded-full  mr-3 font-bold'>
                        Undeserved
                    </button>
                </div>
                <div className=' w-40 rounded-4xl grow relative'>
                    <div className='h-full brightness-50'>
                        <img src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=' w-full h-full object-cover rounded-4xl'></img>
                    </div>
                    <div className='absolute top-4 left-8 bg-white w-6 h-6 rounded-full text-center'>
                        3
                    </div>
                    <div className=' w-44 absolute left-8 top-100 text-white overflow-hidden font-light brightness-75'>
                        Customers from near-prime and subprime segments with no access to bank credit
                    </div>
                    <button className='absolute left-8 bottom-5 bg-lime-400 w-60 h-10 text-black font-light rounded-full  mr-3'>
                        Underbanked
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Content
