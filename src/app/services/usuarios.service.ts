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


const params = new HttpParams().append('page', '2');
return this.http.get(`https://reqres.in/api/user`, {
  params,
}
).pipe(
  map( resp => resp ['data'] ),
);
}



}
