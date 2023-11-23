import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksRoutingModule} from "./books-routing.module";
import {BooksComponent} from "./books.component";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    imports: [
        CommonModule,
        BooksRoutingModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDividerModule,
        MatIconModule
    ],
  declarations: [BooksComponent]
})
export class BooksModule {}
