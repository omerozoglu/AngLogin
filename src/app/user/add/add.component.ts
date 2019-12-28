import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id:[],
      username:['',Validators.compose([Validators.required])],
      password:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      age:['',Validators.required],
      salary:['',Validators.required],
    });
  }
  
  onSubmit(){
    console.log(this.addForm.value);
    
  }

}
