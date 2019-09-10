import React from 'react';
import { Link, Route } from 'react-router-dom'
import Getup from './Getup';
import Money from './Money';
function WorkPlace() {
  return (
    <div>
      <h4>这是二级导航</h4>
      <div className="topNav">
        <ul>
          <li>
            <Link to='/workplace/getup'>早起</Link>
          </li>
          <li>
            <Link to='/workplace/money'>加薪</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <Route path='/workplace/' exact component={Getup}></Route>
        <Route path='/workplace/getup' component={Getup}></Route>
        <Route path='/workplace/money' component={Money}></Route>
      </div>
    </div>
  )
}
export default WorkPlace