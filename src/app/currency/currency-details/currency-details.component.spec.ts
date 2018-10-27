import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrencyDetailsComponent} from './currency-details.component';
import {ActivatedRoute} from '@angular/router';
import {CurrencyDetailsServiceMock} from './service/currency-details.service.mock';
import {ActivatedRouteServiceMock} from '../../route/service/activated-route-service-mock.service';

describe('CurrencyDetailsComponent', () => {
  let component: CurrencyDetailsComponent;
  let fixture: ComponentFixture<CurrencyDetailsComponent>;

  let mockRoute : ActivatedRouteServiceMock = new ActivatedRouteServiceMock();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyDetailsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockRoute.buildActivatedRoute(
            {"currencyDetails":CurrencyDetailsServiceMock.currencyDetailsData})
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
