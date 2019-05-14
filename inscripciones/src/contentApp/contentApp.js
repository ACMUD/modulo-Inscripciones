import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GroupsList from './groupsLists/containers/groupList'

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
                    <Route path="/" exact component={GroupsList} />
                </Switch>
            </BrowserRouter>
        )
    }

}

export default ContentApp;