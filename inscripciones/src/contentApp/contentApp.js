import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
                    <Route exact path='/' Component={null} />
                </Switch>
            </BrowserRouter>
        )
    }

}

export default ContentApp;