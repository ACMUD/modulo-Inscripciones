import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GroupsList from './groupsLists/containers/groupList'
import SignUp from './Sign-Up-In/containers/signUp'

function ContentApp(props) {
    return (
        <Switch>
            <Route path="/" exact component={GroupsList} />
            <Route path='/SignUp' component={SignUp} />
        </Switch>
    )
}

export default ContentApp;
