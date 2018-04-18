import React, { Component } from 'react';
import List from './List'

class Lists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [
                {
                    "_id": "5ac818352416a00014dd69e0",
                    "name": "Chores",
                    "items": [
                        {
                            "name": "Dishes",
                            "completed": true
                        },
                        {
                            "name": "Wash clothes",
                            "completed": true
                        },
                        {
                            "name": "Walk Dog",
                            "completed": true
                        }
                    ]
                },
                {
                    "_id": "5ac90c2f38f240001421e44c",
                    "name": "UI LIST",
                    "items": [
                        {
                            "name": "TEST",
                            "completed": true
                        }
                    ]
                },
                {
                    "_id": "5aca8367b251520014e1db0c",
                    "name": "shopping",
                    "items": [
                        {
                            "name": "Cat food",
                            "completed": true
                        },
                        {
                            "name": "Tea bags",
                            "completed": false
                        },
                        {
                            "name": "Milk",
                            "completed": true
                        },
                        {
                            "name": "Crisps",
                            "completed": false
                        },
                        {
                            "name": "Buscuits",
                            "completed": true
                        }
                    ]
                },
                {
                    "_id": "5ac817b62416a00014dd69dd",
                    "name": "Shopping",
                    "items": [
                        {
                            "name": "Cat food",
                            "complete": false,
                            "completed": true
                        },
                        {
                            "name": "Tea bags",
                            "complete": false,
                            "completed": true
                        },
                        {
                            "name": "Milk",
                            "complete": false,
                            "completed": true
                        },
                        {
                            "name": "Crisps",
                            "complete": false,
                            "completed": true
                        },
                        {
                            "name": "Buscuits",
                            "complete": false,
                            "completed": true
                        },
                        {
                            "name": "Cakes",
                            "complete": false
                        }
                    ]
                },
                {
                    "_id": "5ac817ca2416a00014dd69df",
                    "name": "Holiday",
                    "items": [
                        {
                            "name": "Passport",
                            "completed": true
                        },
                        {
                            "name": "Travel toiletries",
                            "completed": true
                        },
                        {
                            "name": "Foriegn Money",
                            "completed": true
                        },
                        {
                            "name": "Phone charger",
                            "completed": true
                        }
                    ]
                },
                {
                    "_id": "5ac8169d7e4fb500140ff131",
                    "name": "football",
                    "items": [
                        {
                            "name": "Neil",
                            "completed": true
                        },
                        {
                            "name": "JP",
                            "completed": true
                        },
                        {
                            "name": "Derek",
                            "completed": true
                        },
                        {
                            "name": "Chris",
                            "completed": true
                        },
                        {
                            "name": "Kevin",
                            "completed": true
                        }
                    ]
                }
            ]
        };

        this.updateList = this.updateList.bind(this);
    }

    updateList(list) {
        let lists = this.state.lists.map((item) => {
            if(list._id === item._id){
                return list;
            }
            return item;
        });
        this.setState({ lists: lists });
    }

    render() {
        return (
            this.state.lists.map((item) => {
                return <List key={item._id} list={item} updateList={this.updateList} />
            })
        );
    }
}

export default Lists;