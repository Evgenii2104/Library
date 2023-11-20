import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorsRoutingModule} from "./authors-routing.module";
import {AuthorsComponent} from "./authors.component";

@NgModule({
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ],
  declarations: [AuthorsComponent]
})
export class AuthorsModule {}
