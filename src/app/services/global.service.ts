import { ElementRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  propertyArr = [];
  closeThePopUp: Subject<any> = new Subject();
  constructor(
  ) { }

  async openAddPropertyModal(viewContainerRef, componentFactoryResolver): Promise<ViewContainerRef> {
    viewContainerRef?.clear();
    const { AddPropertyModalComponent } = await import('../add-property-modal/add-property-modal.component');
    return viewContainerRef.createComponent(
      componentFactoryResolver.resolveComponentFactory(AddPropertyModalComponent)
    );

  }
  addPropertyInArray(property): void {
    const newId = uuid.v4();
    property = {...{id: newId}, ...property };
    if (property){
      this.propertyArr.push(property);
      this.closeThePopUp.next(true);
    }
  }

  removePropertyInArray(propertyId): boolean {
    if (propertyId){

      // const idFound = this.propertyArr.find((id) => {
      //   console.log('removePropertyInArray_1_find', id, typeof(id), propertyId, typeof(propertyId));
      //   if (id == propertyId ){
      //     console.log('removePropertyInArray_2_find', id, propertyId);
      //   }
      // });
      // console.log('removePropertyInArray_2', propertyId);
      // if (idFound){
      const index = this.propertyArr.indexOf(propertyId);
      if (index){
        this.propertyArr.splice(index, 1);
        return true;
      }
      else{
        return false;
      }
      // }
      // else{
      //   return false;
      // }
    }
  }

}
