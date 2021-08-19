export const initialState = {
  basket:[],
  user:null,
};
 const reducer = (state,action)=> {
  switch(action.type){
    case "ADD_TO_BASKET":
    return {
      ...state,
      basket:[...state.basket,action.item],
    };
    case "REMOVE_FROM_CART":
    let filter = state.basket.filter((d,ind)=>ind!==action.item.id);
      return {
        basket:filter,
      };
      case "SET_USER":
      return {
        ...state,
        user:action.user
      }
      case "EMPTY_BASKET":
      return {
        basket:[]
      };
    default:
    return state;
  }
}
export default reducer;
