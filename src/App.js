import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Plans from './components/Plans'
import AddPlan from './components/AddPlan'


function App() {
  const [plans, setPlans] = useState([])
  const serverURL = 'http://localhost:5000';

  useEffect(() => {
    const getPlans = async () => {
      const plansFromServer = await fetchPlans();
      setPlans(plansFromServer);
    }
    getPlans();
  }, [])

  // Fetch Plans
  const fetchPlans = async() => {
    const res = await fetch(`${serverURL}/plans`);
    const data = res.json();
    return data;
  }

  // Add Plan
  const addPlan = async (plan) => {
    const res = await fetch(`${serverURL}/plans`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(plan)
    })

    const data = await res.json();
    setPlans([...plans, data]);
  }


  return (
    <div className="container mx-auto">
      <Header/>
      <div className='flex justify-center'>
        <AddPlan onAdd={addPlan}/>
      </div>
      <div className='flex justify-center'>
        <Plans plans={plans}/>
      </div>
    </div>
  );
}

export default App;
