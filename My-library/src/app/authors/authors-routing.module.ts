import {RouterModule, Routes} from "@angular/router";
import {AuthorsComponent} from "./authors.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: AuthorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule {}
