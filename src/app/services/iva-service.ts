import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Iva } from '../model/interface/iva';
import { Result } from '../model/interface/result';


@Service()
export class IvaService {
    private http=inject(HttpClient)
    url="http://localhost:3000"
    prefix="/api/invoices/v1"
    getIves(){
        var api=this.url+this.prefix+"/ives"
        return this.http.get<Result>(api)
    }
}
