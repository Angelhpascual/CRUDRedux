import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    GET_PRODUCT_DELETE_SUCCESS,
    GET_PRODUCT_DELETE_ERROR,
    GET_PRODUCT_EDIT,
    GET_PRODUCT_EDIT_SUCCESS,
    GET_PRODUCT_EDIT_ERROR,
    

} from '../types'


const initialState = {
    products : [],
    error : null,
    loading : false,
    productDelete : null,
    productEditing : null

}

export default function(state = initialState, action){
    switch(action.type){

        case GET_PRODUCTS:
        case ADD_PRODUCT: 
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return{
                ...state,
                loading: false,
                products: [...state.products, action.payload ]
            } 
        case ADD_PRODUCT_ERROR:
        case GET_PRODUCTS_ERROR :
        case GET_PRODUCT_DELETE_ERROR:
        case GET_PRODUCT_EDIT_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            } 
         case GET_PRODUCTS_SUCCESS:
             return{
                 ...state,
                 loading: false,
                 error: null,
                 products: action.payload
             }
         case GET_PRODUCT_DELETE:
             return{
                 ...state,
                 productDelete: action.payload
             }    
          case GET_PRODUCT_DELETE_SUCCESS:
              return{
                  ...state, 
                  products: state.products.filter(product => product.id !== state.productDelete),
                  productDelete: null
              }

           case GET_PRODUCT_EDIT:
               return {
                   ...state,
                   productEditing: action.payload
               }
               
            case GET_PRODUCT_EDIT_SUCCESS:
                return {
                    ...state,
                    productEditing: null,
                    products: state.products.map(
                        product => product.id ===action.payload.id ? product = action.payload : product
                    )
                }   

        default:
            return state;

    }
}