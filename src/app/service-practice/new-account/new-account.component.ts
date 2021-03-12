import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent{
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe((status: string) => alert('New status: ' + status));
  }
  onCreateAccount(accountName: string, accountStatus: string): void{
    // this.accountAdded.emit({name: accountName, status: accountStatus});
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }

}
