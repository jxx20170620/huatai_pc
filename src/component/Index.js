import React,{Component} from 'react'
import {getObject} from '../config/public'
import Slider from 'react-slick';
import Course from './Course'
const imgStyle = {
	width: '100%',
	height: '350px'
}
class Banner extends Component {
	constructor(args) {
		super();

	}
	componentDidMount() {

	}
	render() {
		const settings = {
			dots: true,
			// infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true
		};
		return (
			<Slider {...settings}>
               <div><img style={imgStyle} alt='test' src={require('../style/images/test4.png')} /></div>
               <div><img style={imgStyle} alt='test' src={require('../style/images/test10.png')} /></div>
               <div><img style={imgStyle} alt='test' src={require('../style/images/test7.png')} /></div>
             </Slider>
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
							   <Course />
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
			  				<li key={index} className="have-img slider-item">
			  					<a>
			  						<img alt='test' src={require('../style/images/book.png')}/>
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
function SampleNextArrow(props) {
  // console.log(props)
  const {onClick} = props
  return (
    <div
      className={"arr arr-left "}
      onClick={onClick}
    >
    <i className="icon-angle-left"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {onClick} = props
  return (
    <div
      className={"arr arr-right "}
      onClick={onClick}
    >
    <i className="icon-angle-right"></i>
    </div>
  );
}
class GoodTeacher extends Component {
	constructor(args) {
		super();
		this.state = {
			teacherList: getObject(10)
		}
	}
	componentDidMount() {
		
	}
	render(){
		const settings = {
			// dots: true,
			// infinite: true,
			speed: 500,
			slidesToShow: 5,
			swipeToSlide: true,
			slidesToScroll: 5,
						nextArrow: <SampleNextArrow />,
						prevArrow: <SamplePrevArrow />
		};
		return(

			   <Slider {...settings} className="good-teacher">
			      {this.state.teacherList.map((item,index)=>{
			      	return(
			      			<div key={index}>
			      				<div className='back'>
			      					<img src={require('../style/images/book2.png')} alt='test'/>
			      				</div>
			      				<p className="name">张江{index}</p>
			      				<p className="english">zhangjiang</p>
			      			</div>
			      		)
			      })}
			   </Slider>
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
					     <div className="index-title">
							<span>优秀讲师</span>
						</div>
						<GoodTeacher />
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