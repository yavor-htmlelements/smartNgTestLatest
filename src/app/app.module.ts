import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardViewModule } from 'smart-webcomponents-angular/cardview';
import { AppComponent } from './app.component';
import { DockingLayoutModule } from 'smart-webcomponents-angular/dockinglayout';
import { TabsModule } from 'smart-webcomponents-angular/tabs';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';
import { SliderModule } from 'smart-webcomponents-angular/slider';
import { MultilineTextBoxModule } from 'smart-webcomponents-angular/multilinetextbox';
	
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, DockingLayoutModule, TabsModule, TextBoxModule, SliderModule, MultilineTextBoxModule,CardViewModule ],
    schemas: [],
	entryComponents: [],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }