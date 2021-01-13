import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { User } from '../../services/user.model';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  
  user$: Observable<User | null | undefined> =  this.auth.user$;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
