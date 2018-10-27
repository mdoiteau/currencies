import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Data} from '@angular/router';

@Injectable()
export class ActivatedRouteServiceMock {

  public buildActivatedRoute(data:Data): ActivatedRoute {

    let routeSnapshot: ActivatedRouteSnapshot = {
      children: [],
      component: undefined,
      data: data,
      firstChild: undefined,
      fragment: "",
      outlet: "",
      paramMap: undefined,
      params: undefined,
      parent: undefined,
      pathFromRoot: [],
      queryParamMap: undefined,
      queryParams: undefined,
      root: undefined,
      routeConfig: undefined,
      url: [],
      toString(): string {
        return "";
      }
    }

    let mockedRoute: ActivatedRoute = {
      children: [],
      component: undefined,
      data: undefined,
      firstChild: undefined,
      fragment: undefined,
      outlet: "",
      paramMap: undefined,
      params: undefined,
      parent: undefined,
      pathFromRoot: [],
      queryParamMap: undefined,
      queryParams: undefined,
      root: undefined,
      routeConfig: undefined,
      snapshot: routeSnapshot,
      url: undefined,
      toString(): string {
        return "";
      }
    };

    return mockedRoute;
  }
}
