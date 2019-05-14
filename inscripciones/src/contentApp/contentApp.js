import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GroupsList from './groupsLists/containers/groupList'
import SingUp from './Sing-Up-In/containers/singUp'

function ContentApp(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={GroupsList} />
                <Route path='/SingUp' component={SingUp} />
            </Switch>
        </BrowserRouter>
    )
}

export default ContentApp;
