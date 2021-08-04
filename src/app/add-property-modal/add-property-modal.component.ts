import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-add-property-modal',
  templateUrl: './add-property-modal.component.html',
  styleUrls: ['./add-property-modal.component.css']
})
export class AddPropertyModalComponent implements OnInit {
  addPropertyFg: FormGroup;
  errorMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.addPropertyFg = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      size: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // console.log('onSubmit', this.addPropertyFg?.valid);
    if (this.addPropertyFg?.valid){
      this.globalService.addPropertyInArray(this.addPropertyFg?.value);
    }
    else{
      this.errorMessage = 'Please fill all the fields !!';
      setTimeout(() => {
        this.errorMessage = '';
      }, 10000);
    }
  }

}
