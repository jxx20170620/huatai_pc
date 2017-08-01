import React,{Component} from 'react'
import Header from './Header'
import Footer from './Footer'
class App extends Component {
	constructor(args) {
		super()
			
	}
	render() {

		return (
			<div>
			
			   <Header page={this.props.children.props.location.pathname}/>
   
			    <div>
			       {this.props.children}
			    </div>

			    <Footer />

			</div>

		)
	}

}
export default App

