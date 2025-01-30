export let initial = {
    count : 0,
    isincrementing : false
}

export let countModel = (state,intent) => {
    switch (intent.type) {
        case "INCREMENT":
            if(state.count<99){
                return {
                    ...state,count : state.count + 1
                }
            } else{
                return{
                    ...state,count : state.count
                }
            }
            
        
        case "DECREMENT":
            if(state.count>0){
                return {
                    ...state,count : state.count - 1
                }
            }
            else{
                return {
                    ...state,count : 0
                }
            }
        
        case "RESET":
            return{
                ...state,count : 0
            }
        
        case "TOGGLE":
            return{
                ...state,isincrementing : !state.isincrementing
            }
        
        default:
            return state
    }
}