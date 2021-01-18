import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../services/user.model';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input() user: User | null | undefined;
  @Output() logoutClick: EventEmitter<null> = new EventEmitter<null>();
  
  constructor() { }

  ngOnInit(): void {

  }

  logout() {
    this.logoutClick.emit();
  }

}
