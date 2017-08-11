import React,{Component} from 'react'
import {getObject} from '../config/public'
import Dropzone from 'react-dropzone'
import $ from 'jquery'
import { message } from 'antd';
import {addCourse} from '../config/fetch'
class SingleQuestion extends Component {
	constructor(args) {
		super();
	}
	delThis(number){
		$('#SingleQuestion' + number).remove();
	}
	render(){
		return(
			<div className="topic-cont SingleQuestion" id={'SingleQuestion' + this.props.number}>
				<h5><label>
				{/*{this.props.number}、*/}
				题目</label>
				<input required="required" className="question" type="text"/></h5>
				<dl className="clearFix mar-t-20">
					<dt>选项</dt>
					<dd>
						<ul>
							<li><label>A</label><input required="required" className="describeA" type="text"/></li>
							<li><label>B</label><input required="required" className="describeB" type="text"/></li>
							<li><label>C</label><input required="required" className="describeC" type="text"/></li>
							<li><label>D</label><input required="required" className="describeD" type="text"/></li>
						</ul>
					</dd>
				</dl>
				<dl className="clearFix mar-t-20">
					<dt>答案</dt>
					<dd><label>
					<input  required="required" type="radio" name={'single_answer'+this.props.number}/>A</label><label>
					<input  type="radio" name={'single_answer'+this.props.number}/>B</label><label>
					<input  type="radio" name={'single_answer'+this.props.number}/>C</label><label>
					<input  type="radio" name={'single_answer'+this.props.number}/>D</label></dd>
				    <a className='delete-question' onClick={()=>this.delThis(this.props.number)}>删除本题</a>
				</dl>
			</div>
			)
	}
}
class MultipleQuestion extends Component {
	constructor(args) {
		super();
	}
	delThis(number){
		$('#MultipleQuestion' + number).remove();
	}
	render(){
		return(
			<div  className="topic-cont MultipleQuestion" id={'MultipleQuestion' + this.props.number}>
				<h5><label>
				{/*{this.props.number}、*/}
				题目</label>
				<input required="required" className="question" type="text"/></h5>
				<dl className="clearFix mar-t-20">
					<dt>选项</dt>
					<dd>
						<ul>
							<li><label>A</label><input required="required" className="describeA" type="text"/></li>
							<li><label>B</label><input required="required" className="describeB" type="text"/></li>
							<li><label>C</label><input required="required" className="describeC" type="text"/></li>
							<li><label>D</label><input required="required" className="describeD" type="text"/></li>
						</ul>
					</dd>
				</dl>
				<dl className="clearFix mar-t-20">
					<dt>答案</dt>
					<dd><label>
					<input type="checkbox"/>A</label><label>
					<input type="checkbox"/>B</label><label>
					<input type="checkbox"/>C</label><label>
					<input type="checkbox"/>D</label></dd>
				    <a className='delete-question' onClick={()=>this.delThis(this.props.number)}>删除本题</a>
				</dl>
			</div>
			)
	}
}
class AddCourse extends Component {
	constructor() {
		super()
		this.state = {
			videos: [],
			enclosures : [],
			singleNum: 0,
			multipleNum:0,
		}
	}
	chooseVideo(accepted, rejected) {
		this.setState({
			videos : accepted
		});
	}
	changeVideo(e) {
		if (e.target.duration / 60 > 5) {
			message.error('视频不超过10分钟', 3);
			this.setState({
				videos: []
			})
		}
	}
	chooseEnclosure(accepted, rejected){
		if(accepted.length > 5){
			message.error('附件不超过5个', 1);
			return;
		}
		this.setState({
			enclosures : accepted
		});
	}
	addSingle() {
		if(this.state.singleNum + this.state.multipleNum === 5){
			message.error('考题不超过5道', 1);
			return;
		}
		this.setState({
			singleNum: this.state.singleNum + 1
		})
	}
	addMultiple() {
		if(this.state.singleNum + this.state.multipleNum === 5){
			message.error('考题不超过5道', 1);
			return;
		}
		this.setState({
			multipleNum: this.state.multipleNum + 1
		})
	}
	add(e) {
		e.preventDefault();
		let SingleQuestion = [];
		let MultipleQuestion = [];
		let course_name = $('.course_name').val();
		let course_describe = $('.course_describe').val();
		let answer_time = $('.answer_time').val();

		$('.SingleQuestion').each(function(i) {
			let question = $(this).find('.question').val();
			let describeA = $(this).find('.describeA').val();
			let describeB = $(this).find('.describeB').val();
			let describeC = $(this).find('.describeC').val();
			let describeD = $(this).find('.describeD').val();
			let checkboxList = $(this).find("input[type='radio']");
			let answer = '';
			checkboxList.each((index, el) => {
				if (el.checked) {
					switch (index) {
						case 0:
							answer += 'A';
							break;
						case 1:
							answer += 'B';
							break;
						case 2:
							answer += 'C';
							break;
						case 3:
							answer += 'D';
							break;
						default:
							break;
					}
				}
			})
			SingleQuestion.push({
				question,
				describeA,
				describeB,
				describeC,
				describeD,
				answer
			})
		})
		$('.MultipleQuestion').each(function(i) {
			let question = $(this).find('.question').val();
			let describeA = $(this).find('.describeA').val();
			let describeB = $(this).find('.describeB').val();
			let describeC = $(this).find('.describeC').val();
			let describeD = $(this).find('.describeD').val();
			let checkboxList = $(this).find("input[type='checkbox']");
			let answer = '';
			checkboxList.each((index, el) => {
				if (el.checked) {
					switch (index) {
						case 0:
							answer += 'A';
							break;
						case 1:
							answer += 'B';
							break;
						case 2:
							answer += 'C';
							break;
						case 3:
							answer += 'D';
							break;
						default:
							break;
					}
				}
			})
			MultipleQuestion.push({
				question,
				describeA,
				describeB,
				describeC,
				describeD,
				answer
			})
		})
		let flag = false;
		for(let x of MultipleQuestion){
			if(x.answer.length === 0){
				flag = true;
				break;
			}
		}
		if(flag){
			message.error('多选题中有答案未选择', 1);
			return;
		}

		let Course = [];
		Course.SingleQuestion = SingleQuestion;
		Course.MultipleQuestion = MultipleQuestion;
		Course.course_name = course_name;
		Course.course_describe = course_describe;
		Course.answer_time = answer_time;

		if (this.state.videos.length > 0) {
			Course.course_video = this.state.videos[0];
		} else {
			message.error('请添加课程视频', 1);
			return;
		}
		Course.enclosures = [];
		if (this.state.enclosures.length > 0) {
			Course.enclosures = this.state.enclosures;
		} else {
			// message.error('请添课程附件', 1);return;
		}

		let coursedata = [];
		let checkboxTitles = [];
		let radioTitles = [];
		coursedata.courseName = course_name;
		coursedata.courseDesc = course_describe;
		coursedata.answerTime = answer_time;

		for (let x of Course.SingleQuestion) {
			radioTitles.push({
				checkboxTitle: x.question,
				checkboxAnswerDesc: [x.describeA, x.describeB, x.describeC, x.describeD],
				checkboxAnswer: x.answer,
				checkboxTitleType: 1
			});
		}
		for (let x of Course.MultipleQuestion) {
			checkboxTitles.push({
				checkboxTitle: x.question,
				checkboxAnswerDesc: [x.describeA, x.describeB, x.describeC, x.describeD],
				checkboxAnswer: x.answer,
				checkboxTitleType: 2
			});
		}

		let formData = new FormData();
		formData.append('radioTitles', JSON.stringify(radioTitles));
		formData.append('coursedata', JSON.stringify(coursedata));
		formData.append('checkboxTitles', JSON.stringify(checkboxTitles));
		formData.append('video', Course.course_video);

		for(let x of Course.enclosures){
			formData.append('fileList', x);
		}
		

		addCourse(formData).then((data) => {
			console.log(data)
		}, (reject) => {
			console.log(reject)
		})

	}
	render(){
		return(
			<form onSubmit={(e)=>this.add(e)}>
				<div className="panel-120 bg-FFFFFF box-shadow">
					<h3 className="course-title">课程信息</h3>
					<div className="row">

						{this.state.videos.length > 0 ?		
						<div>			
							<video src={this.state.videos[0].preview} 
					         controls="controls"   
					         className = "course_video"
					         onCanPlayThrough = {(e)=>this.changeVideo(e)}
					         // poster={require('../style/images/test2.png')} 
					         preload="auto">
					         您的浏览器不支持 video 标签。
					         </video>
					         <a className="choose-again" onClick={()=>{this.setState({videos:[]})}}>重新选择视频</a>
					    </div>
					    :
					 <Dropzone
					 // maxSize= {31457280}
					 multiple={false}
					 className='upload-video'
					 onDrop={this.chooseVideo.bind(this)}
					 accept="video/mp4"
					  >
						<div className="file-box">
							<label className="file-label"><i className="icon-upload-alt"></i><span>&nbsp;选择视频</span><p>或将视频拖放到此处</p></label>
							<p>上传格式MP4  时长3~5分钟   ≤50M</p>
							<p>禁止发布的视频内容  视频大小  视频规格  视频时长  高清视频  视频处理流程</p>
						</div>
						</Dropzone>
					}

						<dl className="info-inp clearFix">
							<dt>课程名称</dt>
							<dd><input type="text" required="required" className="course_name"/></dd>
						</dl>
						<dl className="info-inp clearFix">
							<dt>课程描述</dt>
							<dd><textarea required="required" className="course_describe"></textarea></dd>
						</dl>


						<div className="file-box-1">

						    <Dropzone
					         // maxSize= {31457280}
					         className='upload-enclosure'
					         onDrop={this.chooseEnclosure.bind(this)}
					          >
							<label className="file-label"><i className="icon-upload-alt"></i>上传附件</label>
							</Dropzone>

							<span>（格式：docx/pdf/pptx/xlsx）</span>
							<p>
							{this.state.enclosures.map((item,index)=>{
								return(
									  <span key={index}>{item.name}</span>
									)
							})}
							</p>
						</div>
				


					</div>
				</div>

				<div className="panel-120 bg-FFFFFF box-shadow">
					<h3 className="course-title">考题信息</h3>

			
				    <div className="time-inp">答题时间
					  <input required="required" className='answer_time' type="number" />分钟
					</div>
	

					<div className="topic-inp mar-t-20">
						<h4>单项选择题：</h4>
						
						{getObject(this.state.singleNum).map((item,index)=>{
							return(
								  	<SingleQuestion key={index} number={index + 1}/>
								)
						})}

					<a className="add-topic" onClick={()=>this.addSingle()}>
					  <i className="icon-plus-sign-alt"></i>新增一题(单选)
					</a>

                   </div>


					<div className="topic-inp">
						<h4>多项选择题：</h4>
						{getObject(this.state.multipleNum).map((item,index)=>{
							return(
								  	<MultipleQuestion key={index} number={index + 1}/>
								)
						})}
						<a className="add-topic" onClick={()=>this.addMultiple()}>
						  <i className="icon-plus-sign-alt"></i>新增一题(多选)
						</a>
					</div>

					<div className="save-subm-btn text-center">
						<a className="btn btn-blue">保存草稿</a>
						<button type='submit' className="btn btn-blue">提交审核</button>
					</div>

			    </div>

			</form>
			)
	}
}

export default AddCourse;