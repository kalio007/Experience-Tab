import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState();
  const [value, setValue] = useState(0);

const fetchJobs = async () => {
    const response = await fetch(url);
    const newsJobs = await response.json();
    setJobs(newsJobs);
    setLoading(false);
  };
  useEffect(()=>{
      fetchJobs();
  },[]);
  
  if (loading){
    return <section>
      <h1>
        Loading...
      </h1>
    </section> 
  };

  return <h2>tabs project setup</h2>;
}

export default App
