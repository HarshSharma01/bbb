import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { GdirectiveDirective } from './gdirective.directive';
import { CustomPipe } from './demo.pipes';
import { NewserviceService } from './newservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemodirectivesComponent,
    CustomPipe,
    GdirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [NewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
