import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private myapi:ApiService) { }




name=""
friendName=""
friendNickName=""
DescribeYourFriend=""

readValues=()=>{
  let data={
    "name":this.name,
    "friendName":this.friendName,
    "friendNickName":this.friendNickName,
    "DescribeYourFriend":this.DescribeYourFriend
  }
  console.log(data)
  this.myapi.addFriends(data).subscribe(
    (response)=>{
      console.log(response)
alert("success")
    }
  )
}


  ngOnInit(): void {
  }

}
