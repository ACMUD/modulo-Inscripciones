import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SingUp from './Sing-Up-In/containers/singUp'

class ContentApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <BrowserRouter style={{ width: '100vw', height: '100%' }}>
                <Switch>
                    <Route exact path='/SingUp' component={SingUp} />
                </Switch>
            </BrowserRouter>
        )
    }

}

export default ContentApp;