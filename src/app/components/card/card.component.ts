import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { apiService } from '../../service/http-service.service';
import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public data: any;
  @Output() public result: EventEmitter<any> = new EventEmitter();

  durationInSeconds = 2;
  seconds = 1000 * this.durationInSeconds;
  defaultDescription: string = `Description is not added`;

  constructor(
    private _router: Router,
    private _apiService: apiService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  displayRecord(data: any): void {
    this._router.navigateByUrl(`/profile/${data.id}`);
  }

  openEditDialog(): void {
    const dialogRef = this._dialog.open(DialogComponent, {
      width: '495px',
      data: this.data,
    });

    dialogRef.afterClosed()
    .subscribe((result) => {
      if (result) {
        this._apiService.updateData(result).subscribe((res: any) => {
          this._snackBar.open('Card updated Sccessfull');
          setTimeout(() => {
            this._snackBar.dismiss();
          }, this.seconds);
          this.result.emit('updated');
        });
      }
    });
  }

  updateLikeStatus(): void {
    this.data.like = !this.data.like;
    this._apiService
      .updateLike(this.data.id, this.data.like)
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  deleteRecord(id: number): void {
    const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: {
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No',
        },
      },
    });

    dialogRef.afterClosed()
    .subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._apiService.deleteDataById(id).subscribe((res: any) => {
          this._snackBar.open('Card Deleted Successfully');
          this.result.emit('Deleted');
          setTimeout(() => {
            this._snackBar.dismiss();
          }, this.seconds);
        });
      }
    });
  }
}
