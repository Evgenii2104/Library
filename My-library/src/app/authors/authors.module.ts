import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorsRoutingModule} from "./authors-routing.module";
import {AuthorsComponent} from "./authors.component";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AuthorsComponent]
})
export class AuthorsModule {}
