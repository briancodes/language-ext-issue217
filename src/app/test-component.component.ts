import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styles: []
})
export class TestComponentComponent implements OnInit {
  @Input() someText: string;
  constructor() { }

  ngOnInit() {
  }

}
