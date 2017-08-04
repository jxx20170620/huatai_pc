import React,{Component} from 'react'
import {getObject} from '../../config/public'
import Pages from '../Pages'
class Detail extends Component {
	constructor(args) {
		super();
		this.state = {
			detailList:getObject(5)
		}
	}

	render(){
		return(
					<div className="integral-details bg-FFFFFF box-shadow">
						<table>
							<thead>
								<tr>
									<th>変动时间</th>
									<th>変动类型</th>
									<th>変动详情</th>
								</tr>
							</thead>
							<tbody>
							{this.state.detailList.map((item,index)=>{
								return(
									<tr key={index}>
									   <td>2017-06-05  12:00:14</td>
									   <td>获得</td>
									   <td>您通过在线学习，获得10点等级积分和10点可用积分。当前等级积分X点，可用积分Y点</td>
								    </tr>
									)
							})}
							</tbody>
						</table>
					</div>
			)
	}
}
class PointDetail extends Component {
	constructor(args) {
		super();
	}

	render(){
		return(
			<div>
				<div className="row">
					<div className="common-title">
						<span>积分详情</span>
					</div>
					
					<div className="panel-120 bg-FFFFFF box-shadow" style={{top:'0px'}}>
						<div className="select">
							<label>积分变动：</label>
							<input type="date" id="start-time" className="form-date" placeholder="年/月/日"/>
							<span className="line-1"></span>
							<input type="date" id="end-time" className="form-date" placeholder="年/月/日"/>
							<a className="btn btn-blue">查询</a>
						</div>
					</div>

					<Detail />

			    </div>
			    <div className="line"></div>
			    <Pages />

			</div>
			)
	}
}
export default PointDetail;