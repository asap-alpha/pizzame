import React from 'react'

import './Home.css';

import { useFetch } from '../../hooks/082 useFetch';
import RecipeList from '../../components/RecipeList/RecipeList';
export default function Home() {

  const fetchUrl = 'http://localhost:3000/recipes';

  const {data: result,error, isPending} = useFetch(fetchUrl);
  
  return (
    <div className="home"> 
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {result && <RecipeList data ={result} />}
    </div>
  )
}
