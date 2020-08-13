import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail.js'
import faker from 'faker';
import ApprovalCard from './ApprovalCard'
import {Route, Redirect, Switch} from 'react-router'
import CreateBlog from'./CreateBlog.js';
import { BrowserRouter as Router, Link} from 'react-router-dom'



const App = () => {
    
    const pathname = window.location.pathname
    const [posts, setPosts] = useState(null);

  
    useEffect(() => {
      fetch('http://localhost:3001/posts')
      .then(r=>r.json())
      .then(data=> setPosts(data))
    }, []);

    return (
        <h1>Hello</h1>
    )


  

    // return (
    //     <div className='ui container comments'>
    //    {pathname === '/' ?
    //    <Link to='/create-blog'>
    //    <button>Go Back</button>
    //  </Link>
    //    : null}
            
    //         <Switch>
    //         <Route exact path={"/create-blog"} render={(props)=> <CreateBlog {...props}/>} />
    //         <Route exact path={"/"} >
    //             <CommentDetail author='Sam' timeAgo='Today at 4:45PM' postComment='What a nice blog!' faker={faker.image.avatar()} />
    //             <CommentDetail author='Alex' timeAgo='Thursday at 2:00AM' postComment='Awesome Blog!' faker={faker.image.avatar()} />
    //             <CommentDetail author='Jane' timeAgo='Friday at 5:45PM' postComment='Keep it up, love it!' faker={faker.image.avatar()} />
    //         </Route>

    //         </Switch>
    //     </div>
    // )
}


export default App