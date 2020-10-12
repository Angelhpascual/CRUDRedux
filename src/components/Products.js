import React, { Fragment, useEffect } from 'react';
//Redux hooks
import {useSelector, useDispatch} from 'react-redux'
import {getProductsAction} from '../actions/productActions'
import Product from '../components/Product'

const Products = () => {


    const dispatch = useDispatch()


    useEffect(() => {
        const getProductsState = () => dispatch(getProductsAction())
        getProductsState()
    }, [])

    const products = useSelector(state => state.products.products)
    const errorState = useSelector(state => state.products.error)
    const loadingState = useSelector(state => state.products.loading)


    return ( 
        <Fragment>
            <h2 className="text-center my-5">Product List</h2>
            {errorState ? <p className="font-weight-bold alert alert-danger text-center">Error Happened</p> : null }
            {loadingState ? <p className="text-center">Loading Data...</p> : null }
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? 'There is no products' : products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                        />
                    ))}
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Products
