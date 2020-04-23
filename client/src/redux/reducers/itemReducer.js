import * as actions from '../actions/actionsType'

const initialState = {
    items: [],
    loading:false
}

function itemReducer(state = initialState,action) {
    switch (action.type) {
        case (actions.GET_ITEM) :
            return{
                ...state,
                items:action.payload,
                loading: false
            };
        
        case (actions.DELETE_ITEM):
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload )
            }
        case (actions.ADD_ITEM):
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case(actions.ITEMS_LOADING):
        return {
            ...state,
            loading: true
        }
    
        default:
            return state;
    }

}

export default itemReducer;
