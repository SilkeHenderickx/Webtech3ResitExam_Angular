import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import {Eightball} from './eightball';

@Injectable()
export class EightballService {
    constructor(private http: HttpClient) {}
    
    private eightballServiceURI: string = 'http://localhost:3001';

    getAnswer(eightball: Eightball): Observable<Eightball>{
        let url = '${this.eightballServiceURI}/answer';
        
        return this.http.get<Eightball>(url);
    } 
}