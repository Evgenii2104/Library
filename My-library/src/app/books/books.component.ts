import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BooksServices} from "../core/services/books.services";
import {AuthorsServices} from "../core/services/authors.services";
import {AuthorInterfaces} from "../core/interfaces/author.interfaces";
import {BookInterfaces} from "../core/interfaces/book.interfaces";
import {yearsPerPage} from "@angular/material/datepicker";

@Component({
  selector: 'mc-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit{
  displayedColumns: string[] = ['id', 'author', 'title', 'publisher', 'year'];
  dataSource: BookInterfaces[];
  form: FormGroup;
  authors: AuthorInterfaces[] | null
  itemsSort: any


  constructor(private booksServices: BooksServices, private authorsService: AuthorsServices) {}

  ngOnInit() {
    this.form = new FormGroup({
      author: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      publisher: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required)
    })
    this.authors = this.authorsService.getAll()
    this.dataSource = this.booksServices.getAll()
    console.log(this.authors)
  }

  onSubmit() {
    const { author, title, publisher, year } = this.form.value;
    const book: BookInterfaces = { title, publisher, year, id: Date.now(), author };
    if (!this.booksServices.has(book)) {
      this.booksServices.add(book);
    }
    this.dataSource = this.booksServices.getAll()
  }

  change(type: string) {
    const nameMap = {
      author: 'author',
      title: 'title',
      publisher: 'publisher',
      year: 'year'
    }
    this.dataSource = this.booksServices.getAll()
    this.itemsSort = this.dataSource.sort((a, b) => {

      return a > b ? 1 : -1
    })
    this.booksServices.remove()
    this.booksServices.add(this.itemsSort)
  }
}
