import React,{ useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import  axios  from "axios";
import './RecipeDetail.css';

const RecipeDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:4001/recipes/${params.recipedetail}`)
          .then(res => {
            setData(res.data);
            setIsLoading(false);
          });
      }, [params.recipedetail]);
      if (isLoading) {
        return <p>Loading...</p>;
      }
    return (
        <div>
       
      <div className='recipeDetail'>
            <img src={data.image} alt={data.name} />
            <h2>{data.name}</h2>
            <h3>{data.author}</h3>
            <h3>{data.country}</h3>
            <p>{data.description}</p>
            {data?.ingredients?.map((item, index) => (
            <p key={index}>{item.quantity} {item.ingredient}</p>
            ))}
            <p>{data.instruction}</p>
        </div>
        <div className='back'>
            <button onClick={() => navigate(-1)}>Go back </button>
        </div>
    </div>
    );
};

export default RecipeDetail;