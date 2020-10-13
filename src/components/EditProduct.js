import React,{useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productActions'
import {useHistory} from 'react-router-dom'


const EditProduct = () => {

    const history = useHistory();


    const [product, setProduct] = useState({
        name:'',
        price: ''
    })

    const dispatch = useDispatch()

    const productEdit = useSelector(state => state.products.productEditing)

    useEffect(() => {
        setProduct(productEdit)

    },[productEdit])


    const onChangeForm = e => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }


    const {name, price} = product

    const submitEditProduct = e => {
        e.preventDefault()

        dispatch(editProductAction(product))
        history.push('/')
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">EDIT A PRODUCT</h2>
                        <form
                        onSubmit={submitEditProduct}
                        >
                            <div className="form-group">
                            <label>Product Name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Type the product name..."
                                name="name"
                                value={name}
                                onChange={onChangeForm}
                            />
                            </div>
                            <div className="form-group">
                            <label>Product Price</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Type the product price..."
                                name="price"
                                value={price}
                                onChange={onChangeForm}
                            />
                            </div>
                            <button type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditProduct;