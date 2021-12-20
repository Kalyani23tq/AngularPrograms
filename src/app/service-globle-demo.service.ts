import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceGlobleDemoService {
products:Product[]=[];
  constructor() { }

  getProducts()
  {
    this.products=[
      {productID:344,name:'PenDrive',price:700},
      {productID:566,name:"HardDisk",price:1000},
      {productID:677,name:'Power Bank',price:1500},
      {productID:788,name:'Memory Card',price:600}

    ]
    return this.products;
  }


}

export class Product
{
  productID:number;
  name:string;
  price:number;
  constructor(productID:number,name:string,price:number)
  {
    this.productID=productID;
    this.name=name;
    this.price=price;
  }
}
