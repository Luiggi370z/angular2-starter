import { AuthCallbackComponent } from './auth/auth-callback.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthCallbackComponent],
  providers: [AuthenticationGuard],
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
