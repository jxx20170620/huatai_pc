import React,{Component} from 'react'
import {Link} from 'react-router';
class Menu extends Component {
	constructor(args) {
		super()
		this.state = {
			activeIndex: -1,
			MenuItems: [
			{
				href: '/admin',
				text: '图书管理',
			}, 
			{
				href: '/admin/MessgeManage',
				text: '消息管理',
			},
			{
				href: '/admin/CourseManage',
				text: '课程管理',
			},
			{
				href: '/admin',
				text: '文章管理',
			},
			{
				href: '/admin',
				text: '综合试题管理',
			},
			{
				href: '/admin',
				text: '积分商城管理',
			},
			{
				href: '/admin',
				text: '会员积分管理',
			},
			{
				href: '/admin',
				text: '数据分析',
			},
			{
				href: '/admin',
				text: '基础设置',
			},
			],
			isLogin:false
		}
	}
	checkPage(page) {
		let activeIndex = 0;
		for (let x of this.state.MenuItems) {
			if (x.href === page) {
				break;
			}
			activeIndex++;
		}
		this.setState({
			activeIndex: activeIndex
		})
	}
	componentWillMount() {
		this.checkPage(this.props.page);
	}
	componentWillReceiveProps(nextProps) {
		this.checkPage(nextProps.page)
	}
    render(){
    	return(
			  <div className="menu-left">
				<ul>
					{
		           	this.state.MenuItems.map((item, index) => {
		           		let className = this.state.activeIndex === index ? 'active' : '';
		           		return (
		           			<li key={index}>
		           			<Link className={className} 
		           			onClick={()=>{this.setState({activeIndex:index})}}
		           			 to={item.href}>{item.text}</Link></li>
		           		)
		           	})
		           }
				</ul>
			</div>
    		)
    }
}
export default Menu;