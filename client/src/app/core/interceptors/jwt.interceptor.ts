import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LOCALUSERDATA } from 'src/app/constants';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const storage = JSON.parse(localStorage.getItem(LOCALUSERDATA) as any);
    if (storage && storage.access_token) {
      req = req.clone({
        setHeaders: {
          Authorization: storage.access_token,
        },
      });
    }
    return next.handle(req);
  }
}
