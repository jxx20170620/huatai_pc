import React,{Component} from 'react'
import {getObject} from '../config/public'
class RadioList extends Component {
	constructor(args) {
		super();
		this.state = {
			ProblemList:getObject(4)
		}
	}

	render(){
		return(
			<div className="topic radio-topic mar-b-20">
						<h3>单项选择题：</h3>
						{this.state.ProblemList.map((item,index)=>{
							return(
						           <dl key={index}>
						           	<dt>1、在风险管理方法中，为高层建筑安装火灾警报器的方式属于：</dt>
						           	<dd><label><input type="radio" name="a"/>A.抑制</label></dd>
						           	<dd><label><input type="radio" name="a"/>B.抑制</label></dd>
						           	<dd><label><input type="radio" name="a"/>C.抑制</label></dd>
						           	<dd><label><input type="radio" name="a"/>D.抑制</label></dd>
						           </dl>
								)
						})}

			</div>
			)
	}
}
class MultiselectList extends Component {
	constructor(args) {
		super();
		this.state = {
			ProblemList:getObject(4)
		}
	}

	render(){
		return(
			<div className="topic check-topic">
						<h3>多选选择题：</h3>
						{this.state.ProblemList.map((item,index)=>{
							return(
						           <dl key={index}>
						           	<dt>1、在风险管理方法中，为高层建筑安装火灾警报器的方式属于：</dt>
						           	<dd><label><input type="checkbox" name="a"/>A.抑制</label></dd>
						           	<dd><label><input type="checkbox" name="a"/>B.抑制</label></dd>
						           	<dd><label><input type="checkbox" name="a"/>C.抑制</label></dd>
						           	<dd><label><input type="checkbox" name="a"/>D.抑制</label></dd>
						           </dl>
								)
						})}

			</div>
			)
	}
}
class TestOnline extends Component {
	constructor(args) {
		super();
		this.state = {
			times: 300,
			showTip:true
		}
	}
	componentWillMount() {
		this.timer = setInterval(() => {
			this.setState({
				times: this.state.times - 1
			})
		}, 1000);
	}
	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
		clearInterval(this.timer);
	}
	render() {
		return(
		<div className="wrapper bg-F0F4F6">
			<div className="layout clearFix">
				{this.state.showTip?<div className="tip">Tips：若答题结果不理想，您可重新学习当前课程后再次答题，系统最终将记录您当前课程的最高答题得分。
				   <i className="icon-remove floatR" onClick={()=>{this.setState({showTip:false})}}></i>
				</div>:null}
				<div className="answer-time bg-FFFFFF">答题倒计时：<span>{this.state.times}</span> 秒</div>
	        </div>
	        <div className="panel-120 bg-FFFFFF box-shadow">
	          <RadioList />
	          <MultiselectList />
	          <div className="row submit-btn mar-b-20 mar-t-20 text-center">
				<a className="btn btn-blue">提交</a>
			  </div>
	        </div>
	    </div>
			)
	}
}
export default TestOnline