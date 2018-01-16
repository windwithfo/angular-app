import { isPlatformBrowser }    from '@angular/common';
import { DialogComponent }      from '../../components';
import { MatDialog, PageEvent } from '@angular/material';
import { Title }                from '@angular/platform-browser';

import {
  Component,
  OnInit,
  PLATFORM_ID,
  APP_ID,
  Inject
} from '@angular/core';

@Component({
  selector: 'app-home.pc',
  templateUrl: './home-pc.component.html',
  styleUrls: ['./home-pc.component.scss']
})
export class HomePcComponent implements OnInit {

  foods: Array<Object> = [
    {
      value: 'steak-0',
      viewValue: 'Steak'
    },
    {
      value: 'pizza-1',
      viewValue: 'Pizza'
    },
    {
      value: 'tacos-2',
      viewValue: 'Tacos'
    }
  ];

  animal: String = 'animal';
  name: String = 'name';

  // MatPaginator Inputs
  length: Number = 100;
  pageSize: Number = 10;
  pageSizeOptions: Array<Number> = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(public dialog: MatDialog, private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
  }

  ngOnInit() {
    this.titleService.setTitle('pc-home');
    console.log('PLATFORM_ID', this.platformId);
    const platform = isPlatformBrowser(this.platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${this.appId}`);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

}
