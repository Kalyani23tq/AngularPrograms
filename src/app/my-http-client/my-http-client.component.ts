import { Component, OnInit,Input } from '@angular/core';
import { CrudServService } from '../crud-serv.service';

@Component({
  selector: 'app-my-http-client',
  templateUrl: './my-http-client.component.html',
  styleUrls: ['./my-http-client.component.css']
})
export class MyHttpClientComponent implements OnInit {
users:any=[];
allusers:any[]=[];
@Input() userObj = { id: '', email: '', first_name: 0 };
  constructor(public crudService: CrudServService) { }

  ngOnInit(): void {

   // this.crudService.showTasks();
    console.log(this.crudService);
    this.fetchUser()
    
  }
  fetchUser()
  {
    return this.crudService.getUsers().subscribe((res: {}) => {
      this.users = res;

      console.log(this.users);
      
    })

  }

  addUser(data: any) {
    this.crudService.addUser(this.userObj).subscribe((data: {}) => {
      //this.router.navigate(['/list'])
      this.fetchUser()
    })
  }

  showData()
  {
    console.log("hiiiiiiiiii"+this.allusers)
    //this.allusers=this.users;
  }
  delete(id:any) {
    if (window.confirm('Really?')){
      this.crudService.deleteUser(id).subscribe(res => {
        this.fetchUser()
      })
    }
  }




}
