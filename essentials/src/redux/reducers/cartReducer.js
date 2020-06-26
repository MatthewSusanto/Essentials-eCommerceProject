const initialState = {
    items: [
        {
            itemId: 'tees',
            finalPrice: 50,
            chosenColour: 'red',
            chosenSize: 's',
            chosenQuantity: 2
        },
        {
            itemId: 'vnecks',
            finalPrice: 30,
            chosenColour: 'red',
            chosenSize: 'xs',
            chosenQuantity: 1
        },

        {
            itemId: 'vnecks',
            finalPrice: 30,
            chosenColour: 'navy',
            chosenSize: 'l',
            chosenQuantity: 12
        }
    ],


    totalAmount: 0
};


const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_ITEM':

            console.log('added item');
            state.totalAmount += parseInt(action.chosenQuantity)
            state.items = [...state.items,
            {
                itemId: action.itemId,
                finalPrice: action.finalPrice,
                chosenColour: action.chosenColour,
                chosenSize: action.chosenSize,
                chosenQuantity: action.chosenQuantity
            }]
            console.log(state)



    }

    return state

}


export default cartReducer