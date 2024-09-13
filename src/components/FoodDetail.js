import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchFoodDetail } from '../redux/actions/foodActions';

const FoodDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { foodDetail } = useSelector(state => state.foods);

  useEffect(() => {
    dispatch(fetchFoodDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>{foodDetail.name}</h2>
      <img src={foodDetail.image} alt={foodDetail.name} />
      <p>{foodDetail.recipe}</p>
    </div>
  );
};

export default FoodDetail;