import {EventEmitter} from '@angular/core';

export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string): void{
    this.accounts.push({name: name, status: status});
  }
  updateStatus(id: number, status: string): void{
    this.accounts[id].status = status;
  }
}
