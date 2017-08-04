import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { Router, Route, IndexRoute,hashHistory,Redirect} from 'react-router'
import {Provider} from 'react-redux'
import store from './redux/Store/Store'
import App from './component/App'
import Index from './component/Index'
import LearnCenter from './component/LearnCenter'
import GoodArticle from './component/GoodArticle'
import CourseDetail from './component/CourseDetail'
import TestOnline from './component/TestOnline'
import PersonalCenter from './component/PersonalCenter'
import Rank from './component/Rank'

import Login from './component/Login'
import NotFoundPage from './component/NotFoundPage'
import './style/less/config.less';
import  './style/css/font-awesome.min.css';

render(
	<Provider store={store}>
       <Router history={hashHistory}>
         <Route path='Login' component={Login} />
         <Route path='/' component={App}>
             <IndexRoute component={Index}/>
             <Route path='LearnCenter' component={LearnCenter}/>
             <Route path='GoodArticle' component={GoodArticle}/>
             <Route path='CourseDetail/:id' component={CourseDetail}/>
             <Route path='TestOnline' component={TestOnline}/>
             <Route path='PersonalCenter' component={PersonalCenter}/>
             <Route path='Rank' component={Rank}/>
         </Route>
         <Route path='/404' component={NotFoundPage} />
         <Redirect from='*' to='/404' />
       </Router>
    </Provider>,
	document.getElementById('root')
);
registerServiceWorker();

