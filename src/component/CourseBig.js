import React,{Component} from 'react'
import {Link} from 'react-router'

class CourseBig extends Component {
	constructor(args) {
		super();
		this.state = {
			course:[]
		}
	}
	componentWillMount() {
		let course = {
			id: this.props.id,
			name: '课程名称',
		};
		this.setState({
			course: course
		})
	}
	render(){
		return(
				<div className="panel-95 bg-FFFFFF box-shadow">
					<Link to={"/CourseDetail/"+this.state.course.id} className="v-img">
					<img alt='head' src={require('../style/images/test2.png')}/>
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
					    <h3>{this.state.course.name}</h3>
					    <p>那一刻是凌晨，我从线下活动的郑州赶回来，下了火车直奔家门。客厅的灯开着，家人早已入睡，我身子只是一斜，肩头的包就溜到了沙发上。我去卧室时才发觉手里居然还一直拿着路上看的小说，张爱玲的《小艾》……</p>
					    </div>
					    <div className="collect-like">
					    <span><i className="icon-heart"></i>2054</span>
					    <span><i className="icon-thumbs-up"></i>2054</span>
					    </div>
					</div>
			    </div>
			)
	}
}
export default CourseBig;