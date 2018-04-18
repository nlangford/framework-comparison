import React, { Component } from 'react';
import EditModal from './EditModal';
import './List.css'
import './App.css';

class List extends Component {
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
                                <input onChange={this.handleChecks} defaultChecked={item.completed} type="checkbox" className="float-right" />
                            </li>
                        })}
                        <li className="list-group-item">
                            <button className="btn btn-primary" data-toggle="modal" data-target="#editModal">Edit</button>
                            <button className="btn btn-secondary">Delete</button>
                        </li>
                    </ul>
                </div>
                <EditModal list={this.props.list} updateList={this.props.updateList} />
            </div>
        );
    }
}

export default List;