import React,{Component} from 'react'
import {browserHistory} from 'react-router'
import Footer from './Footer'
import { message } from 'antd';
class Login extends Component {
	constructor(args) {
		super();
		this.state = {
			username: '',
			password: '',
			isRemember: false,
			coded_password:''
		}
	}
	componentWillMount() {
		if (localStorage.getItem('isRemember') === 'true') {
			this.setState({
				isRemember: localStorage.getItem('isRemember'),
				username: localStorage.getItem('username'),
				password: localStorage.getItem('password')
			}, () => {
			// this.refs.password.type = 'password'
		})
		} else {
			// this.setState({
			// 	isRemember: false
			// })
		}
	}
	login =(e)=> {
		e.preventDefault();
		if (this.state.username === '123' && this.state.password === '123') {
			localStorage.setItem("isRemember", this.state.isRemember);
			if(this.state.isRemember){
				localStorage.setItem("username", this.state.username);
				localStorage.setItem("password", this.state.password);
			}
			localStorage.setItem("user", this.state.username);
			browserHistory.push('/');
		} else {
			message.error('用户名或密码错误', 1);
		}
	}
	changePassword(e) {
		this.setState({
			password: e.target.value
		}, () => {
			// this.refs.password.type = 'password'
		})
	}
	render(){
		return(
		<div className="login-bg">
			<div className="login-box">
				<div className="login-logo"><div className="logo"></div>华泰蜂行智能学习平台</div>
				<form className="login-input" onSubmit={(e)=>this.login(e)}>
					<label><input value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value})}} required="required" type="text" placeholder="工号/手机号" /></label>
					<label><input ref='password' value={this.state.password} onChange={(e)=>this.changePassword(e)} required="required" type="password" placeholder="密码"/></label>
					<label style={{display:'none'}}><input type="text" placeholder="隐藏"/></label>
					<label style={{display:'none'}}><input type="password" placeholder="隐藏"/></label>
					<div className="row rember">
						<label><input type="checkbox" checked={this.state.isRemember} onChange={()=>{this.setState({isRemember:!this.state.isRemember})}}/>记住密码</label>
						<a>找回密码</a>
					</div>
					<button type='submit' className="login-submit">登&emsp;录</button>
				</form>
			</div>
			<Footer />
		</div>
			)
	}
}
export default Login;