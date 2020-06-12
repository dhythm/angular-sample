import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogData } from '../dialog/dialog.component';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css'],
})
export class FabComponent implements OnInit {
  dialogData: DialogData = {};

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    console.log('clicked!');
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: this.dialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed.', result);
    });
  }
}
