import React,{Component} from 'react'
import {getObject} from '../config/public'
import Pages from './Pages'
class CourseManage extends Component {
	constructor(args) {
		super()
		this.state = {
			CourseList : getObject(8),
			activeIndex : 0
		}
			
	}
	render() {

		return (
			<div className="container">
			  	<div className="common-title">课程管理
					<div className="filter-search floatR">
						<input type="text" placeholder="搜索"/>
						<a className="btn search-btn"><i className="icon-search"></i></a>
					</div>
				</div>
				<div className="row btn-filter">
					<ul className="nav clearFix">
						<li className={this.state.activeIndex === 0?'active':''} onClick={()=>{this.setState({activeIndex:0})}}><a>全部</a></li>
						<li className={this.state.activeIndex === 1?'active':''} onClick={()=>{this.setState({activeIndex:1})}}><a>待审核</a></li>
						<li className={this.state.activeIndex === 2?'active':''} onClick={()=>{this.setState({activeIndex:2})}}><a>已通过</a></li>
						<li className={this.state.activeIndex === 3?'active':''} onClick={()=>{this.setState({activeIndex:3})}}><a>未通过</a></li>
					</ul>
				</div>
				<div className="row pad-t-20">
				    <div className="table bg-FFFFFF box-shadow">
				        <ul className="table-td">
				        {this.state.CourseList.map((item,index)=>{
				        	return(
					                <li key={index}>
					                	<div className="info">
					                		<div className="img">
					                		    <img src={require('../style/images/test.png')} alt='test'/>
					                		    <div className="play"><i className="icon-play"></i></div>
					                		</div>
					                		<div className="info-txt">
					                			<h3>课程名称</h3>
					                			<p>那一刻是凌晨，我从线下活动的郑州赶回来，下了火车直奔家门。客厅的灯开着，家人早已入睡，我身子只是一斜，肩头的包就溜到了沙发上。我去卧室时才发觉手里居然还一直拿着路上看的小说，张爱玲的《小艾》……</p>
					                			<span>2017-06-12 17:21:07</span>
					                		</div>
					                	</div>
					                	<div className="state">
					                		<span className="blue">审核中</span>
					                		<a className="btn btn-blue">审核</a>
					                	</div>
					                </li>
				        		)
				        })}
				        </ul>
				  </div>
				<div className="line"></div>
				<Pages />
				</div>
			</div>

		)
	}

}
export default CourseManage

