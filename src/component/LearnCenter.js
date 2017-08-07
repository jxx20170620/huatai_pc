import React,{Component} from 'react'
import {getObject} from '../config/public'
import GoodCourse from './GoodCourse'
import Pages from './Pages'
import CourseBig from './CourseBig'
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
					<div key={index}>
					   <CourseBig id={index}/>
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
		this.state = {
			activeIndex: true
		}
	}

	render(){
		return(
		<div className="wrapper bg-F0F4F6">
			     <div className="layout clearFix">
			       <div className="left-layout">
			       	   <div className="filter clearFix pad-t-20 mar-b-20">
				        <ul className="filter-ul clearFix">
				        	<li><a className={this.state.activeIndex?"active":""} onClick={()=>{this.setState({activeIndex:true})}}>视频热度排序</a></li>
				        	<li><a className={!this.state.activeIndex?"active":""} onClick={()=>{this.setState({activeIndex:false})}}>发布时间排序</a></li>
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
			             <GoodCourse />
			        </div>
			     </div>

			     <Pages />

	   </div>

			)
	}
}
export default LearnCenter;

