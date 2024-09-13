export const fetchFoods = () => ({
    type: 'FETCH_FOODS_REQUEST'
  });
  
  export const fetchFoodDetail = (id) => ({
    type: 'FETCH_FOOD_DETAIL_REQUEST',
    payload: id
  });