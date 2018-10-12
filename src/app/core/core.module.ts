import { AuthCallbackComponent } from './auth/auth-callback.component';
import { AuthenticationGuard } from './guards';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '@appCore/services';
import { AdalService, AdalInterceptor } from 'adal-angular4';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopbarComponent } from './topbar/topbar.component';
import { ProfileComponent } from './topbar/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [AuthCallbackComponent, TopbarComponent, ProfileComponent],
  providers: [
    AdalService,
    { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true },
    AuthenticationService,
    AuthenticationGuard,
  ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      const msg = `ModuleName has already been loaded.
        Import ModuleName once, only, in the root AppModule.`;

      throw new Error(msg);
    }
  }
}
