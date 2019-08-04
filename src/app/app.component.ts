import { Component, Inject, OnInit } from '@angular/core';
import { StorageService } from './core/storage/storage.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.storageService.dbNameList.length) {
      this.openGlobalDialog();
    }
  }

  openGlobalDialog(): void {
    const dialogRef = this.dialog.open(NewDatabaseDialogComponent, {
      hasBackdrop: true,
      data: {
        animal: 'haha',
        name: '123'
      }
    });
  }
}

@Component({
  selector: 'app-new-database-dialog',
  templateUrl: './new-database-dialog.component.html'
})
export class NewDatabaseDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NewDatabaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
