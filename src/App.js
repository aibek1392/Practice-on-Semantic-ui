import React from 'react';
import Main from './Main'
import { Route, Switch } from 'react-router'
import CreateBlog from './CreateBlog.js';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Header from './Header'
import FavoriteBlog from './FavoriteBlog'
import AboutPage from './AboutPage'


const App = () => {

  return (
    <Router>
      <div className="ui container comments">
        <Header></Header>
        <Switch>
          <Route
            exact path={"/create-blog"}
            render={(props) => <CreateBlog {...props} />}
          />
           <Route
            exact path={"/favorite-blogs"}
            render={(props) => <FavoriteBlog {...props} />}
          />
           <Route
            exact path={"/about"}
            render={(props) => <AboutPage {...props} />}
          />
          <Route exact path={"/"}>
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App