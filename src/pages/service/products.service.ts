import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
  public apiUrl = "http://59a7d1a3d2f121001138b3b9.mockapi.io/api/products";
  constructor(private _http: Http) {

  }
  getList(value: any) {
    return value;
    //return "Skipperhoa";
  }
  getAll(): Observable<any[]> {
    return this._http.get(this.apiUrl).map((response: Response) => response.json());
  }

  getProduct(value: number) {
    return this._http.get(this.apiUrl + "/" + value).map((response: Response) => response.json());
  }

  updateUser(value: any, id: number) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this._http.put(this.apiUrl + "/" + id, value, options).map((response: Response) => response.json());

  }
  addUser(value: any): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this._http.post(this.apiUrl, value, options).map(this.extractData).catch(this.handleError);
  }
  deleteUser(value: number) {
    return this._http.delete(this.apiUrl + "/" + value, Option).map((response: Response) => response.json());
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.data || {};
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}