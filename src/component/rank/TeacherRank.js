import React,{Component} from 'react'
import {getObject} from '../../config/public'
import Pages from '../Pages'
import {Link} from 'react-router'
class RankCard extends Component {
	constructor(args) {
		super();
		this.state = {
			CardList : getObject(10)
		}
	}

	render(){
		return(
			<ul className="clearFix">
			{this.state.CardList.map((item,index)=>{
				return(
						<li key={index}>
							<a className="pepole-card"><i className="icon-user"></i><i className="icon-tasks"></i></a>
							<Link to={"/TeacherDetail/" + index}>
								<img alt='test' src={require('../../style/images/portrait.png')}/>
								<p><span>No.{index+1}</span><font>李芮</font>华泰XXXXX分公司</p>
								<p>学习时长：<span>30.5</span>小时</p>
							</Link>
							<p>一个最好的方式是去了解同行业内其他人是怎么写个人简介的。比如，你将要为自己的主页写一段职业个人简介，看看其他的网站。看他们如何介绍自己，吸取他们写作的优点。</p>
						</li>
					)
			})}
			</ul>
			)
	}
}
class TeacherRank extends Component {
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
				<div className="filter clearFix pad-t-20">
					<ul className="filter-ul nav clearFix">
						<li className={this.state.activeIndex?"active":""} onClick={()=>{this.setState({activeIndex:true})}}><a>周榜</a></li>
						<li className={!this.state.activeIndex?"active":""} onClick={()=>{this.setState({activeIndex:false})}}><a>月榜</a></li>
					</ul>
				</div>
				<div className="rank-box">
				   <RankCard />
				</div>
				<div className="line"></div>
				<Pages />
			</div>
	    </div>
			)
	}
}
export default TeacherRank;