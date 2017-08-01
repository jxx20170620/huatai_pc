import React from 'react';
// import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { Router, Route, IndexRoute,hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import store from './redux/Store/Store'
import App from './component/App'
import Index from './component/Index'
import LearnCenter from './component/LearnCenter'
import GoodArticle from './component/GoodArticle'
import CourseDetail from './component/CourseDetail'
import TestOnline from './component/TestOnline'
import './style/less/config.less';
import  './style/css/font-awesome.min.css';

render(
	<Provider store={store}>
       <Router history={hashHistory}>
         <Route path='/' component={App}>
             <IndexRoute component={Index}/>
             <Route path='LearnCenter' component={LearnCenter}/>
             <Route path='GoodArticle' component={GoodArticle}/>
             <Route path='CourseDetail/:id' component={CourseDetail}/>
             <Route path='TestOnline' component={TestOnline}/>
         </Route>
       </Router>
    </Provider>,
	document.getElementById('root')
);
// registerServiceWorker();

