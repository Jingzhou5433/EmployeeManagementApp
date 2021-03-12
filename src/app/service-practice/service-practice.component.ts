import { Component, OnInit } from '@angular/core';
import { AccountsService} from './accounts.service';

@Component({
  selector: 'app-service-practice',
  templateUrl: './service-practice.component.html',
  styleUrls: ['./service-practice.component.css'],
  providers: [AccountsService]
})
export class ServicePracticeComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];
  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

}
