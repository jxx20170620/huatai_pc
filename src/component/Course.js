import React,{Component} from 'react'
import {Link} from 'react-router'

class Course extends Component {
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
				<Link to={"/CourseDetail/"+this.state.course.id}>
					<img alt='test' src={require('../style/images/test9.png')} />
					<p className="title">{this.state.course.name}</p>
					<p className="like">
					  <span><i className="icon-heart"></i>12331</span>
					  <span className="floatR">个险</span>
					</p>
				</Link>
			)
	}
}
export default Course;