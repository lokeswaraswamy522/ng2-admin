import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'inline-form',
  styleUrls: ['./inlineForm.scss'],
  templateUrl: './inlineForm.html',
})
export class InlineForm implements OnInit{

  constructor() {
  }

  isRemember: boolean = false;

  options: any[] = [];
  
     ngOnInit() {
         this.options = [
             {
                 value: 1,
                 label: 'Option 1'
             },
             {
                 value: 2,
                 label: 'Option 2'
             }
         ];
     }
}
