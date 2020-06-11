import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulting-list',
  templateUrl: './consulting-list.component.html',
  styleUrls: ['./consulting-list.component.css'],
})
export class ConsultingListComponent implements OnInit {
  items: any[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        title: 'Title1',
        content: `Content1\nhoge`,
      },
      {
        title: 'Title2',
        content: 'Content2',
      },
      {
        title: 'Title3',
        content: 'Content3',
      },
    ];
  }

  getLineBreak(string): string {
    return string.split('\n');
  }
}
