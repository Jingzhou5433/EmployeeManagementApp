import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-demos',
  templateUrl: './my-demos.component.html',
  styleUrls: ['./my-demos.component.css']
})
export class MyDemosComponent implements OnInit {
  serverName: string;
  allowedNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverCreated = false;
  constructor() { }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
