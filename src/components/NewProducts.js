import React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
//Redux Actions
import  {createNewProductAction} from '../actions/productActions'

const NewProducts = ({history}) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)


    const dispatch = useDispatch()

    const loadingState = useSelector(state => state.products.loading)
    const errorState = useSelector(state => state.products.error )

    const addProduct = (product) => dispatch( createNewProductAction(product) )

    const submitNewProduct = e => {
        e.preventDefault()
        
        //validate form

        if(name.trim() === '' || price <= 0 === ''){
            return;
        }

        //create a new product

        addProduct({
            name, 
            price
        });

        history.push('/')
    }



    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">ADD A NEW PRODUCT</h2>
                        <form onSubmit={submitNewProduct}>
                            <div className="form-group">
                            <label>Product Name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Type the product name..."
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            </div>
                            <div className="form-group">
                            <label>Product Price</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Type the product price..."
                                name="price"
                                value={price}
                                onChange={e => setPrice(Number(e.target.value))}
                            />
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >add product</button>
                        </form>

                        {loadingState ? <p>Loading Products</p> : null}
                        {errorState ? <p className="alert alert-danger p2 mt-4 text-center">Error Happened</p> : null }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProducts;