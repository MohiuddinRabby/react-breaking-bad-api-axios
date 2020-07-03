import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Axios from 'axios';
import Character from './components/Character';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters`);
      // console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItem();
  }, [])
  return (
    <div className="container">
      <Header />
      <Character isLoading={isLoading} data={items} />
    </div>
  );
}

export default App;
