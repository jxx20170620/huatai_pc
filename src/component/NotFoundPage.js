import React,{Component} from 'react'
class NotFoundPage extends Component {
	constructor(props) {
		super();
	}
	back(){
		window.history.back();
	}
	render(){
		return(
			  <div className="notfound">
                 <div className="logo">
                 <img src={require('../style/images/404.png')} alt="404"  />
                 <p onClick={()=>this.back()}><a>BACK</a></p>
                 </div>
              </div>
			)
	}
}
export default NotFoundPage;