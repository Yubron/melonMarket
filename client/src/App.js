import React from 'react';
import Auth from './hoc/auth';

import './App.css';
import './Detail.css';
import './Sidebar.css';
import './Join.css';
import './Product.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PostDetail from './components/postDetail/PostDetail';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import Join from './components/user/Join';
import ProductSell from './components/product/ProductSell'

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div style={{ display: "flex" }}>
          <Switch>
            <Route exact path="/" component={Auth(Main, null)} />
            <Route exact path="/detail" component={Auth(PostDetail, null)} />
            <Route exact path="/join" component={Auth(Join, false)} />
            <Route exact path="/sell" component={Auth(ProductSell, true)} />
          </Switch>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
