import React, { useEffect } from 'react';
import Tmdb from './Tmdb';


export default () => {
  
  useEffect( ()=> {
    const loadAll = async () => {
      // pegando a lista TOTAL
    }

    loadAll();
  }, [] );
  
  return(
    <div>
      Ola Mundo!
    </div>
  );
}