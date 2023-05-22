//style
import './RecipeList.css'

//dependancies

import { Link } from 'react-router-dom'

interface IRecipeList {
    data:any
}
export default function RecipeList({data}:IRecipeList){
    return (
        <div className='Recipe-List'>
    {
        data.map((recipe:any )=> (
           <div key={recipe.id} className='card'>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0,100)}...</div>
                <Link to={`/recipe/${recipe.id}`}>Cook this</Link>
           </div>
          )) 
    }
    </div>
    )
}



 
