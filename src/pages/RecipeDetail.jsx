import React,{ useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import  axios  from "axios";
import './RecipeDetail.css';

const RecipeDetail = ({recipe}) => {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(false);
    const [flag, setFlag] = useState('');
    
   useEffect(() => {
    setIsLoading(true)
      axios.get(`http://localhost:4001/recipes/${params.recipedetail}`)
        .then(res => {
         setData(res.data);
         setIsLoading(false) 
         axios.get(`https://restcountries.com/v3.1/name/${res.data.country}`) 
        .then(response=>setFlag(response?.data[0]?.flags.svg))   
      });
    }, [params.recipedetail]);

    if (isLoading){
      <p>...Loading...</p>
  }
   
    return (
    <div className='recipeDetail'>
      <h1 className='name'>{data.name}</h1>
      <div className='intro'>
        <div>
          <div className='flag'><img src={flag} alt="" /></div>
          <div><img src={data.image} alt={data.name} /></div>
        </div>
        <div className='description'>
          <h3>Author: {data.author}</h3>
          <h3>Origin Country: {data.country}</h3>
          <h2>Description</h2>
          <p>{data.description}</p>
        </div>
      </div>
      <div className='info'>
        <div className='ingre'>
          <h2>Ingredients</h2>
          <div className='table'>
            {data?.ingredients?.map((item, index) => (
            <div key={index} className='row'>
              <div className='cell'>{item.quantity}</div>
              <div className='cell'>{item.ingredient}</div>
            </div>
            ))}
          </div>
        </div>
        <div className='instru'>
          <h2>Instructions</h2>
          <p>{data.instruction}</p>
        </div>
      </div>  
      <div className='back'>
        <button onClick={() => navigate(-1)}>Go back </button>
      </div> 
    </div>
    );
};

export default RecipeDetail;