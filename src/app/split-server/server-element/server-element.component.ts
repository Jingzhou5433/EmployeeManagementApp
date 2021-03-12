import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // Native
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log('In ngOnInit --- ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void{
    console.log('In agAfterContentInit ---- ' + this.paragraph.nativeElement.textContent);
  }
}
