import React from 'react';
import {Route,IndexRoute} from 'react-router'
import App from './admin/App'
import BookManage from './admin/BookManage'
import MessgeManage from './admin/MessgeManage'
import CourseManage from './admin/CourseManage'

const adminRoutes = (
    <Route path='admin' component={App}>
            <IndexRoute component={BookManage}/>
            <Route path='MessgeManage' component={MessgeManage} />
            <Route path='CourseManage' component={CourseManage} />
    </Route>

);
export default adminRoutes;