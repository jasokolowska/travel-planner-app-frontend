import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  providers: [DialogService]
})
export class TopbarComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  onSignIn() {
    this.dialogService.open(LoginComponent, {
      header: 'Sign in',
      width: '30%',
  });
  }

}
