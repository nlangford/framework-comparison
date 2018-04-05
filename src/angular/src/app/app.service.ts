import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(
    private http: Http
  ) { }

  getLists(){
    return this.http.get(window.location.protocol + `//` + window.location.host + `/api/lists`).map((res:Response) => res.json());
  }

}
