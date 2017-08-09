import React,{Component} from 'react'
import {getObject} from '../config/public'
import Pages from './Pages'
import AddCourse from './AddCourse'
class Manage extends Component {
	constructor(args) {
		super()
		this.state = {
			CourseList: getObject(5)
		}
	}

	render(){
		return(
			<div>
			    <div className="panel-120 bg-FFFFFF">
					<div className="select">
						<label>筛选：</label>
						<select>
							<option>全部</option>
							<option>草稿</option>
							<option>审核中</option>
							<option>未通过</option>
							<option>已通过</option>
						</select>
					</div>
				</div>
				<div className="table bg-FFFFFF box-shadow">
					<ul className="table-th clearFix">
						<li>课程名称</li>
						<li>状态/操作</li>
					</ul>
					<ul className="table-td">
					{this.state.CourseList.map((item,index)=>{
						return(
						      <li key={index}>
						      	<div className="info">
						      		<div className="img"><img alt='test' src={require('../style/images/test.png')}/><div className="play"><i className="icon-play"></i></div></div>
						      		<div className="info-txt">
						      			<h3>课程名称</h3>
						      			<p>那一刻是凌晨，我从线下活动的郑州赶回来，下了火车直奔家门。客厅的灯开着，家人早已入睡，我身子只是一斜，肩头的包就溜到了沙发上。我去卧室时才发觉手里居然还一直拿着路上看的小说，张爱玲的《小艾》……</p>
						      			<span><i className="icon-time"></i>2017-06-12 17:21:07</span>
						      		</div>
						      	</div>
						      	<div className="state">
						      		<span className="blue">审核中</span>
						      	</div>
						      </li>
							)
					})}
					</ul>
				</div>
				<div className="line"></div>
				<Pages />
		   </div>
			)
	}
}


class CourseManage extends Component {
	constructor(args) {
		super();
		this.state = {
			activeIndex : true
		}
	}
	componentWillMount() {
		if (this.props.location.pathname !== '/CourseManage') {
			this.setState({
				activeIndex: false
			})
		}
	}
	render(){
		return(
		  <div className="wrapper bg-F0F4F6">
			<div className="layout clearFix">
			    <div className="filter clearFix pad-t-20">
					<ul className="filter-ul clearFix">
						<li><a className={this.state.activeIndex?"active":""} onClick={()=>{this.setState({activeIndex:true})}}>课程管理</a></li>
						<li><a className={!this.state.activeIndex?"active":""} onClick={()=>{this.setState({activeIndex:false})}}>创建课程</a></li>
					</ul>
					
					{this.state.activeIndex?<div className="filter-search floatR" style={{marginRight:'0px'}}>
						<input type="text" placeholder="搜索"/>
						<a className="btn search-btn"><i className="icon-search"></i></a>
					</div>:null}
				</div>

				{this.state.activeIndex?
					<Manage />
					:
					<AddCourse />
				}
				
			  </div>
			</div>
			)
	}
}
export default CourseManage;