import React from 'react'
import GroupCard from './groupCard'

import gisac from './../../../Resources/images/gisac.png';
import pygroup from './../../../Resources/images/pygroup.png';

function GroupListView(props) {
    return (
        <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', justifyItems: 'center' }}>
            {
                props.groups.map(
                    (item, index) => {
                        return (
                            <GroupCard
                                key={index}
                                id={item.Id}
                                title={item.Abreviacion}
                                content={item.Descripcion}
                                imgURL={getImage(item.Abreviacion)}
                            />
                        )
                    }
                )
            }
        </div>
    )
}

function getImage(id) {
    switch (id.toLowerCase()) {
        case 'gisac':
            return gisac
        case 'pygroup':
            return pygroup
        default:
            break;
    }

}

export default GroupListView;