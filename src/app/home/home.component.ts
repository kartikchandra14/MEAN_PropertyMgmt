import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public globalService: GlobalService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    this.globalService.closeThePopUp.subscribe((changes: any) => {
      if (changes){
        // console.log('ngOnInit_changes', changes);
        this.viewContainerRef.clear();
      }
    });
  }

  addProperty(): void {
    // console.log('addProperty');
    this.globalService?.openAddPropertyModal(this.viewContainerRef, this.componentFactoryResolver);
  }
  deleteProperty(propertyInfo): void {
    // console.log('deleteProperty', propertyInfo);
    this.globalService?.removePropertyInArray(propertyInfo?.id);
  }
}
