/**
 * 二级导航页面
 */
import React from 'react';
import { Route, Link } from 'react-router-dom'
import ReactPage from './ReactPage';
import Vue from './Vue';
import Flutter from './Flutter';

function Video(){
  return(
    <div>
        <h4>这是二级导航</h4>
      <div className="topNav">
        <ul>
          <li>
            <Link to='/video/reactpage'>React学习</Link>
          </li>
          <li>
            <Link to='/video/vue'>Vue学习</Link>
          </li>
          <li>
            <Link to='/video/flutter'>Flutter学习</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>视频教程</h3>
        </div>
        <Route path='/video/reactpage' component={ReactPage}></Route>
        <Route path='/video/vue' component={Vue}></Route>
        <Route path='/video/flutter' component={Flutter}></Route>
      </div>
    </div>
  )
}
export default Video