import React, { Component } from 'react';
import List from './List';
import EditModal from './EditModal';

class Lists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            emptyItem: { name: '', items: [{ name: '', completed: false }] },
            loaded: false
        };

        this.refreshLists = this.refreshLists.bind(this);
        this.updateList = this.updateList.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.addList = this.addList.bind(this);
    }

    componentDidMount() {
        this.refreshLists();
    }

    refreshLists() {
        fetch('/api/lists')
            .then((response) => {
                return response.json()
            }).then((json) => {
                this.setState({ lists: json })
            }).catch((ex) => {
                console.log('parsing failed', ex)
            })
    }

    updateList(list) {
        fetch('/api/lists', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(list)
        }).then((res) => {
            let lists = this.state.lists.map((item) => {
                if (list._id === res.body._id) {
                    return list;
                }
                return item;
            });
            this.setState({ lists: lists });
        }).catch((err) => {
            console.log(err);
        })
    }

    deleteList(id) {
        var self = this;
        fetch('/api/lists/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            self.refreshLists();
        }).catch((err) => {
            console.log(err);
        })
    }

    addList(list) {
        let self = this;
        fetch('/api/lists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(list)
        }).then((res) => {
            self.refreshLists();
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style={{ marginTop: '20px' }}>
                    <div className="card">
                        <div className="card-header" style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                            New List
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <button className="btn btn-primary" data-toggle="modal" data-target={"#addModal"}>Add</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {this.state.lists.map(
                    (item, index) => {
                        return (
                            <List key={item._id} list={item} updateList={this.updateList} deleteList={this.deleteList} />
                        )
                    }
                )}
                <EditModal id="addModal" list={this.state.emptyItem} confirm={this.addList} />
            </div>
        );
    }
}

export default Lists;