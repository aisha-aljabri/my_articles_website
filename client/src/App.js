import './App.css';
import { Router } from '@reach/router';


// components
import Home from './Components/home'
import Login from './Components/Login'
import ArticlesList from './Components/articlesList'
import ArticlesDetail from './Components/articleDetail'
import Header from './Components/header'
import Addarticle from './Components/add_articles'
import { useState } from 'react';


function App() {
  const [logUser, setUser] = useState({})
  const [login, setLogin] = useState(false)
  return (
    <div className="App">
      <Header />
        <Router>
          <Home path="/" />
          <Login path="/Login" setUser={setUser} setLogin={setLogin}/>
          <ArticlesList path="/:category" />
          <ArticlesDetail path="/articles/:id" />
          <Addarticle path="/articles/new" />
        </Router>
    </div>
  );
}

export default App;
