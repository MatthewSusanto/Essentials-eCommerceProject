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

            let newItems2 = [...state.items]
            for (let index = 0; index < newItems2.length; index++) {
                if (newItems2[index].orderNumber == action.orderNumber) {
                    newItems2[index].chosenQuantity = (newItems2[index].chosenQuantity + 1)
                }

            }

            return {
                ...state, items: newItems2
            }

        case 'REMOVE_QUANTITY':

            let newItems3 = [...state.items]
            for (let index = 0; index < newItems3.length; index++) {
                if (newItems3[index].orderNumber == action.orderNumber) {
                    newItems3[index].chosenQuantity = (newItems3[index].chosenQuantity - 1)
                }

            }

            return {
                ...state, items: newItems3
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