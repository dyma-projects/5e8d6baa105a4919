import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component {

  
    public fconsole(event:Event):void
    {
      console.log(event,"clic");

    }

 

}
