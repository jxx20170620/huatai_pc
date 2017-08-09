import React,{Component} from 'react'
import {getObject} from '../config/public'
import GoodCourse from './GoodCourse'
import {Link} from 'react-router'
import Pages from './Pages'
class Information extends Component {
	constructor(args) {
		super();
	}
	render(){
		return(
			<div className="panel-120 bg-FFFFFF box-shadow">
				<div className="video-box">
					<video src={require('../style/images/history.mp4')} controls="controls"  width="630p" height="375" 
					// poster={require('../style/images/test2.png')} 
					preload="auto">
						您的浏览器不支持 video 标签。
					</video>
				</div>
				<div className="v-info">
					<div className="v-cont">
						<h3>&lceil;<span>杨秀云</span>&rfloor;<span>课程名称</span></h3>
						<p>那一刻是凌晨，我从线下活动的郑州赶回来，下了火车直奔家门。客厅的灯开着，家人早已入睡，我身子只是一斜，肩头的包就溜到了沙发上。我去卧室时才发觉手里居然还一直拿着路上看的小说，张爱玲的《小艾》……</p>
					</div>
					<div className="enclosure">
						<h3>课程附件</h3>
						<ul>
							<li>课程附件_1.pdf</li>
							<li>课程附件_1.pdf</li>
							<li>课程附件_1.pdf</li>
						</ul>
					</div>
					<div className="collect-like">
						<Link to='/TestOnline' className="btn btn-answer">在线答题</Link>
						<span style={{paddingLeft:'50px'}}><i className="icon-heart"></i>2054</span>
						<span><i className="icon-thumbs-up"></i>2054</span>
						<span><i className="icon-admire"></i>54</span>
					</div>
				</div>
			</div>
			)
	}
}
class Reply extends Component {
	constructor(args) {
		super();
		this.state={
			replyList:getObject(3),
			other_repleyList:getObject(2)
		}
	}

	render(){
		return(
			<div>
			  {this.state.replyList.map((item,index)=>{
			  	return(
			  		<div key={index} className="panel-95 bg-FFFFFF box-shadow clearFix">
						<div className="people-img">
							<img src={require('../style/images/portrait.png')} alt='head'/>
						</div>
						<div className="name-time">
							<p className="name"><span>Peter Quinn</span><span>会员等级</span></p>
							<p className="time"><i className="icon-time"></i>2017-06-12 17:21:07</p>
						</div>
						<div className="comment-txt">
							<p>课程内容很精彩，感谢XX老师的精彩讲解。</p>
							<div className="collect-reply">
								<a><i className="icon-thumbs-up"></i>2054</a>
								<a><i className="icon-reply-2x"></i>回复</a>
							</div>
							<div className="reply-box">
								<div className="comment">
									<textarea placeholder="写下你的评论内容…"></textarea>
								</div>
								<div className="comment-btn clearFix">
									<a className="btn">取消</a>
									<a className="btn btn-blue">回复</a>
								</div>
							</div>
						</div>
						{this.state.other_repleyList.map((item,index)=>{
							return(
						          <div key={index} className="other-reply">
						        	<div className="one-reply">
						        		<dl className="clearFix">
						        			<dt>李莉莉：</dt>
						        			<dd><span>@Peter Quinn</span>谢谢！</dd>
						        		</dl>
						        		<div className="time-reply">
						        			<span>2017.07.05  19:30</span>
						        			<a><i className="icon-reply-2x"></i>回复</a>
						        		</div>
						        	</div>
						        </div>
								)
						})}
				   </div>		
			  		)
			  })}
		</div>
			)
	}
}
class CourseDetail extends Component {
	constructor(args) {
		super();
	}

	render(){
		return(
			 <div className="wrapper bg-F0F4F6">
			   <Information />
			   <div className="layout clearFix">
			      <div className="left-layout">
			   			<div className="filter clearFix pad-t-20 mar-b-20">
						<span className="comment-num floatL">7,306  评论</span>
						<ul className="filter-ul-1">
							<li><a className="active">按喜欢度排序<i className="icon-caret-up"></i><i className="icon-caret-down"></i></a></li>
							<li><a>按时间排序<i className="icon-caret-up"></i><i className="icon-caret-down"></i></a></li>
						</ul>
					    </div>
			           <div className="panel-95 bg-FFFFFF box-shadow clearFix">
			             	<div className="people-img">
			             		<img alt='head' src={require('../style/images/portrait.png')}/>
			             	</div>
			             	<div className="comment">
			             		<textarea placeholder="写下你的评论内容…"></textarea>
			             	</div>
			             	<div className="comment-btn clearFix">
			             		<a className="btn">取消</a>
			             		<a className="btn btn-blue">发送</a>
			             	</div>
			             </div>
			             <Reply />
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
export default CourseDetail;