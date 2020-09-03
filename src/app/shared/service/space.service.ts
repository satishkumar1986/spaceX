import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private _http:HttpClient) { }

  getAllData(url:any):Observable<any>{
    return this._http.get<any>(url);
  }

  getDataYearWise(url:any):Observable<any>{
    return this._http.get<any>(url)
  }

  getDataSuccLaunch(url:any):Observable<any>{
    return this._http.get<any>(url)
  }

  getDataSuccLanding(url:any):Observable<any>{
    return this._http.get<any>(url)
  }

}
