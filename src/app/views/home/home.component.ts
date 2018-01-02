import { Component, OnInit, ViewChild} from '@angular/core';
import { ToastComponent }              from 'ngx-weui/toast';
import { PickerService }               from 'ngx-weui/picker';
import { ToptipsComponent }            from 'ngx-weui/toptips';

import {
  DialogComponent,
  DialogConfig
} from 'ngx-weui/dialog';
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('ios') ios: DialogComponent;
  @ViewChild('toptips') toptips: ToptipsComponent;
  @ViewChild('success') successToast: ToastComponent;

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

  constructor(private srv: PickerService) {}

  ngOnInit() {
  }

  onShow() {
    this.config = { ...this.defultConfig };
    (<DialogComponent>this.ios).show().subscribe((res: any) => {
      console.log('type', res);
    });
  }

  onShowBySrv() {
    this.srv.showDateTime('date').subscribe((res: any) => {
      console.log('date', res);
    });
  }

  showVal() {
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
