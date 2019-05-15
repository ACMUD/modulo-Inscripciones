import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../../contentApp.css';
import './loginStyles.css'

import SignIn from '../containers/signIn'
import SignUp from '../containers/signUp'

function userLoginView(props) {
    return (
        <div className='Flex-box-column'>
            <Paper style={{ width: '45%' }}>
                <Tabs
                    value={props.mode === 'SignIn' ? 0 : 1}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(event, value) => props.handleChange(value ? 'SignUp' : 'SignIn')}
                    centered
                >
                    <Tab label="Sign In" />
                    <Tab label="Sign UP" />
                </Tabs>
            </Paper>
            <div className='Central-Card' >
                {
                    props.mode === 'SignIn'
                        ? <SignIn logIn={props.logIn} />
                        : props.mode === 'SignUp'
                            ? <SignUp logIn={props.logIn} />
                            : ''
                }
            </div>
        </div>
    )
}

export default userLoginView;
