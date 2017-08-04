import React,{Component} from 'react'
class User extends Component {
	constructor(args) {
		super();
	}

	render(){
		return(
				   <div className="panel-27 bg-FFFFFF box-shadow">
						<div className="user-info-box">
							<img src={require('../../style/images/portrait.png')} alt='head' />
							<p>张江</p>
							<ul className="info-details">
								<li>性别<span>男</span></li>
								<li>公司<span>xxxxxxxx</span></li>
								<li>职务<span>客户经理</span></li>
								<li>生日<span>xx月xx日</span></li>
								<li>学历<span>本科</span></li>
								<li>会员等级<span>等级名称</span></li>
								<li>总积分<span>5000</span></li>
								<li>可用积分<span>2000</span></li>
							</ul>
						</div>
					</div>
			)
	}
}
export default User;