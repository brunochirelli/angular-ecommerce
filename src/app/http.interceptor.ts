import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class HttpRequestsInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Avoid using subscriber to not trigger request twice
    next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }

        if (err.status === 500) {
          this.router.navigate(['/500']);
        }

        throw err;
      })
    );

    return next.handle(request);
  }
}
