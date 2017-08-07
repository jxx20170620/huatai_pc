import React,{Component} from 'react'
import {browserHistory} from 'react-router'
import Footer from './Footer'
import { message } from 'antd';
class Login extends Component {
	constructor(args) {
		super();
		this.state = {
			username:'',
			password:''
		}
	}
	componentWillMount() {
		// console.log(localStorage.getItem('username'))
	}
	login =(e)=> {
		e.preventDefault();
		if (this.state.username === '123' && this.state.password === '123') {
			localStorage.setItem("username", this.state.username);
			browserHistory.push('/');
		} else {
			message.error('用户名或密码错误', 1);
		}
	}
	render(){
		return(
		<div className="login-bg">
			<div className="login-box">
				<div className="login-logo"><div className="logo"></div>华泰蜂行智能学习平台</div>
				<form className="login-input" onSubmit={(e)=>this.login(e)}>
					<label><input onChange={(e)=>{this.setState({username:e.target.value})}} required="required" type="text" placeholder="工号/手机号" /></label>
					<label><input onChange={(e)=>{this.setState({password:e.target.value})}} required="required" type="password" placeholder="密码" /></label>
					<div className="row rember">
						<label><input type="checkbox" />记住密码</label>
						<a>找回密码</a>
					</div>
					<button type='submit' className="login-btn">登&emsp;录</button>
				</form>
			</div>
			<Footer />
		</div>
			)
	}
}
export default Login;