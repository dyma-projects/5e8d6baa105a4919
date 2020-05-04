import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component  {

 public nom:string;
 public inputType:string;

  constructor() { 

    this.nom = 'Antoine';

    this.inputType  = 'date';

  }

 
  public changeInputType(event:Event) : string
  {
    if (this.inputType == 'date')
    {
    this.inputType = 'number';
    }
    else
    {
      this.inputType = 'date';
    }


    return this.inputType;
  }



}
