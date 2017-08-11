import React,{Component} from 'react'
import {Link} from 'react-router'
class ArticleDetail extends Component {
	constructor(args) {
		super()
	}

	render(){
		return(
		       <div className="wrapper bg-F0F4F6">
		       	<div className="layout pad-t-20">
		       		<div className="row bg-FFFFFF">
		       			<div className="article-details">
		       				<div className="title">如何用保险保障自己的一生？</div>
		       				<div className="like-read-time">
		       					<span><i className="icon-heart-empty"></i>122431</span>
		       					<span><i className="icon-eye-open"></i>24234</span>
		       					<span><i className="icon-time"></i>2017-06-17 14:05:53</span>
		       				</div>
		       				<div className="line"></div>
		       				<div className="content">
		       					<img src={require('../style/images/test.png')} alt='test' />
		       					<p>我写这回答的目的是希望各位有幸</p>
		       					<p>看到本文的朋友能抽出您人生中的30分钟尽量一字不拉地读完本回答。这30分钟也就是一局LOL或者一集电视剧的时间，但你可以读到一位有n年工作经验的精算师专门写给知乎里绝大多数不太懂保险的朋友。</p>
		       					<p>保险公众宣传日活动期间，华泰保险在包括36家二级机构在内的1000多家分支机构，开展了丰富多彩的线上线下宣传活动。在线上，公司积极利用微博、微信等新媒体手段，发布公众宣传日活动信息、倾听公众心声、深入了解消费者需求，在进一步宣传保险文化的同时，普及保险知识，树立了诚信、责任及专业的华泰保险人形象。</p>
		       					<img src={require('../style/images/test.png')} alt='test'/>
		       					<p>分化或死亡挑战一切事情始终如一的做法可以带来创造性的新选择，奖励您获得利润。区分您的业务，引起注意。它是新的，不同的 - 甚至是革命性的 - 这是一种产生兴奋并在市场上引起轰动的事情。毕竟，很少有新客户会被吸引到你身上 - 如果你做同样的事情，就像其他人一样。考虑这个问题...“你可以做些什么来区分自己，你的业务，或者你的产品在一个未来的前景和客户会欣赏？”另一个思考是这个...“你会打破什么传统会吸引注意和兴趣？”</p>
		       					<p>重新创建您的业务运营和营销材料，就像您是客户一样。从客户的角度设计一切。拿“传统”，把它颠倒过来。重塑您的业务使其更加用户友好和效益导向。打开一条新的道路，即使这意味着重新发明整个行业。我们来看几个简单的例子。许多零售店门前都有收银台。不能把这个主要的房地产更好地用于展示诱人的新商品，并吸引更多的客户？ PJ的宠物中心做得很好。他们巧妙地在前门外面放置了一大堆可爱的小狗。很少有人可以走路而没有短暂的访问，其中许多人被画在店内。一些有创业意识的餐厅老板和他们的厨房做同样的事情。赞助人发现有趣和有趣的观看厨师精心准备了许多美食。与此同时，大多数竞争对手的厨房都在餐厅的后面，而且一路走来，所以没人见过面。东方马里奥已经做了一些独特的区别。他们知道，甜点是任何餐厅可以提供的最有利可图的物品。所以他们不使用传统的甜点盘或标准菜单。相反，他们呈现美丽的色彩幻灯片，他们美味，令人垂涎的创作在观景师。</p>
		       				</div>
		       				<div className="row text-right">
		       					<Link to="/GoodArticle" className="back-list">返回文章列表&gt;</Link>
		       				</div>
		       			</div>
		       		</div>
		       	</div>
		       </div>
			)
	}
}
export default ArticleDetail;