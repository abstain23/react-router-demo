import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import Index from './pages/Index'
import Goods from './pages/goods/goods'
import './index.css'
import Lists from './pages/lists/lists'

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div className='wrapper'>
        <div className='nav'>
          <ul>
            <li>
              <Link to='/home'>首页</Link>
            </li>
            <li>
            <Link to='/goods'>商品页</Link>
            </li>
            <li>
              <Link to='/lists'>列表页</Link>
            </li>
          </ul>
        </div>
        <div className='main'>
        <Switch>
          <Route path='/home' component={Index}/>
          <Route path='/goods' component={Goods}/>
          <Route path='/lists' component={Lists}/>
          <Redirect to='/home'/>
        </Switch>
        </div>
        </div>
      </Router>
    )
  }
}
