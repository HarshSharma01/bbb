import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  /**someName:String;
  firstname:String;
  clickMessage:String = '';

 display():String{
    this.firstname="Harsh";
    return this.firstname;
  }

  onClickMe() {
    this.clickMessage = 'You are a hero!';
  }

  appear:boolean=true;

  CustomerList=[
    {'name':"Harsh",'type':"Premium",'date':"01/23/1997"}
  ]
} */
/**appear:boolean=true;
visible:boolean=true;
CustomerList=[
  {'name':'shruthi','type':'premium'},
  {'name':'kavitha','type':'non-premium'}
]
EmployeeTable=[
  {'EmployeeName':'bob','Gender':'male','Department':'operations','Date':'01/23/1997'},
  {'EmployeeName':'alice','Gender':'female','Department':'operations','Date':'01/23/1997'},
  {'EmployeeName':'kavi','Gender':'female','Department':'operations','Date':'01/23/1997'}
]

//selectedEmployee:string="total";
getTotalEmployee():number{
  return this.EmployeeTable.length;
}
getMaleEmployee():number{
  return this.EmployeeTable.filter(e=>e.Gender==="male").length;
}
getFemaleEmployee():number{
  return this.EmployeeTable.filter(e=>e.Gender==="female").length;
}
/** onNotifyClicked(message:string):void{
  this.selectedEmployee=message;
}*/

/** constructor(private myService:NewserviceService){
    let obj=new NewserviceService();
    console.log(obj.getName());
}*/


/** public Info=[];
constructor(private listnames1:NewserviceService ){}
ngOnInit()
{
this.Info=this.listnames1.getInfo();
}*/

clickMessage:String;
onClickMe() {
  this.clickMessage = 'You are a hero!';
}
}

