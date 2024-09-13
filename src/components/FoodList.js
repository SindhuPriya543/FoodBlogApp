import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFoods } from '../redux/actions/foodActions';
import { Link } from 'react-router-dom';

const FoodList = () => {
  const dispatch = useDispatch();
  const { foodList, loading, error } = useSelector(state => state.foods);

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="row">
      {foodList.map(food => (
        <div className="col-md-4" key={food.id}>
          <div className="card">
            <img src={food.image} className="card-img-top" alt={food.name} />
            <div className="card-body">
              <h5 className="card-title">{food.name}</h5>
              <p className="card-text">{food.description}</p>
              <Link to={`/food/${food.id}`} className="btn btn-primary">
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodList;