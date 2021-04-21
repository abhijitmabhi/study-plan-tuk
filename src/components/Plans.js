import React from 'react'
import Plan from './Plan'

const Plans = ({ plans, onDelete }) => {
    return (
        <div>
            {
                plans.map((plan, index) => (
                   <Plan key={index} plan={plan} onDelete={onDelete}/>
                ))
            }
        </div>
    )
}

export default Plans
