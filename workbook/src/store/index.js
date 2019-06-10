import { createStore } from 'redux';


const initialState={
    count:Math.floor(Math.random() * 50),
    todo:[]
};

const reducer =(state=initialState,action) => {
    
    console.log('reducer inside',action)
    switch(action.type) {
        case 'INCREMENT_ACTION':
            if(state.count === 43){
                alert('mandir banao bhai')
                return initialState;
            }
            else{
                return {
                    count: state.count + 1
                  };
            }
          
        case 'DECREMENT_ACTION':
          return {
            count: state.count - 1
          };
        default:
          return state;
      }
}
const store = createStore(reducer);

export default store;