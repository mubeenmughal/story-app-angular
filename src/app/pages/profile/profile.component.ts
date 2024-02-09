import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { apiService } from 'src/app/service/http-service.service';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  data: any = [];
  defaultDescription: string = `Description is not added`;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiService: apiService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private _location: Location,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.url.subscribe((data: any) => {
      const id = parseInt(data[data.length - 1].path);
      this._apiService.getDataById(id).subscribe((res: any) => {
        this.data = res;
      });
    });
  }

  openEditDialog(): void {
    const dialogRef = this._dialog.open(DialogComponent, {
      width: '495px',
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._apiService.updateData(result).subscribe((res: any) => {

        });
      }
    });
  }

  updateLikeStatus() {
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

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this._apiService.deleteDataById(id).subscribe((res: any) => {
          this._snackBar.open('Card Deleted Successfully');
          this._router.navigateByUrl('/home');
          setTimeout(() => {
            this._snackBar.dismiss();
          }, 2000);
        });
      }
    });
  }

  backClicked(): void {
    this._location.back();
  }
}
