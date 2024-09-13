const initialState = {
    foodList: [],
    foodDetail: {},
    loading: false,
    error: null,
  };
  
  const foodReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_FOODS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_FOODS_SUCCESS':
        return { ...state, loading: false, foodList: action.payload };
      case 'FETCH_FOODS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'FETCH_FOOD_DETAIL_SUCCESS':
        return { ...state, foodDetail: action.payload };
      default:
        return state;
    }
  };
  
  export default foodReducer;