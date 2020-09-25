import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>> {
const headers = new HttpHeaders({
  'token-usuario': '29837291873982737987JSAKSJDAS'
});

const reqClon = req.clone({
  headers
}
);



return next.handle(reqClon).pipe(
  catchError(this.manejarError)
);
  }


  manejarError = (error: HttpErrorResponse) => {
    console.log('sucedio un error');
    console.warn(error);
    return throwError('error personalizado');
  }
}
