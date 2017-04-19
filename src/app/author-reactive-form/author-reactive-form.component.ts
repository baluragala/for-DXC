import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
import { Author} from '../author-form/author'
@Component({
  selector: 'app-author-reactive-form',
  templateUrl: './author-reactive-form.component.html',
  styleUrls: ['./author-reactive-form.component.css']
})
export class AuthorReactiveFormComponent implements OnInit {

  // authorForm:FormGroup = new FormGroup({
  //   name: new FormGroup({
  //     firstName: new FormControl('', Validators.required),
  //     lastName: new FormControl()
  //   }),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     zip: new FormControl(),
  //     city: new FormControl()
  //   })
  // })
authorForm:FormGroup;

  author:any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.authorForm = this.formBuilder.group({
      name : this.formBuilder.group({
      firstName:['', [Validators.required,Validators.minLength(6)]],
      lastName:''
    }),
    address: this.formBuilder.group({
      street:'',
      zip:'',
      city:''
    })
  });
 
  this.author = {
    name: {first: 'Bala',lastName:'Ragala'},
    address: {street:'ABC',zip:'12234',city:'Atlanta'}
  }
  
  this.authorForm.patchValue(this.author);

  this.authorForm.valueChanges.subscribe(model => {
    console.log(model);
  })

   //let n:any = this.authorForm.controls.name;

  }
  
}
