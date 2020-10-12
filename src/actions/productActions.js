import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    GET_PRODUCT_DELETE_SUCCESS,
    GET_PRODUCT_DELETE_ERROR

} from '../types'

import clientAxios from '../config/axios'
import Swal from 'sweetalert2'

//Create new products

export function createNewProductAction(product){
    return async(dispatch) => {
        dispatch(addProduct())

        try {
            await clientAxios.post('/products', product)
            dispatch(addProductSuccess(product))
            Swal.fire(
                'Success',
                'The product was added successfully',
                'success'
            )
            
        } catch (error) {
            console.log(error)
            dispatch(addProductError(true))
            Swal.fire({
                icon: 'error',
                title: 'Error happened',
                text: 'There is an error'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
}) 

const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = (estado) => ({
    type: ADD_PRODUCT_ERROR,
    payload: estado

})

//GETTING THE PRODUCTS
export function getProductsAction(){
    return async (dispatch) => {
        dispatch(getProducts());

        try {
            const response = await clientAxios.get('/products')
            
            dispatch(getProductsSuccess(response.data))
        } catch (error) {
            dispatch(getProductsError())
        }
    }
}

const getProducts = () => ({
   type: GET_PRODUCTS,
   payload: true
})

const getProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
})

const getProductsError = () => ({
    type: GET_PRODUCTS_ERROR,
    payload: true
})

//DELETING PRODUCT

export function deleteProductAction(id){

    return async (dispatch) => {
        dispatch(getProductDelete(id))
        
        try {
             await clientAxios.delete(`/products/${id}`)
             dispatch(deleteProductSuccess())
             Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              )
            
        } catch (error) {
            dispatch(deleteProductError())
        }
    }

}

const getProductDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload : id
})

const deleteProductSuccess = () => ({
    type: GET_PRODUCT_DELETE_SUCCESS
     
})

const deleteProductError = () => ({
    type: GET_PRODUCT_DELETE_ERROR,
    payload: true
})
