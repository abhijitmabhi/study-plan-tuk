import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Plans from './components/Plans'
import AddPlan from './components/AddPlan'


function App() {
  const [showAdd, setshowAdd] = useState(false);
  const [plans, setPlans] = useState([]);
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

  // Delete Plan
  const deletePlan = async (id) => {
    const res = await fetch(`${serverURL}/plans/${id}`, {
      method: 'DELETE'
    })
    setPlans(plans.filter((task) => task.id !== id));
  }




  return (
    <div className="container mx-auto">
      <Header onAdd={() => setshowAdd(!showAdd)} showAdd={showAdd}/>
      <div className='flex justify-center'>
        {
          showAdd && <AddPlan onAdd={addPlan}/>
        }
      </div>
      <div className='flex justify-center'>
        <Plans plans={plans} onDelete={deletePlan}/>
      </div>
    </div>
  );
}

export default App;
