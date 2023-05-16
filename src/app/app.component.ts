import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nine';
  accounts = [
    {
      name : 'Master Account',
      status : 'active'
    },
    {
      name : 'Test account',
      status : 'inactive'
    },
    {
      name : 'Hidden Account',
      status : 'unknown'
    },
  ];

  onAccountAdded(newAccount: {name: string, status : string}){
    this.accounts.push(newAccount)
  }
  onStatusChanged(updateInfo: {id: string, newStatus : string}){
    this.accounts[updateInfo.id].status=updateInfo.newStatus
  }
}
