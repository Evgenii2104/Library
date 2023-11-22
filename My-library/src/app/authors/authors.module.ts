import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorsRoutingModule} from "./authors-routing.module";
import {AuthorsComponent} from "./authors.component";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule

  ],
  declarations: [AuthorsComponent]
})
export class AuthorsModule {}
