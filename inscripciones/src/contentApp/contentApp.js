import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GroupsList from './groupsLists/containers/groupList'
import userLogin from './Sign-Up-In/containers/userLogin'
import Profile from './Profile/containers/profile'

function ContentApp(props) {
    return (
        <Switch>
            <Route path="/" exact component={GroupsList} />
            <Route path='/SignUp' component={userLogin} />
            <Route path='/Profile' component={Profile} />
        </Switch>
    )
}

export default ContentApp;
