import{ useState } from 'react'
import './Recipe.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/082 useFetch';

export default function Recipe() {
   let {id="id"}:any  = useParams();
  const url = "http://localhost:3000/recipes/" + id; 
  const  { data, isPending, error } = useFetch(url); 
  console.log(data);

  return (
    <div>
       {isPending && <p>Loading</p> }
       {error && <p>{error}</p> }
       { data && data?.map((response?:any) =>(
        <div>{ response.id}</div>
       ))}
    </div>
  )
}
