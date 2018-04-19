import React, { Component } from 'react';

class EditModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list,
            emptyItem: { name: '', completed: false }
        };

        this.baseState = Object.assign({}, this.state);

        this.resetList = this.resetList.bind(this);
        this.addEmptyItem = this.addEmptyItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateListName = this.updateListName.bind(this);
        this.updateListItem = this.updateListItem.bind(this);
    }

    addEmptyItem() {
        let newList = Object.assign({}, this.state.list);
        newList.items.push(this.state.emptyItem);

        this.setState({ list: newList });
    }

    removeItem(index) {
        let newList = Object.assign({}, this.state.list);
        newList.items.splice(index, 1);

        this.setState({ list: newList });
    }

    resetList() {
        this.setState(this.baseState);
    }

    updateListName(event) {
        let name = event.target.value;
        let newState = Object.assign({}, this.state);
        newState.list.name = name;

        this.setState(newState)
    }
    
    updateListItem(index, event) {
        let name = event.target.value;
        let newState = Object.assign({}, this.state);
        newState.list.items[index].name = name;

        this.setState(newState)
    }

    render() {
        return (<div className="modal fade" id={this.props.id}  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editModalLabel">Edit List</h5>
                        <button onClick={() => { this.resetList() }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <input onChange={this.updateListName} value={this.state.list.name} name="name" className="form-control" style={{ fontWeight: 'bold' }} placeholder="List Name" required />
                            </div>
                            {
                                this.state.list.items.map(
                                    (item, index) => {
                                        return <div key={index} className="form-group">
                                            <div className="input-group">
                                                <input onChange={this.updateListItem.bind(this, index)} value={item.name} name="list-item" className="form-control" placeholder="List Item" required />
                                                <div className="input-group-append">
                                                    <button onClick={() => { this.removeItem(index) }} type="button" className="btn btn-outline-danger">X</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }
                            <button onClick={this.addEmptyItem} type="button" className="btn btn-outline-primary form-control">+</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => { this.props.confirm(this.state.list) }} data-dismiss="modal">Save changes</button>
                        <button type="button" className="btn btn-secondary" onClick={this.resetList} data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default EditModal;