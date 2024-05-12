import { ADD_TO_CART } from '../constant'
const initialState = {
    cardData: [

    ]
}
export default function CartItem(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action);
            return {
                ...state,
                cardData: action.data
            }
            break;
        default:
            return state
    }
} 