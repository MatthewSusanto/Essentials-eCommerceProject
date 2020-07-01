export const addToCart = (orderNumber, itemId, itemName, previousPrice, discount, finalPrice, chosenColour, chosenSize, chosenQuantity, productImage) => (


    {
        type: 'ADD_ITEM',
        orderNumber: orderNumber,
        itemId: itemId,
        itemName: itemName,
        previousPrice: previousPrice,
        discount: discount,
        finalPrice: finalPrice,
        chosenColour: chosenColour,
        chosenSize: chosenSize,
        chosenQuantity: chosenQuantity,
        productImage: productImage
    }
)

export const removeFromCart = (orderNumber, chosenQuantity, finalPrice) => (

    {
        type: 'REMOVE_ITEM',
        orderNumber: orderNumber,
        chosenQuantity: chosenQuantity,
        finalPrice: finalPrice
    }
)


export const addQuantity = (orderNumber, chosenQuantity, finalPrice) => (

    {
        type: 'ADD_QUANTITY',
        orderNumber: orderNumber,
        chosenQuantity: chosenQuantity,
        finalPrice: finalPrice
    }
)



export const removeQuantity = (orderNumber, chosenQuantity, finalPrice) => (

    {
        type: 'REMOVE_QUANTITY',
        orderNumber: orderNumber,
        chosenQuantity: chosenQuantity,
        finalPrice: finalPrice
    }
)


export const searchSomething = (keyword) => (

    {
        type: 'SEARCH',
        keyword: keyword
    }
)

