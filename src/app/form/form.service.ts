import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';
import { SpinnerService } from '../spinner/spinner.service';


@Injectable({
  providedIn: 'root'
})
  
  
export class FormService {

  constructor(private http: HttpClient,private shared: SharedService,private spinner:SpinnerService) { }
  
  diffuse(prompt:any)
  {
    this.spinner.startSpinner();
    this.shared.setName(null);
    
    this.http.get(environment.API, { params: { prompt: prompt } }).subscribe((Response) =>
    {

      console.log(Response);

      this.shared.setLink(Response);
      this.shared.setName(prompt);

      this.spinner.stopSpinner();

    }), (error:any) =>
    {
      console.log(error);
      
    };
  }
}
