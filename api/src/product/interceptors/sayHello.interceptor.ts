import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common"
import { Observable, pipe } from "rxjs"
import { tap } from "rxjs/operators"

@Injectable()
export class sayHelloInterceptor implements NestInterceptor {
  constructor() {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest()
    const now = Date.now()
    return next
      .handle()
      .pipe(tap(() => console.log(`good buy ${Date.now() - now}ms`)))
  }
}
