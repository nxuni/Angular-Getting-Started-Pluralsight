import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-product',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductlistComponent implements OnInit {
        
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
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
        this.products = this.productService.getProducts();
        this.filteredproducts = this.products;        
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