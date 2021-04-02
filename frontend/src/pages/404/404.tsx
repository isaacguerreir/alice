import React, { Component } from 'react'
import { Props, withStyles } from '../../components/utils'
import { RouteComponentProps } from "react-router-dom";

function styles() {
        return {}
}

class page404 extends Component<Props> {

        render() {
                return(
                        <div>
                                <div>Page not found: choose a path that you can actually walk</div>
                        </div>
                )
        }
}

export default withStyles(styles)(page404) 
