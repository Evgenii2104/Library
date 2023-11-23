import {AuthorInterfaces} from "../interfaces/author.interfaces";
import {LocalStorageServices} from "./local-storage.services";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthorsServices {
  constructor(private localStorageService: LocalStorageServices) {}

  add(author: AuthorInterfaces): void {
    const authors: AuthorInterfaces[] | null = this.localStorageService.get<AuthorInterfaces[]>('authors');
    if (!authors) {
      this.localStorageService.set('authors', [author]);
      return;
    }
    authors.push(author);
    const authorsSort = authors.sort((a, b) => a.surname > b.surname ? 1 : -1)
    this.localStorageService.set('authors', authorsSort);
  }

  has(author: AuthorInterfaces): boolean {
    const authors: AuthorInterfaces[] | null = this.localStorageService.get<AuthorInterfaces[]>('authors');
    if (!authors) {
      return false;
    }
    const foundAuthor = authors.find((a: AuthorInterfaces) => {
      return a.name === author.name
        && a.middleName === author.middleName
        && a.surname === author.surname
        && a.dateOfBirth === author.dateOfBirth;
    });
    console.log(foundAuthor)
    return !!foundAuthor;
  }

  getAll(): AuthorInterfaces[] {
    const authors: AuthorInterfaces[] | null = this.localStorageService.get<AuthorInterfaces[]>('authors');
    return !authors ? [] : authors;
  }
}
