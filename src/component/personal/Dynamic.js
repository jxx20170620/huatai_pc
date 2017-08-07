import React,{Component} from 'react'
import {getObject} from '../../config/public'
import Course from '../Course'
import Pages from '../Pages'
import User from './User'
class LearnDynamic extends Component {
	constructor(args) {
		super();
		this.state = {
			CourseList:getObject(6)
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
class Chat extends Component {
	constructor(args) {
		super();
		this.state = {
			ChatList:getObject(3)
		}
	}

	render(){
		return(
			<div className="row">
			{this.state.ChatList.map((item,index)=>{
				return(
					<div key={index} className="jl-list panel-95 bg-FFFFFF box-shadow">
							<div className="title">人工智能 + 健康保险，未来会改变什么？</div>
							<div className="user">
								<img src={require('../../style/images/portrait.png')} alt='test'/>
								<span>张江</span>
								<span>会员等级</span>
							</div>
							<div className="content">
								<p>通过机器学习加上客户的基本信息和健康历史，健康保险运营商将提高自身竞争力。如果有办法将医疗保健与机器学习结合起来，提供不仅仅更高效而且更主动的服务？能否削减成本、增强医保水平？它能帮助医保机构优化客户服务吗？而不仅仅依靠简单的指标…</p>
							</div>
							<div className="time-like">
								<span><i className="icon-time"></i>2017-07-12 17:34</span>
								<span><i className="icon-thumbs-up"></i>25485</span>
							</div>
							<div className="jing">
							<img src={require('../../style/images/icon-jc@2x.png')}  width="35" alt='test'/>
							</div>
					</div>
					)
			})}
		   </div>	
			)
	}
}
class Dynamic extends Component {
	constructor(args) {
		super();
	}

	render(){
		return(
			<div>
				<div className="left-layout">

					<div className="common-title">
						<span>学习动态</span>
						<a className="floatR">更多&gt;</a>
					</div>
					 <LearnDynamic />

					 <div className="common-title">
						<span>交流动态</span>
						<a className="floatR">更多&gt;</a>
					</div>
					<Chat />

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
export default Dynamic;