import { Component, OnInit } from '@angular/core';
import { Product, ServiceGlobleDemoService } from '../service-globle-demo.service';

@Component({
  selector: 'app-globleserv-demo',
  templateUrl: './globleserv-demo.component.html',
  styleUrls: ['./globleserv-demo.component.css']
})
export class GlobleservDemoComponent implements OnInit {
 
  MyProduct:Product[]=[];
  constructor(public _productservice:ServiceGlobleDemoService) { }

  ngOnInit(): void {
  }

  getProductDetails()
  {
   this.MyProduct=this._productservice.getProducts();
    console.log(this.MyProduct);

  }

}
