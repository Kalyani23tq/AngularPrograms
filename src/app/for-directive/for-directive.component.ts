import { Component, OnInit } from '@angular/core';
import { IMovie } from '../imovie';


@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies:IMovie[]=[{id:101,title:'superman',year:2002,tiket_Cost:300},
{id:102,title:'Civil War',year:2016,tiket_Cost:350},
{id:400,title:'Captain America',year:2013,tiket_Cost:250}]

}
