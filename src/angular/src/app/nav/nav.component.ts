import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModal } from '../modal/edit-modal/edit-modal.component';
import { AppService } from '../app.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private app: AppComponent, private appService: AppService, private modal: NgbModal) { }

  ngOnInit() {
  }

  addList() {
    let modalRef = this.modal.open(EditModal);

    modalRef.componentInstance.options = {
      heading: "Add new list",
      list: {name: "", items:[{name:"", completed:false}]},
      confirm: "Add",
      cancel: "Cancel"
    }

    modalRef.result.then((data) => {
      let response = this.appService.addList(data);
      console.log("response", response);
      this.app.lists.push(data);
    }).catch((data) => {
      console.log("Add cancelled", data)
    });
  }

}
