import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  AfterViewChecked,
} from '@angular/core';

import { Observable } from 'rxjs';
import { apiService } from 'src/app/service/http-service.service';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  data: Observable<any> | undefined;

  pageSize: number = 5;
  duration: number = 2;
  pageSizeOption = [5, 10, 20];

  constructor(
    private _apiService: apiService,
    public _dialog: MatDialog,
    private _snackbar: MatSnackBar,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllData();
    this._apiService.getfakeImageApi().subscribe((res: any) => {
      if (res) {
        console.log(res);
      }
    });
  }

  ngAfterViewInit(): void {
    this._changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.data = this.dataSource.connect();
  }

  ngAfterViewChecked() {
    this._changeDetectorRef.detectChanges();
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(DialogComponent, {
      width: '495px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (
        result &&
        (result.name ||
          result.img ||
          result.avatar ||
          result.userName ||
          result.description)
      ) {
        result['like'] = false;
        this._apiService.postNewData(result).subscribe((res: any) => {
          if (res) {
            this._snackbar.open('Card added Successfully');
            this.getAllData();
            setTimeout(() => {
              this._snackbar.dismiss();
            }, this.duration * 1000);
          }
        });
      }
    });
  }

  getAllData(): void {
    this._apiService.getAllData().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }

  afterChangeInData = (event: any): void => {
    this.getAllData();
  }

}
