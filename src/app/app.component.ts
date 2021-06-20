import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  keyword = 'demo1';
  sum=0;
  data$: Observable<any[]> = {} as Observable<any[]>;
  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.data$ = this.dataSvc.loadData();
  }

  doSearch(name: string) {
    this.keyword = name;
  }

  removeArticle(id: number) {
    console.log('333', 'Deleting Post' + id);
  }
}
