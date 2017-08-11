import React,{Component} from 'react'
import {getObject} from '../config/public'
import Pages from './Pages'
class BookManage extends Component {
	constructor(args) {
		super()
		this.state = {
			BookList : getObject(4),
			activeIndex : 0
		}
			
	}
	render() {

		return (
			<div className="container">
			   	<div className="common-title">图书管理
					<div className="filter-search floatR">
						<input type="text" placeholder="书籍名称"/>
						<a className="btn search-btn"><i className="icon-search"></i></a>
					</div>
				</div>
				<div className="row btn-filter">
					<ul className="nav clearFix">
						<li className={this.state.activeIndex === 0?'active':''} onClick={()=>{this.setState({activeIndex:0})}}><a>全部</a></li>
						<li className={this.state.activeIndex === 1?'active':''} onClick={()=>{this.setState({activeIndex:1})}}><a>上架</a></li>
						<li className={this.state.activeIndex === 2?'active':''} onClick={()=>{this.setState({activeIndex:2})}}><a>下架</a></li>
					</ul>
					<a className="btn btn-blue">新增</a>
				</div>
				<div className="row">
				    <ul className="books-list clearFix">
				    {this.state.BookList.map((item,index)=>{
				    	return(
						       <li key={index}>
						       	<img src={require('../style/images/book.png')} alt='test' />
						       	<div className="book-details">
						       		<p>作者:  [哥伦比亚] 加西亚·马尔克斯</p>
						       		<p>出版社: 南海出版公司</p>
						       		<p>原作名: Cien años de soledad</p>
						       		<p>译者:  范晔</p>
						       		<p>出版年: 2011-6</p>
						       		<p>页数: 360</p>
						       		<p>兑换积分: 360</p>
						       		<div className="edit-download">
						       			<a>编辑</a>
						       			<a className="red">下架</a>
						       		</div>
						       	</div>
						       </li>
				    		)
				    })}
				    </ul>
				    <div className="line"></div>
				    <Pages />
				</div>
			</div>

		)
	}

}
export default BookManage

