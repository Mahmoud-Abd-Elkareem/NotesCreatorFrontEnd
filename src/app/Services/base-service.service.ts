import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY } from 'rxjs';
import { ToasterConfig } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  protected serviceBase: string = ''
  constructor(public toastr: ToastrService) {
  }
  handleError(errorResponse: any) {
    let message: string = "";
    if (errorResponse instanceof HttpErrorResponse) {
      if (errorResponse?.error?.detail) {
        message = errorResponse?.error?.detail;
      } else if (errorResponse?.error?.errors) {
        for (let key in errorResponse?.error?.errors) {
          for (let value in errorResponse?.error?.errors[key])
            message += errorResponse?.error?.errors[key][value] + "\n";
        }
      } else {
        message = 'COMMON.ERR.GEN_ERR';
      }
    } else {
      message = 'COMMON.ERR.GEN_ERR';
    }
    this.toastr.show(message, 'error', ToasterConfig);
    return EMPTY;
    // if (error instanceof HttpErrorResponse) {
    //   let message = error?.error?.detail ?? this.translateService.instant('COMMON.ERR.GEN_ERR')
    //   this.toastr.show(message, 'error', ToasterConfig);
    // }
    // else if (error?.error && error?.error?.title) {
    //   let message = error?.title ?? this.translateService.instant('COMMON.ERR.GEN_ERR')
    //   this.toastr.show(message, 'error', ToasterConfig);
    // }

    // return EMPTY;
  }
}
