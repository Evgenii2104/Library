import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorsComponent} from "./authors/authors.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path: '', redirectTo: 'authors', pathMatch: 'full'},
  {
    path: 'authors',
    loadChildren: () => import('./authors/authors.module').then( m => m.AuthorsModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then( m => m.BooksModule)
  },
  {path: '**', component: AuthorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
