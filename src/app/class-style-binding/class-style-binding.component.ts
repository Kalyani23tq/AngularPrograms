import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.css']
})
export class ClassStyleBindingComponent implements OnInit {


  classToApplay:string='italicClass boldClass colorClass';

  isBold:boolean=true;
  isItalic:boolean=true;
  new_color:string='green';
  fontSize:number=50;

  applayClass()
  {
    let Classes={
      boldClass:this.isBold,
      italicClass:this.isItalic,
      colorClass:false

    }
    return Classes;
  }

  applayStyle()
  {
    let style={
      'font-weight':this.isBold?"bold":"normal",
      'font-style':this.isItalic?"italic":"normal",
      'font-size.px':this.fontSize,
      'color':this.new_color
    }
    return style;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
