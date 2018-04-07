import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Http, HttpModule } from '@angular/http';
import { ConfirmModal } from './modal/confirm-modal/confirm-modal.component';
import { EditModal } from './modal/edit-modal/edit-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmModal,
    EditModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [
      ConfirmModal,
      EditModal
  ]
})
export class AppModule { }
