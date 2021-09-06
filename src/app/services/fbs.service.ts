import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbsService {

  constructor(private http:HttpClient) { }
  savedata(vdata:any[]):Observable<any>{
    return this.http.post("https://sdhttp-83e94-default-rtdb.asia-southeast1.firebasedatabase.app/data.json",vdata)
  }
}
