import React, { Component } from 'react';

class DeleteModal extends Component {
    render() {
        return (<div className="modal fade" id="deleteModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editModalLabel">Delete List</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete {this.props.list.name}?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => { this.props.deleteList(this.props.list._id) }} data-dismiss="modal">Delete</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default DeleteModal;