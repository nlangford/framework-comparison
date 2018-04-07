import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(
    private http: Http
  ) { }

  apiUrl = window.location.protocol + '//' + window.location.host + '/api/';

  getLists(){
    return this.http.get(this.apiUrl + 'lists').map((res:Response) => res.json());
  }

  deleteList(objId) {
    return this.http.delete(this.apiUrl + 'lists/' + objId).subscribe((ok)=>{console.log(ok)});
  }
  
  updateList(obj) {
    return this.http.put(this.apiUrl + 'lists/', obj).subscribe((ok)=>{console.log(ok)});
  }

}
