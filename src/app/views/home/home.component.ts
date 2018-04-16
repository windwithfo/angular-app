import { isPlatformBrowser } from '@angular/common';
import { Title }             from '@angular/platform-browser';
import { loadavg } from 'os';

import {
  Component,
  OnInit,
  ViewChild,
  PLATFORM_ID,
  APP_ID,
  Inject
} from '@angular/core';

import {
  ToastComponent,
  DialogComponent,
  ToptipsComponent,
  PickerData,
  DialogConfig
} from 'ngx-weui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('ios') ios: DialogComponent;
  @ViewChild('toptips') toptips: ToptipsComponent;
  @ViewChild('success') successToast: ToastComponent;
  @ViewChild('picker') picker: PickerData;

  year: Number = 2018;

  DT: any = {
    min: new Date(2015, 1, 5),
    max: new Date()
  };

  res: any = {
    date: new Date()
  };

  private defultConfig = {
    title: '弹窗标题',
    content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
    cancel: '取消',
    confirm: '确认'
  };

  config: DialogConfig = {};

  constructor(private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    console.log('PLATFORM_ID', platformId);
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }

  ngOnInit() {
    this.titleService.setTitle('m-home');
  }

  onShow() {
    this.config = { ...this.defultConfig };
    (<DialogComponent>this.ios).show().subscribe((res: any) => {
      console.log('type', res);
    });
  }

  onShowBySrv() {
    (<PickerData>this.picker).show().subscribe((res: any) => {
      console.log('date', res);
    });
  }

  timechange() {
    console.log(this.res.date);
  }

  showVal(env: any) {
    console.log(this.res);
  }

  onShowToast() {
    (<ToastComponent>this.successToast).time = 1000;
    (<ToastComponent>this.successToast).onShow();
  }

  onShowToptips(type: 'warn' | 'info' | 'primary') {
    this.toptips.type = 'primary';
    this.toptips.text = 'success';
    this.toptips.onShow();
  }
}
