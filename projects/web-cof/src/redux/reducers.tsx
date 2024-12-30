interface DataState {
    mydata: any[] | null;
    loggedin: boolean;
    loading: boolean;
    error: boolean;
    sortedorder: string;
    search: string;
}

const initialDataState: DataState = {
    mydata: null,
    loggedin: false,
    loading: true,
    error: false,
    sortedorder: "",
    search: "",
}

interface ActionType {
    type: string;
    payload?: any;
}

export const Reducerfunction = (state = initialDataState, {type,payload}: ActionType): DataState => {
    switch (type) {
        case "FETCH-REQ":
            return {
                ...state,
                loading: true
            };
        case "FETCH-COM":
            return {
                ...state,
                mydata: payload,
                loading: false
            };
        case "FETCH-FAIL":
            return {
                ...state,
                loading: false,
                error: true
            };
        case "SORT-DATA":
            let sortedData = [...(state.mydata || [])];
            if (payload === "asc") {
                sortedData.sort((a, b) => a.price - b.price);
            } else if (payload === "desc") {
                sortedData.sort((a, b) => b.price - a.price);
            } else {
                sortedData = [...(state.mydata || [])];
            }
            return {
                ...state,
                mydata: sortedData,
                sortedorder: payload
            };
        case "LOGIN":
            return {
                ...state,
                loggedin: payload
            };
        default:
            return state;
    }
};






interface AuthState {
    register: boolean;
    loading: boolean;
    error: boolean;
    users: any[] | null
}

const initialAuthState: AuthState = {
    register: false,
    loading: false,
    error: false,
    users: null,
};

export const Authreducer = (state = initialAuthState, {type,payload}: ActionType): AuthState => {
    switch (type) {
        case "POST-REQ":
            return {
                ...state,
                loading: true
            };
        case "POST-COM":
            return {
                ...state,
                loading: false,
                register: true
            };
        case "POST-FAIL":
            return {
                ...state,
                loading: false,
                error: true
            };
        
        case "GET-USER-REQ":
            return{
                ...state,
                loading : true
            }
        
        case "GET-USER-COM":
            return{
                ...state,
                loading : false,
                users : payload
            }
        
        case "GET-USER-FAIL":
            return{
                ...state,
                loading : false,
                error : true
            }

        default:
            return state;
    }
};
