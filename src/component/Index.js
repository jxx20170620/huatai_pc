import React,{Component} from 'react'
import {getObject} from './config'
import {Link} from 'react-router'
class Banner extends Component {
	constructor(args) {
		super();

	}
	render() {
		return (
			<div id="myCarousel" className="carousel slide">
              	
              	<ol className="carousel-indicators">
              		<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              		<li data-target="#myCarousel" data-slide-to="1"></li>
              		<li data-target="#myCarousel" data-slide-to="2"></li>
              	</ol>   
              
              	<div className="carousel-inner">
              		<div className="item active">
              			<img alt='test' src={require('../style/images/test.png')} />
              		</div>
              		<div className="item">
              			<img alt='test' src={require('../style/images/test.png')} />
              		</div>
              		<div className="item">
              			<img alt='test' src={require('../style/images/test.png')} />
              		</div>
              	</div>
              
              	<a className="carousel-control left" href="#myCarousel" 
              	   data-slide="prev">&lsaquo;</a>
              	<a className="carousel-control right" href="#myCarousel" 
              	   data-slide="next">&rsaquo;</a>

           </div>
		)
	}


}
class HotCourse extends Component {
	constructor(args) {
		super();
		this.state = {
			courseList: getObject(6)
		}
	}
	render() {
		return (
			<ul className="index-course clearFix">
			{
				this.state.courseList.map((item,index)=>{
					return(
							<li key={index}>
								<Link to={"/CourseDetail/"+index}>
									<img alt='test' src={require('../style/images/test.png')} />
									<p className="title">课程名称</p>
									<p className="like"><span><i className="icon-heart"></i>12331</span><span className="floatR">个险</span></p>
								</Link>
							</li>
						)
				})
			}
		   </ul>
		)
	}


}
class GoodStudents extends Component {
	constructor(args) {
		super();
		this.state = {
			personList: getObject(10)
		}
	}
	render() {
		return (
			<div className="panel-27 bg-FFFFFF box-shadow pad-l-20 pad-r-20">
					<div className="panel-27-head">
						<h3 className="title" style={{marginTop: '0'}}>本月优秀学员</h3>
						<div className="page-tab">
							<span>1/5</span>
							<a className="pre"><i className="icon-angle-left"></i></a>
							<a className="nex"><i className="icon-angle-right"></i></a>
						</div>
					</div>
					<ul className="index-rank">
					{this.state.personList.map((item,index)=>{
						let ClassName;
						switch(index){
							case 0:ClassName='rank rank-one';break;
							case 1:ClassName='rank rank-two';break;
							case 2:ClassName='rank rank-three';break;
							default:ClassName='rank';break;
						}
						return(
							<li key={index}><span className={ClassName}>{index+1}</span><span>李*明</span><span>会员等级A</span><span>已学习100小时</span></li>
							)
					})}
					</ul>
					<a className="look-more bg-FFFFFF">查看全部</a>
		 </div>
		)
	}


}
class GoodArticle extends Component {
	constructor(args) {
		super();
		this.state = {
			articleList: getObject(4)
		}
	}
	render() {
		return (
			<ul className="index-article clearFix">
			  {this.state.articleList.map((item,index)=>{
			  	return(
			  				<li key={index} className="have-img">
			  					<a>
			  						<img alt='test' src={require('../style/images/test.png')}/>
			  						<p className="title">如何用保险保障自己的一生？</p>
			  						<p className="content">我写这回答的目的是希望各位有幸看到本文的朋友能抽出您人生中的30分钟尽量一字不拉地读完本回答……</p>
			  						<p className="time"><i className="icon-time"></i>2017-06-12 17:21:07</p>
			  					</a>
			  				</li>
			  		)
			  })}
		  </ul>
		)
	}

}
class Index extends Component {
	constructor(args) {
		super();

	}
	render() {
		return (
			<div className="wrapper bg-F0F4F6">
			   <div className="layout clearFix">
			     <div className="row pad-t-20">
			       <Banner />
			     </div>

			     <div className="row">
			     	<div className="index-title">
						<span>热门课程</span>
						<a>更多&gt;</a>
						<div className="layout-filter floatR">
							<a><i className="icon-th-large"></i></a>
							<a className="active"><i className="icon-reorder"></i></a>
						</div>
					</div>

					<div className="left-layout">
			     	   <HotCourse />
			     	   	  <div className="index-title">
							<span>精彩文章</span>
							<a className="floatR">更多&gt;</a>
					      </div>
					      <GoodArticle />
			     	</div>

			     	<div className="right-layout">
                        <GoodStudents />
			     	</div>

			     </div>


			</div>
			</div>
		)
	}
}
export default Index