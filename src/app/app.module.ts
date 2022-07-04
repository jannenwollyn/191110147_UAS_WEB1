import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ng2-bootstrap";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DisableControlDirective } from './Directives/disable-control.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule.forRoot(), ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, DisableControlDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
