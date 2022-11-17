import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: {[id:number]:number } = {1:400, 3:335, 4:350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cols: number = 3;
  category : string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];

  constructor() { }

  ngOnInit(): void {
  }


  onColumnsCountChange(colNums: number):void {
    this.cols = colNums;
    this.rowHeight=ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategories : string):void {
    this.category = newCategories;
  }

}
