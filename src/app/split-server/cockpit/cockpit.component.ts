import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName) {
    //console.log(serverName.value);
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
}
