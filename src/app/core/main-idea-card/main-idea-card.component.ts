import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-idea-card',
  templateUrl: './main-idea-card.component.html',
  styleUrls: ['./main-idea-card.component.less']
})
export class MainIdeaCardComponent implements OnInit {
  @Input() title = 'Default title';
  @Input() likes = '0';
  @Input() text = 'Default text';
  @Input() actions = [
    {
      name: 'Ola',
      func: function () { console.log('ola'); }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
