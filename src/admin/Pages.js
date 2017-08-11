import React,{Component} from 'react'
class Pages extends Component {
	constructor(args) {
		super();
	}

	render(){
		return(
				 <div className="pages">
						<ul className="pagination clearFix">
						    <li>
						        <a className="previous">上一页</a>
						    </li>
						    <li><a className="active">1</a></li>
						    <li><font>...</font></li>
						    <li><a>5</a></li>
						    <li><a>6</a></li>
						    <li><font>...</font></li>
						    <li><a>10</a></li>
						    <li>
						        <a className="next">下一页</a>
						    </li>
						    <li>
						        <a className="last">尾页</a>
						    </li>
						</ul>
					</div>
			)
	}
}
export default Pages;