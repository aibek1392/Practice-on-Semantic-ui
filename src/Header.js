import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div id="header">
                <div id="nav">
                    <ul>
                        <Link to='/favorite-blogs'><button class="ui circular twitter icon button"><a style={{color:'white'}}>Favorite Blogs</a></button></Link>          
                        <Link to='/about'><button class="ui circular twitter icon button"><a style={{color:'white'}}>About</a></button></Link>
                        <Link to='/'><button class="ui circular twitter icon button"><a style={{color:'white'}}>Blogs</a></button></Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header
