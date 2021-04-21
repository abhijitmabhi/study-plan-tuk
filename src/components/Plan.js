import React from 'react'

const Plan = ({ plan, onDelete }) => {
    return (
        <div>
          <h3 className={`font-bold text-xl  ${plan.passed === true ? 'text-green-700' : 'text-red-700'}`}>{plan.courseName} </h3>  
          <p className=''>Credits: {plan.credit}</p>
          <button className='bg-blue-100 px-2 py-1 text-xs font-semibold tracking-wider text-red-600 rounded
           hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' onClick={() => onDelete(plan.id)}>Delete</button>
        </div>
    )
}

export default Plan 
