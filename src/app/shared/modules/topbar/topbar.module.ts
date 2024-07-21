import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule} from 'primeng/dynamicdialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';


@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    ButtonModule,
  ],
  exports: [TopbarComponent],
  entryComponents: [
    LoginComponent
  ]
})
export class TopbarModule { }
