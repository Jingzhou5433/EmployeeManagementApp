import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-server',
  templateUrl: './split-server.component.html',
  styleUrls: ['./split-server.component.css']
})
export class SplitServerComponent implements OnInit {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  constructor() { }

  ngOnInit(): void {
  }
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
}
