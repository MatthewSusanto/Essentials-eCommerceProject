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

export const addToCart = (itemId, finalPrice, chosenColour, chosenSize, chosenQuantity) => (


    {
        type: 'ADD_ITEM',
        itemId: itemId,
        finalPrice: finalPrice,
        chosenColour: chosenColour,
        chosenSize: chosenSize,
        chosenQuantity: chosenQuantity
    }
)