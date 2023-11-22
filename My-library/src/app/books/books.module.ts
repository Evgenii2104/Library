import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksRoutingModule} from "./books-routing.module";
import {BooksComponent} from "./books.component";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatTableModule
  ],
  declarations: [BooksComponent]
})
export class BooksModule {}
