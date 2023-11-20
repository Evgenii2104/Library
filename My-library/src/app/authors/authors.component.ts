import {Component, OnInit} from "@angular/core";
import {LocalStorageServices} from "../core/services/local-storage.services";

@Component({
  selector: 'mc-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent implements OnInit{
  constructor(private localStorage: LocalStorageServices<any>) {}

  ngOnInit() {
     this.localStorage.set('222', 'fff')
    console.log(this.localStorage.get(222))
  }

}
