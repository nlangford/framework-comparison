import { Component } from '@angular/core';
import { AppService } from './app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModal } from './modal/confirm-modal/confirm-modal.component';
import { EditModal } from './modal/edit-modal/edit-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private appService: AppService, private modal: NgbModal) {
    this.loadLists();
  }

  lists = [];

  loadLists() {
    this.appService.getLists().subscribe(data => {this.lists = data;});
  }

  deleteList(id){
    let list = this.lists.filter(item => item._id === id)[0];

    let options = {
      header: "Confirm Delete",
      message: "Are you sure you would like to delete the list named: " + list.name,
      confirm: "Delete",
      cancel: "Cancel"
    }

    const modalRef = this.modal.open(ConfirmModal);
    modalRef.componentInstance.options = options;

    modalRef.result.then(
      () => {let response = this.appService.deleteList(id);this.loadLists();}
    ).catch(
      () => {console.log("Delete Cancelled")}
    );
  }
  
  editList(list){
    let options = {
      header: "Edit List",
      list: list,
      confirm: "Save",
      cancel: "Cancel"
    }

    const modalRef = this.modal.open(EditModal);
    modalRef.componentInstance.options = options;

    modalRef.result.then(
      (data) => {
        let response = this.appService.updateList(data);
        this.loadLists();
        console.log(response);
      }
    ).catch(
      () => {
        console.log("Edit Cancelled"); 
        this.loadLists();}
    );
  }
}
