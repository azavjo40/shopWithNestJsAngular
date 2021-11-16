import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { StoreModule } from '@ngrx/store';
import { CoreReducer } from './reducers/core.reducer';
import { CoreAcsions } from './reducers/core.acsions';

@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot({ core: CoreReducer })],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    CoreAcsions,
  ],
  bootstrap: [],
})
export class CoreModule {}
