import React from 'react'
import './groupCard.css'
import '../../contentApp.css';
import { Link } from 'react-router-dom'

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
                <Link to={`/${props.title}`}>ver más</Link>
            </div>
        </div >
    )
}

export default GroupCard