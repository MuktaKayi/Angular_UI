import { Component, OnInit } from '@angular/core';
import { employee } from '../Model/employeemodel';
import { EmployeserviceService } from '../service/employeservice.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
 addemployeRequest: employee={
  // employeeID:0,
  department_id:0,
  firstName:'',
  lastName:'',
  email:'',
  addressLine:'',
  city:''
 }
  constructor(private employeservice:EmployeserviceService) { }

  ngOnInit(): void {
    
  }

  public addemployee()
  {
    this.employeservice.addemployee(this.addemployeRequest).subscribe({
      next:(employee)=>{
      console.log(this.addemployeRequest)},
      error:(Response)=>{
        console.log(Response)
      }

    })
    
    
  }
}
