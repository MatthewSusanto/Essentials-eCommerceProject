// import {ADD_ITEM} from './actionTypes';

// // let nextTodoId = 0;

// export const addItem = content => ({
//     type: ADD_ITEM,
//     payload: {
//       itemId: ,
//       finalPrice: ,
//       chosenColour: ,
//       chosenSize: ,
//       chosenQuantity: 

//     }
//   });

export const addToCart = (itemId, itemName, previousPrice, discount, finalPrice, chosenColour, chosenSize, chosenQuantity) => (


    {
        type: 'ADD_ITEM',
        itemId: itemId,
        itemName: itemName,
        previousPrice: previousPrice,
        discount: discount,
        finalPrice: finalPrice,
        chosenColour: chosenColour,
        chosenSize: chosenSize,
        chosenQuantity: chosenQuantity
    }
)

