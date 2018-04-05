import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(
    private http: Http
  ) { }

  getLists(){
    return this.http.get(`http://localhost:3000/api/lists`).map((res:Response) => res.json());
  }

}
