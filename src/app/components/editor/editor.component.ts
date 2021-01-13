import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../services/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() user: User | null | undefined;
  constructor(public auth: AuthService) { }
  ngOnInit(): void {
  }

}
