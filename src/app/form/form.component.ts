import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
  
export class FormComponent implements OnInit {

  title = "This is a form title";



  constructor(private service: FormService) { }; //or (service: FormService) {}

  ngOnInit(): void{};

  async diffuse(prompt: any){

console.log(prompt);


  this.service.diffuse(prompt);
     
  };

}
