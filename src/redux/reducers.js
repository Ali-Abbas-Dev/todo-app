const arr = [];

export const arrReducer = (state = arr, action)=> {
    
    switch (action.type) {
        // Add task to the arr
        case "ADD":
            let obj = {... action.payload,
                    id: Math.floor(Math.random() * 1000),
                    status: false,
                    bringUpDisabled: false,
                    bringDownDisabled: false,
            };
            state = [...state, obj];
            if(state.length == 1) {
                state[0].bringDownDisabled = true;
                state[0].bringUpDisabled = true;
            } else if(state.length == 2) {
                state[0].bringDownDisabled = false;
                state[1].bringDownDisabled = true;
            } else {
                state[state.length-2].bringDownDisabled = false;
                state[state.length-1].bringDownDisabled = true;
            }
            return state;

        // Delete task from arr
        case "DELETE":
            let arrAfterDel = state.filter((x)=> x.id !== action.payload);
            return [...arrAfterDel];
        
        // Edit the existing task
        case "EDIT":
            console.log(action.payload);
            return state;

        // Toggle the status of task DONE/NOT DONE YET
        case "STATUS":
            let shouldUpdate = state.find((x)=> x.id == action.payload.id);
            shouldUpdate.status = !shouldUpdate.status;
            shouldUpdate.bringDownDisabled = !shouldUpdate.bringDownDisabled;
            shouldUpdate.bringUpDisabled = !shouldUpdate.bringUpDisabled;
            
            if (state[action.payload.i-1]) {
                state[action.payload.i-1].bringDownDisabled = !state[action.payload.i-1].bringDownDisabled;                
            }
            if (state[action.payload.i+1]) {
                state[action.payload.i+1].bringUpDisabled = !state[action.payload.i+1].bringUpDisabled;
            }
            return [...state];
        default:
            return state;
    }
}