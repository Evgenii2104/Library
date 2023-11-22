import {Component, OnInit} from "@angular/core";
import {LocalStorageServices} from "../core/services/local-storage.services";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'mc-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'surname', 'name', 'middleName', 'dateOfBirth'];
  dataSource: string[];
  form: FormGroup
  authors: any[] | null
  item: number
  constructor(private localStorage: LocalStorageServices<any>) {}

  ngOnInit() {
     this.form = new FormGroup({
       id: new FormControl('', Validators.required),
       surname: new FormControl('', Validators.required),
       name: new FormControl('', Validators.required),
       middleName: new FormControl('', Validators.required),
       dateOfBirth: new FormControl('', Validators.required)
     })
  }

  has() {
    this.authors = this.localStorage.get('authors')
    if (this.authors === null) {
      return null
    } else {
      this.item = this.authors.indexOf(this.form.value)
      if (this.item < 0) {
        return true
      } else {
        return false
      }
    }
  }

  onSubmit() {
    if(this.has() == null) {
      return  this.localStorage.set('authors', this.form.value)
    }else if(this.has()) {
      this.authors?.push(this.form.value)
      return  this.localStorage.set('authors', this.authors)
    } else {
      return 'автор существует'
    }
  }
}
