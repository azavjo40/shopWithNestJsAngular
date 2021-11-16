import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { CoreAcsions } from '../reducers/core.acsions';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private coreAcsions: CoreAcsions) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        if (err && err.error) {
          this.coreAcsions.errorMessage(err.error.message);
        }
        return throwError(err);
      })
    );
  }
}
