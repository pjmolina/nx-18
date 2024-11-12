import {
  CanActivateFn,
  CanActivateChildFn,
  CanDeactivateFn,
} from '@angular/router';
import { Observable } from 'rxjs';

// servicio auth  r = admi

export const authGuard: CanActivateFn = (
  route,
  state
): boolean | Promise<boolean> | Observable<boolean> => {
  if (route.url[0].path == 'about') {
    return true;
  }
  return true;
};

export const authChildGuard: CanActivateChildFn = (
  childRoute,
  state
): boolean => {
  return true;
};
