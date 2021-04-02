import React, { Component } from 'react'
import { withStyles, Props } from './components/utils'
import { RouteComponentProps } from "react-router-dom";

function styles() {
 	return {
	    root: {
	       backgroundColor: 'black',
	       color: 'white'
	    }
	}
}


class App extends Component<Props> {	
	constructor(props: Props) {
		super(props)
	}
	render() {
    		return <div className={this.props.classes.root}>Hello World, Isaac Guerreiro</div>
	}
}


export default withStyles(styles)(App)
