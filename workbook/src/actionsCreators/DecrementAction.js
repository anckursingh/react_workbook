export const DECREMENT_ACTION='decrement'
export function decrementAction(decrementby){
   return {
    type: DECREMENT_ACTION,
    decrementby: 1
   } 
}