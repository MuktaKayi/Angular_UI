import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { employee } from '../Model/employeemodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeserviceService {

  baseapiurl:string=environment.baseapiurl;

  constructor(private http: HttpClient) {}
  
  getEmployeeList():Observable<employee[]>
  {
    return this.http.get<employee[]>(this.baseapiurl+'api/Controller')
  }

  addemployee(addemployeRequest:employee):Observable<employee[]>
  {
    return this.http.post<employee[]>(this.baseapiurl+'api/Controller',addemployeRequest)
  }
}
