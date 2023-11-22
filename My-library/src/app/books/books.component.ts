import {Component} from "@angular/core";

@Component({
  selector: 'mc-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent {
  displayedColumns: string[] = ['id', 'author', 'title', 'publisher', 'year'];
  // @ts-ignore
  dataSource: string[];
}
