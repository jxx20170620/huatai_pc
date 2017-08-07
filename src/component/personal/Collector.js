import React,{Component} from 'react'
import {getObject} from '../../config/public'
import Course from '../Course'
import Pages from '../Pages'
import User from './User'
class MyCollect extends Component {
	constructor(args) {
		super();
		this.state = {
			CourseList:getObject(9)
		}
	}

	render(){
		return(
			<ul className="common-course clearFix">
			{this.state.CourseList.map((item,index)=>{
				return(
						<li key={index}>
						  <Course id={index}/>
						</li>
					)
			})}
		    </ul>		
			)
	}
}
class Collector extends Component {
	constructor(args) {
		super();
	}

	render(){
		return(
			<div>
			   <div className="left-layout">
			   		<div className="common-title">
						<span>我的收藏</span>
						<a className="floatR">更多&gt;</a>
					</div>
					<MyCollect />
					<div className="line"></div>
					<Pages />

			   </div>

			   	<div className="right-layout">
				    <User />
				</div>
			</div>
			)
	}
}
export default Collector;