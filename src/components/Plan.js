import React from 'react'

const Plan = ({ plan }) => {
    return (
        <div>
          <h3 className={`font-bold text-xl ${plan.passed === true ? 'text-green-700' : 'text-red-700'}`}>{plan.courseName}</h3>  
          <p className=''>Credits: {plan.credit}</p>
        </div>
    )
}

export default Plan 
