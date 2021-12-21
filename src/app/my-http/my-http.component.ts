import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.css']
})
export class MyHttpComponent implements OnInit {

  constructor(private http: HttpClient) { }
  totalAngularPackages:any;
  errorMessage:any;
  postId:any;
  status:any;
  ngOnInit(): void {
    // this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
    //         this.totalAngularPackages = data.total;
    //     })      
    
    //Error with Error Handling
  //   this.http.get<any>('https://api.npms.io/v2/invalid-url').subscribe({
  //     next: data => {
  //         this.totalAngularPackages = data.total;
  //     },
  //     error: error => {
  //         this.errorMessage = error.message;
  //         console.error('There was an error!', error);
  //     }
  // })
  //Post Demo

  // this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
  //           this.postId = data.id;
  //       })

  //Post with Error Handling
//   this.http.post<any>('https://reqres.in/invalid-url', { title: 'Angular POST Request Example' }).subscribe({
//     next: data => {
//         this.postId = data.id;
//     },
//     error: error => {
//         this.errorMessage = error.message;
//         console.error('There was an error!', error);
//     }
// })


//Delete 

// this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
// .subscribe(() => this.status = 'Delete successful');

//delete with Error Handling

// this.http.delete('https://jsonplaceholder.typicode.com/invalid-url')
// .subscribe({
//     next: data => {
//         this.status = 'Delete successful';
//     },
//     error: error => {
//         this.errorMessage = error.message;
//         console.error('There was an error!', error);
//     }
// });



//Put  

// const body = { title: 'Angular PUT Request Example' };
// this.http.put<Article>('https://jsonplaceholder.typicode.com/posts/1', body)
//     .subscribe(data => this.postId = data.id);
// }

const body = { title: 'Angular PUT Request Example' };
this.http.put<any>('https://jsonplaceholder.typicode.com/invalid-url', body)
    .subscribe({
        next: data => {
            this.postId = data.id;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });
  }
  

}
interface Article {
  id: number;
  title: string;
}