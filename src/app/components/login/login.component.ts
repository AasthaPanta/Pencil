import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLoader: Boolean = true;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 2000)
  }

}
