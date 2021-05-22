import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "./product";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productURL = 'api/products/products.json';
    /**
     *
     */
    constructor(private http: HttpClient) { }
    /**
     * Get products
     */
    public getProducts(): Observable<IProduct[]> {
        return this.http
        .get<IProduct[]>(this.productURL)
        .pipe(
            tap(data => console.log('All', JSON.stringify(data)))
            , catchError(this.handleError)
        );
    }
    handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, Error massage is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
    
}
