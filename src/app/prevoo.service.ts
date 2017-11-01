
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PrevooService {

  private materiaalUrl: string = 'http://jsonplaceholder.typicode.com/users';
  private productUrl: string = 'http://jsonplaceholder.typicode.com/users';
  private dikteUrl: string = 'http://jsonplaceholder.typicode.com/users';
  private formaatUrl: string = 'http://jsonplaceholder.typicode.com/users';
  private optiesUrl: string = 'http://jsonplaceholder.typicode.com/users';
  private kleurUrl: string = 'http://jsonplaceholder.typicode.com/users';
  private orderUrl: string = 'http://jsonplaceholder.typicode.com/users';
  
    constructor(private http: Http) { }
  
    getMateriaal(){
      return this.http.get(this.materiaalUrl)
        .map(res => res.json());
    }

    addMateriaal(body){
      return this.http.post(this.materiaalUrl,JSON.stringify(body))
        .map(res => res.json());
    }
  
    getProduct(){
      return this.http.get(this.productUrl)
        .map(res => res.json());
    }

    addProduct(body){
      return this.http.post(this.productUrl,JSON.stringify(body))
        .map(res => res.json());
    }
    
    getDikte(){
      return this.http.get(this.dikteUrl)
        .map(res => res.json());
    }

    addDikte(body){
      return this.http.post(this.dikteUrl,JSON.stringify(body))
        .map(res => res.json());
    }

    getFormaat(){
      return this.http.get(this.formaatUrl)
        .map(res => res.json());
    }

    addFormaat(body){
      return this.http.post(this.formaatUrl,JSON.stringify(body))
        .map(res => res.json());
    }

    getOpties(){
      return this.http.get(this.optiesUrl)
        .map(res => res.json());
    }

    addOpties(body){
      return this.http.post(this.optiesUrl,JSON.stringify(body))
        .map(res => res.json());
    }

    getKleur(){
      return this.http.get(this.kleurUrl)
        .map(res => res.json());
    }

    addKleur(body){
      return this.http.post(this.kleurUrl,JSON.stringify(body))
        .map(res => res.json());
    }

    getOrders(){
      return this.http.get(this.orderUrl)
      .map(res => res.json());
    }

    addOrder(body){
      return this.http.post(this.orderUrl,JSON.stringify(body))
      .map(res => res.json());
    }
    
  }