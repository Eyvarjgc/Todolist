import React, { useState, useEffect, useContext } from 'react';
import { APPContext } from '../App';

export function CurrentDate() {

  const [fecha, setFecha] = useState('');

  const {setDay} = useContext(APPContext)
  
  
  useEffect(() => {
    const obtenerFechaDiaria = () => {
      const currentDay = new Date();
      const day = String(currentDay.getDate()).padStart(2, '0');
      const mes = String(currentDay.getMonth() + 1).padStart(2, '0'); // Enero es 0
      const año = currentDay.getFullYear();
      
      setDay(day)
      return `${day }/${mes}/${año}`;
    };

    
    setFecha(obtenerFechaDiaria());
  }, []);
  

}
