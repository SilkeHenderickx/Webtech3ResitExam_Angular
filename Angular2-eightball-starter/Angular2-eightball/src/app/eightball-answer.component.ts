import { Component, Output, EventEmitter } from '@angular/core';
import { EightballService } from './eightball.service';

@Component({
   selector: 'eightball-answer',
   templateUrl: './eightball-answer.html'
})

export class EightballAnswerComponent  {

   constructor(private eightballService: EightballService) {}

}