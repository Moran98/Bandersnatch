import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DetailsProvider Provider');
  }

  getDetailsInfo():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=40cbde40&s=bandersnatch');
  }

}
