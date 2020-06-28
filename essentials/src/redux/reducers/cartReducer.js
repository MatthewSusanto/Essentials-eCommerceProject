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
                orderNumber: action.orderNumber,
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
        case 'REMOVE_ITEM':

            let filteredItems = state.items.filter((e) => e.orderNumber !== action.orderNumber)
            let totalAmountReduced = state.totalAmount - action.chosenQuantity
            let totalReduced = state.subTotal - (parseFloat(action.finalPrice) * action.chosenQuantity)


            return {
                ...state, items: filteredItems, totalAmount: totalAmountReduced, subTotal: totalReduced

            }

        case 'ADD_QUANTITY':



        case 'REMOVE_QUANTITY':

            let addedItem1 = state.items.filter((e) => e.orderNumber == action.orderNumber)
            addedItem1[0].chosenQuantity = parseInt(addedItem1[0].chosenQuantity) - 1;
            let filteredItems12 = state.items.filter((e) => e.orderNumber !== action.orderNumber)
            let newFilteredItems1 = [...filteredItems12, addedItem1[0]]

            // let totalAmountReduced = state.totalAmount - action.chosenQuantity
            // let totalReduced = state.subTotal - (parseFloat(action.finalPrice) * action.chosenQuantity)


            return {
                ...state, items: newFilteredItems1

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