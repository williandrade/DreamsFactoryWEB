import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BasicResponse {
  constructor(public message: string, public payLoad, public success: boolean) { }
}

const BASE_URL: String = '//69.197.131.170:8080/DreamsFactoryWAR/service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get(path: String) {
    return new Observable<BasicResponse>(observer => {
      this.http.get<BasicResponse>(BASE_URL + '' + path).subscribe(function (data) {
        observer.next(data);
        observer.complete();
      });
    });
  }

  post(path: String, obj: Object) {
    return new Observable<BasicResponse>(observer => {
      this.http.post<BasicResponse>(BASE_URL + '' + path, obj).subscribe(function (data) {
        observer.next(data);
        observer.complete();
      });
    });
  }
}
