import React from "react";

class Users extends React.Component {
    componentDidMount() {
        this.props.setUsers([
            {
                id: 1,
                name: 'Kostantin',
                surname: 'Golovnev',
                status: 'im IT-men',
                location: {
                    country: 'Russia',
                    sity: 'Chunskiy'
                },
                subscribed: false
            },
            {
                id: 2,
                name: 'Denis',
                surname: 'Zaripov',
                status: 'I love a cars',
                location: {
                    country: 'Russia',
                    sity: 'Krasnoyarsk'
                },
                subscribed: true
            },
            {
                id: 3,
                name: 'Alexandra',
                surname: 'Saltykova',
                status: 'animals are my life',
                location: {
                    country: 'Russia',
                    sity: 'Chunskiy'
                },
                subscribed: false
            },
        ]);
    }

    render() {
        return (
            <div>
                {this.props.users.map(user => (<div key={user.id}>
                    <div>{user.name}</div>
                    <div>{user.surname}</div>
                    <div>{user.location.country}</div>
                    <div>{user.location.sity}</div>
                    <div>{user.status}</div>
                    <div>
                        {user.subscribed ?
                            <input type='button' onClick={() => {
                                this.props.unsubscribe(user.id);
                            }} value="unsubscribe"/> :
                            <input type='button' onClick={() => {
                                this.props.subscribe(user.id);
                            }} value="subscribe"/>}
                    </div>
                </div>))}
            </div>
        )
    }
}

export default Users;