import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestsInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    next.handle(request).subscribe({
      // next: (response) => {},
      error: (err) => {
        if (err.status === '500') {
          this.router.navigate(['/500']);
        }
      },
    });

    return next.handle(request);
  }
}
