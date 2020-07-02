const initialState = {
    items: [

    ],


    totalAmount: 0,
    subTotal: 0,
    search: null

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
                chosenQuantity: action.chosenQuantity,
                productImage: action.productImage

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

            let newTotalAmountadd = state.totalAmount + 1
            let itemprice1 = 0
            let newItems2 = [...state.items]
            for (let index = 0; index < newItems2.length; index++) {
                if (newItems2[index].orderNumber === action.orderNumber) {
                    newItems2[index].chosenQuantity = (newItems2[index].chosenQuantity + 1)
                    itemprice1 = parseFloat(newItems2[index].finalPrice)
                }

            }

            let newSubtotaladd = itemprice1 + state.subTotal

            return {
                ...state, items: newItems2, totalAmount: newTotalAmountadd, subTotal: newSubtotaladd
            }


        case 'REMOVE_QUANTITY':

            let newTotalAmountremove = state.totalAmount - 1
            let itemprice2 = 0
            let newItems3 = [...state.items]
            for (let index = 0; index < newItems3.length; index++) {
                if (newItems3[index].orderNumber === action.orderNumber) {
                    newItems3[index].chosenQuantity = (newItems3[index].chosenQuantity - 1)
                    itemprice2 = parseFloat(newItems3[index].finalPrice)
                }

            }

            console.log(itemprice2)

            let newSubtotalremove = parseFloat(state.subTotal) - itemprice2

            return {
                ...state, items: newItems3, totalAmount: newTotalAmountremove, subTotal: newSubtotalremove
            }


        case 'SEARCH':

            let search = action.keyword
            console.log(search)

            return {
                ...state, search: search
            }

        default:
            return state

    }

}

export default cartReducer