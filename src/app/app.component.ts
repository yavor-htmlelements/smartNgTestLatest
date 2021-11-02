import { Component, ViewChild, AfterViewInit, ViewEncapsulation, Inject, ElementRef, ViewContainerRef  } from '@angular/core';
import { Smart, DockingLayoutComponent } from 'smart-webcomponents-angular/dockinglayout';
import { SliderComponent } from 'smart-webcomponents-angular/slider';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';

import { CardViewComponent} from 'smart-webcomponents-angular/cardview';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
	
export class AppComponent implements AfterViewInit {
    @ViewChild('slider', { read: SliderComponent, static: false }) slider: SliderComponent;
    @ViewChild('multilinetextbox', { read: MultilineTextBoxComponent , static: false }) multilinetextbox: MultilineTextBoxComponent;
	@ViewChild('docking', { read: DockingLayoutComponent, static: false }) docking: DockingLayoutComponent;

       
    generateData(length: number): any[] {
        const sampleData = [], firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'], lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'], petNames = ['Sam', 'Bob', 'Lucky', 'Tommy', 'Charlie', 'Olliver', 'Mixie', 'Fluffy', 'Acorn', 'Beak'], countries = ['Bulgaria', 'USA', 'UK', 'Singapore', 'Thailand', 'Russia', 'China', 'Belize'], productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
        for (let i = 0; i < length; i++) {
            const row: any = {};
       
            row.firstName = (i + 1) + '. ' + firstNames[Math.floor(Math.random() * firstNames.length)];
            row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            row.birthday = new Date(Math.round(Math.random() * (2018 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
            row.petName = petNames[Math.floor(Math.random() * petNames.length)];
            row.country = countries[Math.floor(Math.random() * countries.length)];
            row.productName = productNames[Math.floor(Math.random() * productNames.length)];
            row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
            row.quantity = Math.round(Math.random() * (50 - 1) + 1);
            row.timeOfPurchase = new Date(2019, 0, 1, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
            row.expired = Math.random() >= 0.5;
            row.attachments = [];
            const maxAttachments = Math.floor(Math.random() * Math.floor(3)) + 1;
            for (let i = 0; i < maxAttachments; i++) {
                row.attachments.push(`../../../images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`);
            }
            row.attachments = row.attachments.join(',');
            sampleData[i] = row;
        }
        
        return sampleData;
    }


    dataSource = new Smart.DataAdapter({
        dataSource: this.generateData(50),
        dataFields: [
            'firstName: string',
            'lastName: string',
            'birthday: date',
            'petName: string',
            'country: string',
            'productName: string',
            'price: number',
            'quantity: number',
            'timeOfPurchase: date',
            'expired: boolean',
            'attachments: string'
        ]
    });

    columns = [
        { label: 'First Name', dataField: 'firstName', icon: 'firstName' },
        { label: 'Last Name', dataField: 'lastName', icon: 'lastName' },
        { label: 'Birthday', dataField: 'birthday', icon: 'birthday', formatSettings: { formatString: 'd' } },
        { label: 'Pet Name', dataField: 'petName', icon: 'petName' },
        { label: 'Country', dataField: 'country', icon: 'country' },
        { label: 'Product Name', dataField: 'productName', icon: 'productName' },
        { label: 'Price', dataField: 'price', icon: 'price', formatSettings: { formatString: 'c2' } },
        {
            label: 'Quantity', dataField: 'quantity', icon: 'quantity', formatFunction: function (settings) {
                const value = settings.value;
                let className;
                if (value < 20) {
                    className = 'red';
                }
                else if (value < 35) {
                    className = 'yellow';
                }
                else {
                    className = 'green';
                }
                settings.template = `<div class="${className}">${value}</div>`;
            }
        },
        { label: 'Time of Purchase', dataField: 'timeOfPurchase', icon: 'timeOfPurchase', formatSettings: { formatString: 'hh:mm tt' } },
        {
            label: 'Expired', dataField: 'expired', icon: 'expired', formatFunction: function (settings) {
                settings.template = settings.value ? '☑' : '☐';
            }
        },
        { label: 'Attachments', dataField: 'attachments', image: true }
    ];

    coverField: string = 'attachments';
    titleField: string = 'firstName'
 
	ngOnInit(): void {
		// onInit code.
	}
	getCardsMethod(): void {

        setTimeout(() => {
  
          const allCards = document.querySelectorAll('smart-card');
  
   
  
          for(let i:number = 0; i < allCards.length; i++) {
  
                
  
              allCards[i].addEventListener('click', () => {
  
                  let valueContainers : NodeListOf<HTMLElement> = allCards[i].querySelectorAll('.smart-card-view-value');
  
   
  
                  for(let j:number=0 ;j < valueContainers.length;j++){
  
                      let containerInnerHtml: HTMLElement = valueContainers[j];
  
                      console.log(containerInnerHtml.innerHTML);
  
   
  
                  }
  
              })
  
   
  
          }
  
        }, 500);
  
      }
  
      onFilter($event) {
  
        this.getCardsMethod();
  
      }
  
      onSort($event) {
  
        this.getCardsMethod();
  
      }
  
   ngAfterViewInit(): void {
  
      this.getCardsMethod();
  
  }
}