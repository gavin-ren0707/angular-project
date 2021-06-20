import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sitename = 'Hello World';
  subTitle = '記載著 <mark>Will</mark> 在網路世界的學習心得與技術分享';
  counter = 9;

  constructor() {}
  ngOnInit() {
    console.log('888',this.sitename);
    setTimeout(() => {
      this.sitename = 'handSome';
    }, 2000);
  }

  changeTitle(name: string, evt: MouseEvent) {
    this.sitename = name;
    this.counter++;
    if (evt.ctrlKey) {
      console.log('這是', this.sitename);
      console.log('值', this.counter);
    }
  }
}
