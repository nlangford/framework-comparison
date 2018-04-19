import React, { Component } from 'react';
import EditModal from './EditModal';
import './List.css'
import './App.css';
import DeleteModal from './DeleteModal';

class List extends Component {
    constructor(props){
        super(props);

        this.handleChecks = this.handleChecks.bind(this);
    }

    handleChecks(index, event) {
        this.props.list.items[index].completed = !this.props.list.items[index].completed;
        this.props.updateList(this.props.list);
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style={{ marginTop: '20px' }}>
                <div className="card">
                    <div className="card-header" style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                        {this.props.list.name}
                    </div>
                    <ul className="list-group list-group-flush">
                        {this.props.list.items.map((item, index) => {
                            return <li key={index} className="list-group-item">
                                <span className={(item.completed ? 'complete' : '')}>{item.name}</span>
                                <input onChange={this.handleChecks.bind(this, index)} checked={item.completed} type="checkbox" className="float-right" />
                            </li>
                        })}
                        <li className="list-group-item">
                            <button className="btn btn-primary" data-toggle="modal" data-target={"#editModal" + this.props.list._id}>Edit</button>
                            <button className="btn btn-secondary" data-toggle="modal" data-target={"#deleteModal" + this.props.list._id}>Delete</button>
                        </li>
                    </ul>
                </div>
                <EditModal id={"editModal" + this.props.list._id } list={this.props.list} confirm={this.props.updateList} />
                <DeleteModal id={"deleteModal" + this.props.list._id } list={this.props.list} confirm={this.props.deleteList} />
            </div>
        );
    }
}

export default List;