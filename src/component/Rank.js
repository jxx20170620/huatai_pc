import React,{Component} from 'react'
import {getObject} from '../config/public'
import {Link} from 'react-router'
class StudentRank extends Component {
	constructor(args) {
		super();
		this.state = {
			List : getObject(8)
		}
	}

	render(){
		return(
				<div className="row pad-t-20">
					<div className="row bg-FFFFFF box-shadow clearFix">
						<div className="rank-title">
							<span>优秀学员周排行榜</span>
							<Link to='/StudentRank' className="floatR">更多&gt;</Link>
						</div>
						<div className="left-layout"></div>
						<div className="right-layout">
							<div className="panel-27 pad-l-20 pad-r-20">
								<div className="panel-27-head">
									<h3 className="title" style={{marginTop:'0px'}}>李芮</h3>
									<div className="page-tab">
										<span>1/5</span>
										<a className="pre"><i className="icon-angle-left"></i></a>
										<a className="nex"><i className="icon-angle-right"></i></a>
									</div>
								</div>
								<ul className="rank-details">
									<li><span>近期课程</span><font>讲师</font></li>
									{this.state.List.map((item,index)=>{
										return(
                                               <li key={index}><span>课程名称</span><font>XXX</font></li>
											)
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)
	}
}
class TeacherRank extends Component {
	constructor(args) {
		super();
		this.state = {
			List : getObject(8)
		}
	}

	render(){
		return(
				<div className="row pad-t-20">
					<div className="row bg-FFFFFF box-shadow clearFix">
						<div className="rank-title">
							<span>优秀讲师周排行榜</span>
							<Link to='/TeacherRank' className="floatR">更多&gt;</Link>
						</div>
						<div className="left-layout"></div>
						<div className="right-layout">
							<div className="panel-27 pad-l-20 pad-r-20">
								<div className="panel-27-head">
									<h3 className="title" style={{marginTop:'0px'}}>李芮</h3>
									<div className="page-tab">
										<span>1/5</span>
										<a className="pre"><i className="icon-angle-left"></i></a>
										<a className="nex"><i className="icon-angle-right"></i></a>
									</div>
								</div>
								<ul className="rank-details">
									<li><span>热播课程</span><font>点播次数</font></li>
									{this.state.List.map((item,index)=>{
										return(
                                               <li key={index}><span>课程名称</span><font>2000</font></li>
											)
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)
	}
}
class Rank extends Component {
	constructor(args) {
		super();
	}

	render(){
		return(
		<div className="wrapper bg-F0F4F6">
			<div className="layout clearFix">
			   <StudentRank />
			   <TeacherRank />
			</div>
	    </div>
			)
	}
}
export default Rank;