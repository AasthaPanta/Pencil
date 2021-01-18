import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../services/user.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User | null | undefined> =  this.auth.user$;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    console.log('Logging the user out');
    this.auth.signOut();
  }

}
