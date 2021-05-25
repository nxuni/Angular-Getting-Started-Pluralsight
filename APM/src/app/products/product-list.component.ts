import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductlistComponent implements OnInit, OnDestroy {
        
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    sub!: Subscription;
    
    private _listFilter: string = '';
    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(filterBy: string) {
        this._listFilter = filterBy;
        console.log('In Setter:', filterBy);
        this.filteredproducts = this.performFilter(filterBy);
    }
    
    products: IProduct[] = [];
    filteredproducts: IProduct[] = [];

    /**
     *
     */
    constructor(private productService: ProductService) {
        
    }    
    ngOnInit(): void {
        this.sub = this.productService.getProducts()
            .subscribe({
                next: products => {
                    this.products = products;
                    this.filteredproducts = this.products;

                }
                , error: err => this.errorMessage = err
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }    

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }    

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product list: ' + message;
    }
}