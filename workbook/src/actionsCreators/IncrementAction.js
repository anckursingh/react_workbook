
export const INCREMENT_ACTION='increment'
export function incrementAction(incrementby){
   //increment action
   return {
    type: INCREMENT_ACTION,
    incrementby: 1
   } 
}