import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Result } from '../model/interface/result';


@Service()
export class IvaService {
    private http=inject(HttpClient)
    url="http://localhost:3000"
    prefix="/api/invoices/v1"

    getIves():Observable<Result>{
        var api=this.url+this.prefix+"/ives"
        return this.http.get<Result>(api).pipe(
            map(res=> {return res}),
            catchError(err=> {
                console.log("Error ")
                console.log(err)
                return throwError(()=> new Error(err.object.error.message))}
            )
        )
    }
}
