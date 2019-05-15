import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GroupsList from './groupsLists/containers/groupList'
import userLogin from './Sign-Up-In/containers/userLogin'

function ContentApp(props) {
    return (
        <Switch>
            <Route path="/" exact component={GroupsList} />
            <Route path='/SignUp' component={userLogin} />
        </Switch>
    )
}

export default ContentApp;
