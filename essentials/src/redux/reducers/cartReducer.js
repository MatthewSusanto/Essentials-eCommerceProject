const initialState = {
    items: [

    ],


    totalAmount: 0,
    subTotal: 0
};


const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_ITEM':

            let total = (parseFloat(action.finalPrice) * action.chosenQuantity) + state.subTotal
            let newTotalAmount = state.totalAmount + parseInt(action.chosenQuantity)
            let newItems = [...state.items,
            {
                itemId: action.itemId,
                itemName: action.itemName,
                previousPrice: action.previousPrice,
                discount: action.discount,
                finalPrice: action.finalPrice,
                chosenColour: action.chosenColour,
                chosenSize: action.chosenSize,
                chosenQuantity: action.chosenQuantity

            }]

            return {
                ...state, totalAmount: newTotalAmount, items: newItems, subTotal: total

            }


        // case 'ADD_ITEM':


        //     console.log('added item');
        //     state.totalAmount += parseInt(action.chosenQuantity)
        //     state.items = [...state.items,
        //     {
        //         itemId: action.itemId,
        //         finalPrice: action.finalPrice,
        //         chosenColour: action.chosenColour,
        //         chosenSize: action.chosenSize,
        //         chosenQuantity: action.chosenQuantity
        //     }]
        //     console.log(state)
        //     return state;
        default:
            return state





    }





}


export default cartReducer