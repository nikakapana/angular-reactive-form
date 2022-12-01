import { Component } from '@angular/core';

import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  genders = ['male', 'female'];
  form: FormGroup = new FormGroup({
    'firstname': new FormControl('', Validators.required),
    'lastname': new FormControl('', Validators.required),
    'mobile': new FormControl('', [Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(12)]),
    'gender': new FormControl('', Validators.required),
    'mail': new FormControl('', [Validators.required, Validators.email]),

  experience: new FormArray([
    new FormGroup({
      'company': new FormControl(''),
      'years': new FormControl('')
    })
  ])
  })


  get experienceFormArray() {
    return <FormArray>this.form.get('experience')
  }


  addExperience() {
    this.experienceFormArray.push(new FormGroup({
      company: new FormControl(''),
      years: new FormControl('')
    }))
  }
  submit() {
    this.form.markAllAsTouched()
    console.log(this.form)
  }
  removeExperience(i: number) {
    this.experienceFormArray.removeAt(i)
  }
}

