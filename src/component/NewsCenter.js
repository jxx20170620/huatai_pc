import React,{Component} from 'react'
import {getObject} from '../config/public'
import Pages from './Pages'
import GoodCourse from './GoodCourse'
class Read extends Component {
	constructor(args) {
		super()
		this.state = {
			NewsList : getObject(4)
		}
	}

	render(){
		return(
					<div className="row tab" style={{paddingTop:'20px'}}>
					   {this.state.NewsList.map((item,index)=>{
					   	return(
						<div key={index} className="panel-95 bg-FFFFFF box-shadow">
							<div className="mail-box">
								<p className="title">华泰蜂行智能学习平台上线通知</p>
								<p className="content">华泰蜂行智能学习平台与 2017年XX月XX日，XX时XX分XX秒正式上线。欢迎您体验使用。移动端APP已同步上线，请点击如下连接下载安装。</p>
								<a>www.xxx.com/fengxing/#</a>
								<p className="time">2016-06-17 14:07:21</p>
								<i className="icon-envelope-alt"></i>
								<i className="icon-remove" title="删除"></i>
							</div>
						</div>
					   		)
					   })}
					   <div className="line"></div>
					   <Pages />
					</div>
			)
	}
}
class UnRead extends Component {
	constructor(args) {
		super()
		this.state = {
			NewsList : getObject(4)
		}
	}

	render(){
		return(
					<div className="row tab" style={{paddingTop:'20px'}}>
					   {this.state.NewsList.map((item,index)=>{
					   	return(
						<div key={index} className="panel-95 bg-FFFFFF box-shadow">
							<div className="mail-box">
								<p className="title">华泰蜂行智能学习平台上线通知</p>
								<p className="content">华泰蜂行智能学习平台与 2017年XX月XX日，XX时XX分XX秒正式上线。欢迎您体验使用。移动端APP已同步上线，请点击如下连接下载安装。</p>
								<a>www.xxx.com/fengxing/#</a>
								<p className="time">2016-06-17 14:07:21</p>
								<i className="icon-envelope"></i>
								<i className="icon-remove" title="删除"></i>
							</div>
						</div>
					   		)
					   })}
					   <div className="line"></div>
					   <Pages />
					</div>
			)
	}
}
class NewsCenter extends Component {
	constructor(args) {
		super();
		this.state = {
			activeIndex : true
		}
	}

	render(){
		return(
		<div className="wrapper bg-F0F4F6">
		   <div className="layout clearFix">
		   <div className="left-layout">
		       	    <div className="filter clearFix pad-t-20">
						<ul className="filter-ul nav clearFix">
							<li className={this.state.activeIndex?"active":""} onClick={()=>{this.setState({activeIndex:true})}}><a>未读</a></li>
							<li className={!this.state.activeIndex?"active":""} onClick={()=>{this.setState({activeIndex:false})}}><a>已读</a></li>
						</ul>
					</div>
					{this.state.activeIndex?<UnRead />:<Read />}
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
	    </div>
			)
	}
}
export default NewsCenter;