import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [RegisterFormComponent, LoginFormComponent],
  imports: [CommonModule],
  exports: [RegisterFormComponent, LoginFormComponent],
})
export class UserModule {}
