import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {ActivatedRoute} from '@angular/router';
import {ActivatedRouteServiceMock} from '../route/service/activated-route-service-mock.service';
import {CurrencyServiceMock} from '../currency/service/currency.service.mock';
import {Component, Input} from '@angular/core';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  @Component({
    selector: 'currency',
    template: '<b>mock</b>'
  })
  class CurrencyComponentMock {
    @Input()
    id:string;
    @Input()
    type:string;
    @Input()
    symbol:string;
  }

  beforeEach(async(() => {
    let mockRoute : ActivatedRouteServiceMock = new ActivatedRouteServiceMock();
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        CurrencyComponentMock
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockRoute.buildActivatedRoute(
            {"currencyList":CurrencyServiceMock.currencyDataList})
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
