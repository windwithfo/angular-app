import {
  Component,
  OnInit,
  Inject
} from '@angular/core';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';

@Component({
  template: `<div>\
              <div mat-dialog-title>title</div>\
              <mat-dialog-content>{{ data.name }}</mat-dialog-content>\
              <button mat-dialog-close mat-raised-button color="primary">btn</button>\
            </div>`,
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
