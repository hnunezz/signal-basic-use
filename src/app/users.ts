import { Inject, Injectable } from "@angular/core";
import { delay, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Users {
  getAll() {
    return of(['Henrique', 'Nunes', 'Almeida', 'Marjollyn', 'Nicoly', 'Gomes', 'Silva']).pipe(delay(1000));
  }
}
