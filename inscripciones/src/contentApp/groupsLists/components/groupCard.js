import React from 'react'
import './groupCard.css'
import '../../contentApp.css';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

function GroupCard(props) {
    return (
        <div className='card'>
            <div className='card-image'>
                <img alt='groupIcon' src={props.imgURL}
                />
            </div>
            <div className='card-Content'>
                <h3>{props.title}</h3>
                <div>
                    {props.content}
                </div>
                {/* <Link to={`/${props.title}`}>{props.link}</Link> */}
                {
                    renderLink(props)
                }
            </div>
        </div >
    )
}

function renderLink(props) {
    if ((localStorage.getItem('userID') > 0)
        || (sessionStorage.getItem('userID') > 0)
    ) {
        return (
            <Button variant="contained" color="default" style={{ margin: '10px' }} onClick={props.inscribirse}>
                Inscribirse
            </Button>
        )
    } else {
        return (
            <Link to={`/`}>ver más</Link>
        )
    }
}

export default GroupCard