import { Component, OnInit } from '@angular/core';
import { DataService } from '../ApiService/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  Allcontact:any=[]
  searchkey:string=''

  constructor(private api:DataService){

  }
  ngOnInit(): void {
    this.api.allContacts()
    .subscribe((data:any)=>{
      
      this.Allcontact=data.users
      console.log(this.Allcontact);
      
      

      

      
    })
    
  }
  

  

}
