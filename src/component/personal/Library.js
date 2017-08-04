import React,{Component} from 'react'
import {getObject} from '../../config/public'
import Pages from '../Pages'
import User from './User'
class MyBooks extends Component {
	constructor(args) {
		super();
		this.state = {
			BookList:getObject(8)
		}
	}

	render(){
		return(
			<ul className="books-list clearFix">
			{this.state.BookList.map((item,index)=>{
				return(
							<li key={index}>
								<img src={require('../../style/images/test.png')} alt='test' />
								<div className="book-details">
									<p>作者:  [哥伦比亚] 加西亚·马尔克斯</p>
									<p>出版社: 南海出版公司</p>
									<p>原作名: Cien años de soledad</p>
									<p>译者:  范晔</p>
									<p>出版年: 2011-6</p>
									<p>页数: 360</p>
									<a>下载</a>
								</div>
							</li>
					)
			})}
		    </ul>		
			)
	}
}
class LibraryBooks extends Component {
	constructor(args) {
		super();
		this.state = {
			BookList:getObject(8)
		}
	}

	render(){
		return(
			<ul className="books-list clearFix">
			{this.state.BookList.map((item,index)=>{
				return(
							<li key={index}>
								<img src={require('../../style/images/test.png')} alt='test' />
								<div className="book-details">
									<p>作者:  [哥伦比亚] 加西亚·马尔克斯</p>
									<p>出版社: 南海出版公司</p>
									<p>原作名: Cien años de soledad</p>
									<p>译者:  范晔</p>
									<p>出版年: 2011-6</p>
									<p>需积分: 1000</p>
									<a>兑换</a>
								</div>
							</li>
					)
			})}
		    </ul>		
			)
	}
}
class Library extends Component {
	constructor(args) {
		super();
		this.state = {
			activeIndex : true
		}
	}
	render(){
		return(
			<div>
				<div className="left-layout">
					<div className="filter clearFix pad-t-20">
						<ul className="filter-ul nav clearFix">
							<li className={this.state.activeIndex?"active":""} onClick={()=>{this.setState({activeIndex:true})}}><a>我的书架</a></li>
							<li className={!this.state.activeIndex?"active":""} onClick={()=>{this.setState({activeIndex:false})}}><a>图书馆</a></li>
						</ul>
						<div className="filter-search floatR">
							<input type="text" placeholder="搜索"/>
							<a className="btn search-btn"><i className="icon-search"></i></a>
						</div>
					</div>
					<div className="row tab">
					{this.state.activeIndex?
                        <MyBooks />:
                        <LibraryBooks />
					}
					</div>
					<div className="line"></div>
					<Pages />
				</div>
				<div className="right-layout">
				   <User />
				</div>
			</div>
			)
	}
}
export default Library;