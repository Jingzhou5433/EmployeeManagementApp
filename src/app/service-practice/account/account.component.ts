import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  onSetTo(status: string): void{
    console.log(this.id);
    this.accountsService.updateStatus(this.id, status);
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }

}
