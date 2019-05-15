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

    componentWillMount() {
        this.getGroupsData()
    }

    render() {
        return (
            <GroupListView
                groups={this.state.groups}
            />
        )
    }

    getGroupsData() {
        requesterCrudServer('get', 'grupo_interes/',
            (result) => {
                this.setState({ groups: result.data })
            },
            (error) => {
                console.error(error)
            })
    }
}

export default GroupsList;