import React,{Component} from 'react'
import {Link} from 'react-router';
class Header extends Component {
	constructor(args) {
		super();
		this.state = {
			activeIndex: 0,
			headItems: [
			{
				href: '/',
				text: '主战',
			}, 
			{
				href: '/LearnCenter',
				text: '学习中心',
			},
			{
				href: '/GoodArticle',
				text: '精彩文章',
			},
			]
		}
	}
	componentWillMount() {
		let activeIndex = 0;
		for (let x of this.state.headItems) {
			if (x.href === this.props.page) {
				this.setState({
					activeIndex: activeIndex
				})
				break;
			}
			activeIndex++;
		}
	}
	render() {
		return(
		<div className="header">
			<div className="layout">
				<Link to="/" className="logo"></Link>
				<ul className="page-in">

		           {
		           	this.state.headItems.map((item, index) => {
		           		let className = this.state.activeIndex === index ? 'active' : '';
		           		return (
		           			<li key={index}><Link className={className} onClick={()=>{this.setState({activeIndex:index})}} to={item.href}>{item.text}</Link></li>
		           		)
		           	})
		           }

{/*					<li><Link onClick={(e)=>this.changePage(e)} to="/" className="active">主战</Link></li>
					<li><Link onClick={(e)=>this.changePage(e)} to="/LearnCenter">学习中心</Link></li>
					<li><Link onClick={(e)=>this.changePage(e)} to="/GoodArticle">精彩文章</Link></li>
					<li><Link onClick={(e)=>this.changePage(e)} to="/Rank">排行榜</Link></li>
					<li><Link onClick={(e)=>this.changePage(e)} to="/Circle">圈子</Link></li>
					<li><Link onClick={(e)=>this.changePage(e)} to="/PersonalCenter">个人中心</Link></li>*/}

				</ul>
				<div className="header-right">
					<a className="mail-info"><i className="icon-envelope-alt"></i></a>
					{/*<a className="btn login-btn">登录</a>*/}
					<a className="portrait">
					   <img alt='head' src={require('../style/images/portrait.png')} />
					</a>
					<a className="btn sign-btn">签到</a>
					<p className="sign-info">07月18日<br/>漏签<span>0</span>天</p>
				</div>
			</div>
		</div>
			)
	}
}
export default Header

