import {Component, OnInit} from "@angular/core";

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorsInterfaces} from "../core/interfaces/authors.interfaces";
import {AuthorsServices} from "../core/services/authors.services";

@Component({
  selector: 'mc-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'surname', 'name', 'middleName', 'dateOfBirth'];
  dataSource: AuthorsInterfaces[];
  form: FormGroup
  constructor(private authorsService: AuthorsServices) {}

  ngOnInit() {
     this.form = new FormGroup({
       surname: new FormControl('', Validators.required),
       name: new FormControl('', Validators.required),
       middleName: new FormControl('', Validators.required),
       dateOfBirth: new FormControl('', Validators.required)
     })
    this.dataSource = this.authorsService.getAll()

  }


  onSubmit() {
    const { surname, name, middleName, dateOfBirth } = this.form.value;
    const author: AuthorsInterfaces = { surname, name, middleName, id: Date.now(), dateOfBirth };
    if (!this.authorsService.has(author)) {
      this.authorsService.add(author);
    }
    console.log(this.authorsService.getAll());
    this.dataSource = this.authorsService.getAll()
  }
}
