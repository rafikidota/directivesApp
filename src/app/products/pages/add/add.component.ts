import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  text:string = 'David Lesmes';
  color:string = 'violet';
  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required]],
  });
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {

  }
  save() {

  }
  hasError(fcn: string) { //formControlName
    return this.myForm.get(fcn)?.invalid || false;
  }
  changeName(){
    this.text = Math.random().toString();
  }
  changeColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
