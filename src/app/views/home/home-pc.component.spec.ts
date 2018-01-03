import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePcComponent } from './home-pc.component';

describe('Home.PcComponent', () => {
  let component: HomePcComponent;
  let fixture: ComponentFixture<HomePcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
