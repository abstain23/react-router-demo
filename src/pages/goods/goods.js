import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Add from './add'
import Del from './del'


function Goods() {
  return (
    <div className='goods'>
      <h1>Goods</h1>
      <nav className='goods-nav'>
        <ul>
          <li>
            <Link to='/goods/add'>add</Link>
          </li>
          <li>
            <Link to='/goods/del'>del</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/goods/add' component={Add} />
          <Route path='/goods/del' component={Del} />
        </Switch>
      </nav>
    </div>
  )
}

export default Goods
