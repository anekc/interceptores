import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

getUsers = () => {

const headers = new HttpHeaders({
  'token-usuario': '29837291873982737987JSAKSJDAS'
});
const params = new HttpParams().append('page', '2');
return this.http.get(`https://reqres.in/api/user`, {params, headers}
).pipe(
  map( resp => resp ['data'] ),
  catchError(this.manejarError)
);
}


manejarError = (error: HttpErrorResponse) => {
  console.log('sucedio un error');
  console.warn(error);
  return throwError('error personalizado');
}
}
