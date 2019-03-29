import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interface/user';
import { AppService } from 'src/app/services/connection/app.service';

@Component({
  selector: 'app-userdiv',
  templateUrl: './userdiv.component.html',
  styleUrls: ['./userdiv.component.css']
})
export class UserdivComponent implements OnInit {

  @Input() userid: number;
  userAux: User;

  constructor(
    private service: AppService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.list('users').subscribe(e => {
      e.map(d => {
        if (d.id === this.userid) {
          this.userAux = d;
        }
      });
    });
  }
}
