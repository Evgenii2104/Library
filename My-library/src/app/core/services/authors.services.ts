import {AuthorsInterfaces} from "../interfaces/authors.interfaces";
import {LocalStorageServices} from "./local-storage.services";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthorsServices {
  constructor(private localStorageService: LocalStorageServices) {}

  add(author: AuthorsInterfaces): void {
    const authors: AuthorsInterfaces[] | null = this.localStorageService.get<AuthorsInterfaces[]>('authors');
    if (!authors) {
      this.localStorageService.set('authors', [author]);
      return;
    }
    authors.push(author);
    this.localStorageService.set('authors', authors);
  }

  has(author: AuthorsInterfaces): boolean {
    const authors: AuthorsInterfaces[] | null = this.localStorageService.get<AuthorsInterfaces[]>('authors');
    if (!authors) {
      return false;
    }
    const foundAuthor = authors.find((a: AuthorsInterfaces) => {
      return a.name === author.name
        && a.middleName === author.middleName
        && a.surname === author.surname
        && a.dateOfBirth === author.dateOfBirth;
    });
    console.log(foundAuthor)
    return !!foundAuthor;
  }

  getAll(): AuthorsInterfaces[] {
    const authors: AuthorsInterfaces[] | null = this.localStorageService.get<AuthorsInterfaces[]>('authors');
    return !authors ? [] : authors;
  }
}
