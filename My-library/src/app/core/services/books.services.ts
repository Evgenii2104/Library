import {Injectable} from "@angular/core";
import {LocalStorageServices} from "./local-storage.services";
import {AuthorInterfaces} from "../interfaces/author.interfaces";
import {BookInterfaces} from "../interfaces/book.interfaces";

@Injectable({
  providedIn: 'root'
})
export class BooksServices {

  constructor(private localStorageService: LocalStorageServices) {
  }

  add(book: BookInterfaces): void {
    const books: BookInterfaces[] | null = this.localStorageService.get<BookInterfaces[]>('books');
    if (!books ) {
      this.localStorageService.set('books', [book])
      return;
    }
    books.push(book);
    this.localStorageService.set('books', books)
  }

  has(book: BookInterfaces): boolean {
    const books: BookInterfaces[] | null = this.localStorageService.get<BookInterfaces[]>('books');
    if (!books) {
      return false;
    }
    const foundBook = books.find((b: BookInterfaces) => {
      return b.title === book.title
        && b.year === book.year;
    });
    console.log(foundBook)
    return !!foundBook;
  }

  getAll(): BookInterfaces[] {
    const books: BookInterfaces[] | null = this.localStorageService.get<BookInterfaces[]>('books');
    return !books ? [] : books;
  }

  remove(): void {
    this.localStorageService.remove('books')
  }
}
