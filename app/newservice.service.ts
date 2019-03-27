import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  /** name:String;
  getName():String{
    this.name='bob';
    return this.name;
  }*/
getInfo()
  {
    return[
      {'EmployeeName':'Harsh','Gender':'male','Department':'Test','Date':'01/23/1997'},
      {'EmployeeName':'kavitha','Gender':'female','Department':'Test','Date':'01/26/1997'}
    ];
  }
  constructor() { }
}
