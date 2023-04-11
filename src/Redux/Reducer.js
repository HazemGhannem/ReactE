import { TEST_ADD_FAIL, TEST_ADD_REQUEST, TEST_ADD_SUCCES, TEST_LIST_FAIL, TEST_LIST_REQUEST, TEST_LIST_SUCCES } from "./Constant";


export const reducertest = (state = {}, action ) => {
    switch (action.type) {
        case TEST_LIST_REQUEST:
            return {loading :true };
        case TEST_LIST_SUCCES:
            return {loading :false, sucess:true,products : action.payload};
        case TEST_LIST_FAIL:
            return {loading :false, error : action.payload};
        
        default :
            return state;
    } 

}
export const reducercreate = (state = {}, action ) => {
    switch (action.type) {
        case TEST_ADD_REQUEST:
            return {loading :true };
        case TEST_ADD_SUCCES:
            return {loading :false, sucess:true,products : action.payload};
        case TEST_ADD_FAIL:
            return {loading :false, error : action.payload};
        
        default :
            return state;
    } 

}