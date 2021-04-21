import React from 'react'
import Plan from './Plan'

const Plans = ({ plans }) => {
    return (
        <div>
            {
                plans.map((plan, index) => (
                   <Plan key={index} plan={plan}/>
                ))
            }
        </div>
    )
}

export default Plans
