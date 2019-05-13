import React from 'react'
import './groupCard.css'
import { Link } from 'react-router-dom'

function GroupCard(props) {
    return (
        <div className='card'>
            {/* <img alt='groupIcon' src={props.icon} /> */}
            <div className='card-Content'>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <Link to={'/GroupsList/' + props.id}>ver más</Link>
                <br />
                <br />
            </div>
        </div>
    )
}

export default GroupCard