import React,{Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import '../style/admin_less/config.less';
class App extends Component {
	constructor(args) {
		super()
			
	}
	render() {

		return (
			<div className='admin'>
			
			   <Header/>
   
		       <div className="wrapper bg-F0F4F6">
		              <Menu page={this.props.children.props.location.pathname}/>
			          {this.props.children}
			   </div>

			    <Footer />

			</div>

		)
	}

}
export default App

