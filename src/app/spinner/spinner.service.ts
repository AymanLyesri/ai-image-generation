import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  status = false;

  constructor() { }

  startSpinner()
  {
    this.status = true;
  }

  SpinnerStatus()
  {
    return this.status;
}

  stopSpinner()
  {
    this.status = false;
  }
}
