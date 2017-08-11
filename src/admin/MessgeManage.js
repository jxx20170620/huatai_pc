import React,{Component} from 'react'
import {getObject} from '../config/public'
import Pages from './Pages'
class MessgeManage extends Component {
	constructor(args) {
		super()
		this.state = {
			MessgeList : getObject(10),
			activeIndex : 0
		}
			
	}
	render() {

		return (
			<div className="container">
				<div className="common-title">消息管理</div>
				<div className="row btn-filter">
					<a className="btn btn-blue">新增</a>
				</div>
				    <div className="row pad-t-20">
					  <ul className="msg-gl">
					  {this.state.MessgeList.map((item,index)=>{
					  	return(
						      <li key={index}>
						      	<p className="title">华泰蜂行智能学习平台上线通知</p>
						      	<p className="content">华泰蜂行智能学习平台与 2017年XX月XX日，XX时XX分XX秒正式上线。欢迎您体验使用。移动端APP已同步上线，请点击如下连接下载安装。</p>
						      	<a>www.xxx.com/fengxing/#</a>
						      	<p className="time">2016-06-17 14:07:21</p>
						      	<i className="icon-envelope-alt"></i>
						      	<i className="icon-remove" title="删除"></i>
						      </li>
					  		)
					  })}
					  </ul>
					  <div className="line"></div>
				      <Pages />
					</div>
			</div>

		)
	}

}
export default MessgeManage

