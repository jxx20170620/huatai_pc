import React,{Component} from 'react'
import Pages from '../Pages'
import {getObject} from '../../config/public'
class Goods extends Component {
	constructor(args) {
		super();
		this.state = {
			goodList:getObject(9)
		}
	}

	render(){
		return(
			<ul className="clearFix">
			{this.state.goodList.map((item,index)=>{
				return(
							<li key={index}>
								<img src={require('../../style/images/goods.png')} alt='goods'/>
								<div className="good-details">
									<p className="name">Lamy恒星系列2017限量款太平洋蓝钢笔</p>
									<p className="integral">兑换积分：<span>2,800</span></p>
									<p className="number">库存量：&emsp;<span>80</span></p>
									<a>兑换</a>
								</div>
							</li>
					)
			})}
		    </ul>		
			)
	}
}
class PointShop extends Component {
	constructor(args) {
		super();
	}

	render(){
		return(
			<div>
					<div className="row">

					   <div className="common-title">
						<span>积分商城</span>
						<div className="filter-search floatR shop-search">
							<input type="text" placeholder="商品名称"/>
							<a className="btn search-btn"><i className="icon-search"></i></a>
						</div>
					   </div>
					   <div className="goods-list">

					     <Goods />

					   </div>

					</div>

					<div className="line"></div>
					<Pages />
			</div>
			)
	}
}
export default PointShop;