import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorsComponent} from "./authors/authors.component";
import {BooksComponent} from "./books/books.component";

const routes: Routes = [
  {path: '', redirectTo: 'authors', pathMatch: 'full'},
  {path: 'authors', loadChildren: () => import('./authors/authors.module').then(mod => mod.AuthorsModule)},
  {path: 'books', loadChildren: () => import('./books/books.module').then(mod => mod.BooksModule)},
  {path: '**', component: AuthorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    BooksComponent,
    AuthorsComponent
  ],
  exports: [RouterModule, BooksComponent, AuthorsComponent]
})
export class AppRoutingModule { }
