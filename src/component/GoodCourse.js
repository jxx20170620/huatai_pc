import React,{Component} from 'react'
import {getObject} from '../config/public'
class GoodCourse extends Component {
	constructor(args) {
		super();
		this.state = {
			courseList: getObject(5)
		}
	}

	render(){
		return(
			<div>
				{this.state.courseList.map((item,index)=>{
					return(

				    <div key={index} className="panel-27 bg-FFFFFF box-shadow">
						<a className="v-img">
							<img alt="test" src={require('../style/images/test3.png')}/>
						</a>
						<p className="v-title">课程名称</p>
						<div className="collect-like">
							<span><i className="icon-heart"></i>2054</span>
							<span><i className="icon-thumbs-up"></i>2054</span>
						</div>
					</div>

						)
				})}
				<a className="look-more bg-FFFFFF">查看全部</a>
			</div>
			)
	}
}
export default GoodCourse;