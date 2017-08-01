import React,{Component} from 'react'
import {getObject} from './config'
import GoodCourse from './GoodCourse'
import {Link} from 'react-router'
class ArticleList extends Component {
	constructor(args) {
		super();
		this.state={
			articleList:getObject(7)
		}
	}

	render(){
		return(
			<div>
			{this.state.articleList.map((item,index)=>{
				return(
					  <div key={index} className="panel-95 bg-FFFFFF box-shadow">
					  	<Link to="/ArticleDetail" className="article-list">
					  		<p className="title">有哪些保险是值得推荐的？</p>
					  		<p className="content">17.06.11提示:本回复仅供探讨产品之用,不构成任何产品推荐,需要保险规划,购买产品请找专业人士咨询.先把整理出来的思维导图上上来,请大家参考.不着急买,先做功课.无论谁来说服,恐吓,哀求,暗示,都不要着急.只有冷静思考,才能正确决定.假如在日常生活开支能够……<span>查看全文</span></p>
					  		<p className="time">2016-06-17 14:07:21</p>
					  	</Link>
					  </div>
					)
			})}
			</div>
			)
	}
}
class GoodArticle extends Component {
	constructor(args) {
		super();
	}

	render(){
		return(
			 <div className="wrapper bg-F0F4F6">
			   <div className="layout clearFix">
			      <div className="left-layout" style={{paddingTop:'40px'}}>
			             <ArticleList />
			             <div className="pages">
		                 	<ul className="pagination clearFix">
		                 	    <li>
		                 	        <a className="previous">上一页</a>
		                 	    </li>
		                 	    <li><a className="active">1</a></li>
		                 	    <li><font>...</font></li>
		                 	    <li><a>5</a></li>
		                 	    <li><a>6</a></li>
		                 	    <li><font>...</font></li>
		                 	    <li><a>10</a></li>
		                 	    <li>
		                 	        <a className="next">下一页</a>
		                 	    </li>
		                 	    <li>
		                 	        <a className="last">尾页</a>
		                 	    </li>
		                 	</ul>
		                 </div>
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
export default GoodArticle;