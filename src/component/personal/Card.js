import React,{Component} from 'react'
import {getObject} from '../../config/public'
class Honor extends Component {
	constructor(args) {
		super();
		this.state = {
			HonorList:getObject(3)
		}
	}

	render(){
		return(
			<ul className="clearFix">
			{this.state.HonorList.map((item,index)=>{
				return(
				      <li key={index}>
				      	<img src={require('../../style/images/jiangZ-2.png')} alt='test'/>
				      	<p>荣誉证书A证书名称</p>
				      </li>
					)
			})}
		    </ul>		
			)
	}
}
class FXHonor extends Component {
	constructor(args) {
		super();
		this.state = {
			HonorList:getObject(4)
		}
	}

	render(){
		return(
			<ul className="clearFix">
			{this.state.HonorList.map((item,index)=>{
				return(
						<li key={index}>
							<img src={require('../../style/images/biz.png')} alt='test'/>
							<p>荣誉证书A证书名称</p>
							<p className="time">2017/03/01 12:00:12</p>
						</li>
					)
			})}
		    </ul>		
			)
	}
}
class Card extends Component {
	constructor(args) {
		super();
	}

	render(){
		return(
			<div>

				<div className="row">
					<div className="common-title">
						<span>基本信息</span>
					</div>
					<div className="user-card">
						<img src={require('../../style/images/portrait.png')} alt='head' />
						<div className="user-info">
							<ul>
								<li className="name"><span>毛平山</span>男  05/17/1991生</li>
								<li><span>学历</span>本科</li>
								<li><span>毕业院校</span>上海交通大学</li>
								<li><span>手机</span>187****1258</li>
								<li><span>邮箱</span>98465464@qq.com</li>
							</ul>
							<ul className="right">
								<li><span>入职时间</span>2014-04-02</li>
								<li><span>所在地区</span>上海市 徐汇区</li>
								<li><span>职务</span>大区经理</li>
								<li><span>分公司</span>华泰上海分公司</li>
								<li><span>营业部</span>上海徐汇区业务部</li>
								<li><span>营业组</span>GDROU0001</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="row clearFix">
					<div className="panel-63 floatL">
						<div className="common-title">
							<span>荣誉证书</span>
						</div>
						<div className="row bg-FFFFFF box-shadow">
							<div className="honor-show">
							   <Honor />
							</div>
						</div>
					</div>
					<div className="panel-63 floatR">
						<div className="common-title">
							<span>蜂行荣誉</span>
						</div>
						<div className="row bg-FFFFFF box-shadow">
							<div className="honor-show-1">
							  <FXHonor />
							</div>
						</div>
					</div>
				</div>

			  <div className="row">
					<div className="common-title">
						<span>成长历程</span>
					</div>
					<div className="panel-120 bg-FFFFFF box-shadow" style={{top:'0px'}}>
						<div className="czjl">
							<img src={require('../../style/images/cz.png')} alt='chart'/>
							<ul>
								<li>2012-06-01</li>
								<li>2012-06-01</li>
								<li>2012-06-01</li>
								<li>2012-06-01</li>
								<li>2012-06-01</li>
							</ul>
						</div>
					</div>
			  </div>

			  	<div className="row">
					<div className="common-title">
						<span>个人感悟</span>
					</div>
					<div className="panel-120 bg-FFFFFF box-shadow" style={{top:'0px'}}>
						<p>一个最好的方式是去了解同行业内其他人是怎么写个人简介的。比如，你将要为自己的主页写一段职业个人简介，看看其他的网站。看他们如何介绍自己，吸取他们写作的优点。</p>
					</div>
				</div>

			</div>
			)
	}
}
export default Card;