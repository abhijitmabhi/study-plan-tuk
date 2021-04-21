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
  return (
    <div className="container mx-auto">
      <Header/>
      <AddPlan/>
      <Plans plans={plans}/>
    </div>
  );
}

export default App;
