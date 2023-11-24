import {Component, OnInit, ViewChild} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BooksServices} from "../core/services/books.services";
import {AuthorsServices} from "../core/services/authors.services";
import {AuthorInterfaces} from "../core/interfaces/author.interfaces";
import {BookInterfaces} from "../core/interfaces/book.interfaces";
import {yearsPerPage} from "@angular/material/datepicker";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'mc-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit{
  displayedColumns: string[] = ['id', 'author', 'title', 'publisher', 'year'];
  dataSource = new MatTableDataSource<BookInterfaces[]>;
  form: FormGroup;
  authors: AuthorInterfaces[] | null
  item: string[]

  @ViewChild(MatSort) private sort: MatSort;

  constructor(
    private booksServices: BooksServices,
    private authorsService: AuthorsServices) {}

  ngOnInit() {
    this.form = new FormGroup({
      author: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      publisher: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required)
    })
    this.authors = this.authorsService.getAll()
    // @ts-ignore
    this.dataSource.data = this.booksServices.getAll()
    console.log(this.authors)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onSubmit() {
    const { author, title, publisher, year } = this.form.value;
    const book: BookInterfaces = { title, publisher, year, id: Date.now(), author };
    if (!this.booksServices.has(book)) {
      this.booksServices.add(book);
    }
    // @ts-ignore
    this.dataSource.data = this.booksServices.getAll()
    this.form.reset()
  }

}
