import { Component, Output, EventEmitter } from '@angular/core';
import { EightballService } from './eightball.service';
import { Eightball } from './eightball';

@Component({
   selector: 'eightball-answer',
   templateUrl: './eightball-answer.component.html'
})

export class EightballAnswerComponent  {

   constructor(private eightballService: EightballService) {}

}