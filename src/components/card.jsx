import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'



function Card({ id, image, name, type }) {

   return (
         <Link className={`card bg-${type} w-60 shadow-xl p-3 my-2 mx-2 flex flex-col font-mono transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none`}>
            <p className='w-auto text-center h-1/5'>0{id}</p>
            <figure className="px-2 pt-2 h-3/5 ">
               <img src={image} alt="Shoes" className="rounded-xl" width={140} height={80} />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title">{name}</h2>
               <p className='h-1/5 text-xs' >{type}</p>
            </div>
         </Link>
         
   )
}

export default Card
