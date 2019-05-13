import React from 'react'
import GroupCard from './groupCard'

function GroupListView(props) {
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', justifyItems: 'center' }}>
            {
                props.groups.map(
                    (item) => {
                        return <GroupCard id={item.Id} title={item.Abreviacion} content={item.Descripcion} />
                    }
                )
            }
        </div>
    )
}

export default GroupListView;