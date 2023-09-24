import { Component, OnInit } from '@angular/core';
import { employee } from '../Model/employeemodel';
import { EmployeserviceService } from '../service/employeservice.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  EmployeeList:employee[]=[]
  constructor(private employeservice:EmployeserviceService) { }

  ngOnInit(): void {
    this.employeservice.getEmployeeList().subscribe({
      next:(EmployeeList)=>{
        this.EmployeeList=EmployeeList;
      // console.log(EmployeeList);
    },
      error:(Response) =>{
      console.log(Response);
      }

    })

  }

}
