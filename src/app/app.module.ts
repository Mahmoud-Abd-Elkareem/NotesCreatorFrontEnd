import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteHomeComponent } from './Modules/Notes/note-home/note-home.component';
import { NoteListComponent } from './Modules/Notes/note-list/note-list.component';
import { NoteDetailsComponent } from './Modules/Notes/note-details/note-details.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {BsModalRef, ModalModule} from "ngx-bootstrap/modal";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoResultComponent } from './Modules/Notes/no-result/no-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteHomeComponent,
    NoteListComponent,
    NoteDetailsComponent,
    NoResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule ,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
