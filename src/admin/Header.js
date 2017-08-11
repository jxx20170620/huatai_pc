import React,{Component} from 'react'
import {Link} from 'react-router';
class Header extends Component {
	constructor(args) {
		super()
	}

	render(){
		return(
		      <div className="header">
		      	<Link to='/' className="logo"> </Link>
		      	<span>运营中心后台管理</span>
		      	<div className="header-right">
		      		<span>管理员：韩浩</span>
		      		<a className="portrait"> 
		      		    <img alt='head' src={require('../style/images/portrait.png')} />
		      		</a>
		      		<span>注销</span>
		      	</div>
		      </div>
			)
	}
}
export default Header;