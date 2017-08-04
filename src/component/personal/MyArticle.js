import React,{Component} from 'react'
import {getObject} from '../../config/public'
import Pages from '../Pages'
class Articles extends Component {
	constructor(args) {
		super();
		this.state = {
			ArticleList : getObject(5)
		}
	}

	render(){
		return(
			<div>
			{this.state.ArticleList.map((item,index)=>{
				return(
					<div className="panel-120 bg-FFFFFF box-shadow">
						<div className="article-list article-list-1">
							<p className="title">有哪些保险是值得推荐的？</p>
							<p className="content">17.06.11提示:本回复仅供探讨产品之用,不构成任何产品推荐,需要保险规划,购买产品请找专业人士咨询.先把整理出来的思维导图上上来,请大家参考.不着急买,先做功课.无论谁来说服,恐吓,哀求,暗示,都不要着急.只有冷静思考,才能正确决定.假如在日常生活开支能够……<span>查看全文</span></p>
							<p className="time">2016-06-17 14:07:21</p>
						</div>
						<div className="operate">
							<span className="red">未通过</span>
							<div className="operate-btn">
								<a className="blue">查看</a>
								<a className="blue-1">编辑</a>
								<a className="red">删除</a>
							</div>
						</div>
					</div>
					)
			})}
			</div>
			)
	}
}
class MyArticle extends Component {
	constructor(args) {
		super();
		this.state = {
			activeIndex : 0
		}
	}
	render(){
		return(
			<div>
				
				<div className="row">
					<div className="common-title">
						<span>我的文章</span>
					</div>
					<div className="row btn-filter">
						<ul className="nav clearFix">
							<li className={this.state.activeIndex===0?"active":""} onClick={()=>{this.setState({activeIndex:0})}}><a>全部</a></li>
							<li className={this.state.activeIndex===1?"active":""} onClick={()=>{this.setState({activeIndex:1})}}><a>待审核</a></li>
							<li className={this.state.activeIndex===2?"active":""} onClick={()=>{this.setState({activeIndex:2})}}><a>已通过</a></li>
							<li className={this.state.activeIndex===3?"active":""} onClick={()=>{this.setState({activeIndex:3})}}><a>未通过</a></li>
						</ul>
						<a className="btn btn-blue">发布</a>
					</div>
					<Articles />
				</div>

				<div className="line"></div>
			    <Pages />

			</div>
			)
	}
}
export default MyArticle;