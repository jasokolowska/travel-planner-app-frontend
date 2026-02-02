import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [TopbarComponent],
})
export class TopbarModule { }
