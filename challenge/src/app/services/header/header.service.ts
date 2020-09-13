import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './../../models/HeaderData';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  //new object
    private _headerData = new BehaviorSubject<HeaderData>({
      title: 'Home',
      icon: 'home',
      routUrl: '/'
    })

  constructor() { }

    //get
    get headerData():HeaderData {
      return this._headerData.value
    }
  
    //set
    set headerData(headerData:HeaderData){
      this._headerData.next(headerData)
    }
}
