import {PipeTransform,Pipe} from '@angular/core';
@Pipe({ name : 'customPipe'})
export class CustomPipe implements PipeTransform{
transform(name:String,gender:String):String {
if(gender=='male')
return "Mr "+name;
else
return "Miss "+name;
}
}