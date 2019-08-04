import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from './core/storage/storage.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

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
    if (!this.storageService.isNew()) {
      this.openGlobalDialog();
    }
  }

  openGlobalDialog(): void {
    const dialogRef = this.dialog.open(NewDatabaseDialogComponent, {
      hasBackdrop: true
    });
  }
}

@Component({
  selector: 'app-new-database-dialog',
  templateUrl: './new-database-dialog.component.html'
})
export class NewDatabaseDialogComponent {
  constructor(
    private storageService: StorageService,
    public dialogRef: MatDialogRef<NewDatabaseDialogComponent>,
    public snackBar: MatSnackBar
  ) {}

  @Input()
  dbName: string;

  saveDb() {
    const db = {
      name: this.dbName,
      version: 1
    };

    try {
      this.storageService.addNewDatabase(db);
      this.storageService.setCurrentDatabase(db);
    } catch (e) {
      this.snackBar.open(e.message, '关闭');
    }

    this.dialogRef.close();
  }
}
