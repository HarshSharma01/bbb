import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent {

  selectedEmployee:string='total';
  @Output() onSelectionOfRadioButton:EventEmitter<String>=new EventEmitter<String>();

  onClick():void{
    this. onSelectionOfRadioButton.emit(this.selectedEmployee);
  }
  @Input()
  total:number;

  @Input()
  male:number;

  @Input()
  female:number;

  @Input()
  date:Date;
}
