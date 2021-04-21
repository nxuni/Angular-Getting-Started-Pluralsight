import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

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
    
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        }
    ];
    filteredproducts: IProduct[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this.listFilter = 'cart';
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }
}