import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGdirective]'
})
export class GdirectiveDirective {
  element:ElementRef;
  constructor(private el:ElementRef) { 
    el.nativeElement.style.color ="white";
    el.nativeElement.style.backgroundColor ="red";
    this.element=el;
    
  }
  ngOnInit(){
    this.element.nativeElement.innerText += " - rendered by gdirective"
  }

  @HostListener ('mouseenter') doSomething(){
    console.log('mouse entered');
  }
  
  @HostListener ('mousemove') doSomethingAgain(){
    console.log('mouse moved');
  }
}
