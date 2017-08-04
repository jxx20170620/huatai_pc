import React,{Component} from 'react'
import Switch, {Case,Default} from 'react-switch-case';
import Card from './personal/Card'
import Collector from './personal/Collector'
import Dynamic from './personal/Dynamic'
import Library from './personal/Library'
import MyArticle from './personal/MyArticle'
import PointDetail from './personal/PointDetail'
import PointShop from './personal/PointShop'

class PersonalCenter extends Component {
	constructor(args) {
		super();
		this.state = {
			activeIndex: 5,
			headItems: [{
				page : <Dynamic />,
				text: '动态',
			}, {
				page : <Collector />,
				text: '收藏家',
			}, {
				page : <Library />,
				text: '图书馆',
			}, {
				page : <PointShop />,
				text: '积分商城',
			}, {
				page : <PointDetail />,
				text: '积分详情',
			}, {
				page : <Card />,
				text: '个人名片',
			}, {
				page : <MyArticle />,
				text: '我的文章',
			}, ]
		}
	}

	render(){
		return(
		<div className="wrapper bg-F0F4F6">
			<div className="layout clearFix">

				<div className="filter clearFix pad-t-20">
					<ul className="filter-ul clearFix">

				  {
		           	this.state.headItems.map((item, index) => {
		           		let className = this.state.activeIndex === index ? 'active' : '';
		           		return (
		           			<li key={index}><a className={className} onClick={()=>{this.setState({activeIndex:index})}}>{item.text}</a></li>
		           		)
		           	})
		           }

					</ul>
					{this.state.activeIndex === 5 ?
					<div className="floatR mar-t-20">
						<a className="pad-r-20" title="编辑"><i className="icon-edit"></i></a>
						<a className="pad-r-20" title="分享"><i className="icon-share"></i></a>
					</div>
					:null
					}

				</div>

				<Switch condition={this.state.activeIndex}>
				    {this.state.headItems.map((item,index)=>{
				    	return(
				    		  <Case key={index} value={index}>{item.page}</Case>
				    		)
				    })}
				   <Default><span>Nothing!</span></Default>
				</Switch>



			</div>
	</div>
			)
	}
}
export default PersonalCenter;