import React,{Component} from 'react'
import {getObject} from '../../config/public'
import Pages from '../Pages'
import CourseBig from '../CourseBig'
import GoodCourse from '../GoodCourse'
class StudentDetail extends Component {
	constructor(args) {
		super();
		this.state = {
			CourseList : getObject(4)
		}
	}

	render(){
		return(
		<div className="wrapper bg-F0F4F6">
			<div className="layout clearFix">
			   <div className="left-layout">
			   		<div className="common-title">
						<span>学员信息</span>
					</div>
					<div className="panel-95 bg-FFFFFF box-shadow">
						<div className="pepole-info">
							<a className="pepole-card"><i className="icon-user"></i><i className="icon-tasks"></i></a>
							<a>
								<img alt='test' src={require('../../style/images/portrait.png')} />
								<p><span>No.1</span><font>李芮</font>华泰XXXXX分公司</p>
								<p>学习时长：<span>30.5</span>小时</p>
							</a>
							<p>一个最好的方式是去了解同行业内其他人是怎么写个人简介的。比如，你将要为自己的主页写一段职业个人简介，看看其他的网站。看他们如何介绍自己，吸取他们写作的优点。</p>
						</div>
					</div>
					<div className="common-title">
						<span>近期点播课程</span>
					</div>
					{this.state.CourseList.map((item,index)=>{
						return(
					           <div key={index}>
					             <CourseBig id={index}/>
					           </div>
							)
					})}
					<div className="line"></div>
					<Pages />

			   </div>
			   		<div className="right-layout">
					  <GoodCourse />
					</div>
			</div>
	    </div>
			)
	}
}
export default StudentDetail;