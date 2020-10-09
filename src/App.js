import React from 'react';
import Header from './components/Header'
import Products from './components/Products'
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NewProducts from './components/NewProducts';
import EditProduct from './components/EditProduct';

//Redux
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header/>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Products}
          />
          <Route exact path="/products/new" component={NewProducts}/>
          <Route exact path="/products/edit/:id" component={EditProduct}/>
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
