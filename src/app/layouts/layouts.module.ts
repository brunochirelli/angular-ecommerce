import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'app/pages/home/home.component';

import { FooterComponent } from './primary-layout/footer/footer.component';
import { HeaderComponent } from './primary-layout/header/header.component';
import { PrimaryLayoutComponent } from './primary-layout/primary-layout.component';

@NgModule({
  declarations: [
    PrimaryLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [CommonModule],
})
export class LayoutsModule {}
