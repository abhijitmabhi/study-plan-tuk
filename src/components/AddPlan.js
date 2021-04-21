import React from 'react'
import { useState } from 'react'

const AddPlan = ({ onAdd }) => {
    const [courseName, setCourseName] = useState('');  
    const [credit, setCredit] = useState('');
    const [passed, setPassed] = useState(false);
    const [semester, setSemester] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!courseName){
            alert('Please add a plan');
            return;
        }

        onAdd({courseName, credit, passed, semester});

        setCourseName('');
        setCredit('');
        setPassed(false);
        setSemester('');
    }

    return (
        <form onSubmit={onSubmit}>
            <label className='block' for='courseName'>Course Name</label>
            <input className='block' type='text' value={courseName} onChange={(e) => setCourseName(e.target.value)} />
            <label className='block' for='credit'>Credit</label>
            <input className='block' type='number' value={credit} onChange={(e) => setCredit(e.target.value)} />
            <label className='block' for='semester'>Semester</label>
            <input className='block' type='number' value={semester} onChange={(e) => setSemester(e.target.value)} />
            <label className='block' for='passed'>Passed</label>
            <input className='block' type='checkbox' value={passed} onChange={(e) => setPassed(e.currentTarget.checked)} />

            <input className='' type='submit' value='Save Plan'/>
        </form>
    )
}

export default AddPlan
