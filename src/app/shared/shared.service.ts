import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  link: any;
  name: any;

  constructor() { }

  setName(prompt:any)
  {
    this.name = prompt;   
  }

  setLink(data:any)
  {
    this.link = data.link;
    console.log("link set : ",this.link);
    
  }
  getLink()
  {
    return this.link;
  }
  getName()
  {
    return this.name;
  }
}
