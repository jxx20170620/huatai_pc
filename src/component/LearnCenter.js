import React,{Component} from 'react'
import {getObject} from '../config/public'
import {Link} from 'react-router'
import GoodCourse from './GoodCourse'
import Pages from './Pages'
class CourseList extends Component {
	constructor(args) {
		super();
		this.state = {
			courseList: getObject(4)
		}
	}

	render() {
		return (
			<div>
			{this.state.courseList.map((item,index)=>{
				return(
					<div key={index} className="panel-95 bg-FFFFFF box-shadow">
					<Link to={"/CourseDetail/"+index} className="v-img">
					<img alt='head' src={require('../style/images/test.png')}/>
					<div className="play"><i className="icon-play"></i></div>
					</Link>
					<div className="v-info">
					   <div className="v-author">
					   <img alt='course_image' src={require('../style/images/portrait.png')}/>
					   <div className="author-info">
					   <p>Addie Griffith</p>
					   <span><i className="icon-time"></i>2017-06-12 17:21:07</span>
					   </div>
					   </div>
					    <div className="v-cont">
					    <h3>课程名称</h3>
					    <p>那一刻是凌晨，我从线下活动的郑州赶回来，下了火车直奔家门。客厅的灯开着，家人早已入睡，我身子只是一斜，肩头的包就溜到了沙发上。我去卧室时才发觉手里居然还一直拿着路上看的小说，张爱玲的《小艾》……</p>
					    </div>
					    <div className="collect-like">
					    <span><i className="icon-heart"></i>2054</span>
					    <span><i className="icon-thumbs-up"></i>2054</span>
					    </div>
					</div>
					</div>
					)
			})}
			</div>
			)
	}
}

class LearnCenter extends Component {
	constructor(args) {
		super();
	}

	render(){
		return(
		<div className="wrapper bg-F0F4F6">
			     <div className="layout clearFix">
			       <div className="left-layout">
			       	   <div className="filter clearFix pad-t-20 mar-b-20">
				        <ul className="filter-ul clearFix">
				        	<li><a className="active">视频热度排序</a></li>
				        	<li><a>发布时间排序</a></li>
				        </ul>
				        <div className="layout-filter floatR">
				        	<a><i className="icon-th-large"></i></a>
				        	<a className="active"><i className="icon-reorder"></i></a>
				        </div>
				   
				     <div className="filter-search floatR">
				     	<input type="text" placeholder="搜索"/>
				     	<a className="btn search-btn"><i className="icon-search"></i></a>
				      </div>
			        </div>
                        <CourseList />
                            <div className="line"></div>
			       </div>
			        <div className="right-layout">
			        	 <div className="panel-27-head">
					     	<h3 className="title">精品课程</h3>
					     	<div className="page-tab">
					     		<span>1/3</span>
					     		<a className="pre"><i className="icon-angle-left"></i></a>
					     		<a className="nex"><i className="icon-angle-right"></i></a>
					     	</div>
					     </div>
			             <GoodCourse />
			        </div>
			     </div>

			     <Pages />

	   </div>

			)
	}
}
export default LearnCenter;

