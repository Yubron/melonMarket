import React from 'react';
import './App.css';
import './Detail.css';
import './Sidebar.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PostDetail from './components/postDetail/PostDetail';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div style={{ display: "flex" }}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/detail" component={PostDetail} />
          </Switch>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
