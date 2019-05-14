import React from 'react'
import './groupCard.css'
import { Link } from 'react-router-dom'

function GroupCard(props) {
    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    alt='groupIcon'
                    src={props.imgURL}
                    style={{
                        padding: '10px',
                        maxWidth: '100%',
                        maxHeight: '100%'
                    }}
                />
            </div>
            <div className='card-Content'>
                <h3>{props.title}</h3>
                <div style={{ height: '50%', overflow: 'hidden' }}>
                    {props.content}
                </div>
                <Link to={`/GroupsList/${props.id}`}>ver más</Link>
                <br />
                <br />
            </div>
        </div >
    )
}

export default GroupCard