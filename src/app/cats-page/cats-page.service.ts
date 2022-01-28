import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatsPageService {

  constructor(private http: HttpClient) { }

  getAllBreeds(): Observable<any> {
    return this.http.get(environment.apiUrl + 'breeds');
  }

  getCatsByParams(params: any): Observable<any> {
    return this.http.get(environment.apiUrl + 'images/search', { params })
  }

}
