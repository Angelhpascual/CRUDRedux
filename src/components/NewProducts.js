import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
//Redux Actions
import  {createNewProductAction} from '../actions/productActions'

const NewProducts = () => {


    const dispatch = useDispatch()

    const addProduct = () => dispatch( createNewProductAction() )

    const submitNewProduct = e => {
        e.preventDefault()
        
        //validate form

        //create a new product

        addProduct();
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
                            />
                            </div>
                            <div className="form-group">
                            <label>Product Price</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Type the product price..."
                                name="price"
                            />
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >add product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProducts;