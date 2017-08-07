import React,{Component} from 'react'
import {Link} from 'react-router';
import { Menu, Dropdown } from 'antd';
import {connect} from 'react-redux'
class HoverMenu extends Component {
	constructor(args) {
		super();
	}
	handleClick(e){
		if(e.key === 'exit'){
			this.props.exit();
		}
	}
	render(){
		return(
               <Menu onClick={(e)=>this.handleClick(e)}>
                 <Menu.Item key="username">您好,{localStorage.getItem('username')}</Menu.Item>
                 <Menu.Item key="exit">退出登录</Menu.Item>
               </Menu>
			)
	}
}
class Header extends Component {
	constructor(args) {
		super();
		this.state = {
			activeIndex: 0,
			headItems: [
			{
				href: '/',
				text: '主站',
			}, 
			{
				href: '/LearnCenter',
				text: '学习中心',
			},
			{
				href: '/GoodArticle',
				text: '精彩文章',
			},
			{
				href: '/Rank',
				text: '排行榜',
			},
			{
				href: '/PersonalCenter',
				text: '个人中心',
			},
			],
			isLogin:false
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
		if(localStorage.getItem('username')!== null){
			this.setState({
				isLogin:true
			})
		}
	}
	exit = () =>{
		localStorage.removeItem('username');
		this.setState({
			isLogin:false
		})
	}
	componentWillReceiveProps(nextProps) {

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

				</ul>
				{this.state.isLogin?
				  <div className="header-right">
					<Link to="/NewsCenter" className="mail-info"><i className="icon-envelope-alt"></i><span></span></Link>
					<Dropdown overlay={<HoverMenu exit = {this.exit} />}>
					<a className="portrait">
					   <img alt='head' src={require('../style/images/portrait.png')} />
					</a>
					</Dropdown>
				    }
					<a className="btn sign-btn">签到</a>
					<p className="sign-info">07月18日<br/>漏签<span>0</span>天</p>
				  </div>
				:
				  <div className="header-right">
					<Link to='/Login' className="btn login-btn">登录</Link>
				  </div>
				}
			</div>
		</div>
			)
	}
}
const mapStateToProps = (state) => {
	return {

	}
}
export default connect(mapStateToProps)(Header)
