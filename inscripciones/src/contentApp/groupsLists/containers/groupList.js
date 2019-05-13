import React from 'react'
import GroupListView from '../components/groupsListView'
import { requesterCrudServer } from '../../../Resources/requester'

class GroupsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groups: []
        }
    }

    render() {
        return (
            <GroupListView groups />
        )
    }

    getGroupsData() {
        requesterCrudServer()
    }
}

export default GroupsList;