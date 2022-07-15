import { Component, OnInit } from '@angular/core';
import { Todo } from './../../model/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
Todys:any= Array(Todo);

  // Todys : Array<Todo> ;
//  Todys: Todo[]
namy: string =  ''
hour: any = ""
min: any = ""
calendar: any = ""
dateToBeDone: any = ""

  constructor() {}

  ngOnInit(): void {
    
   this.Todys = [
    //  {
    //    content: 'First todo',
    //    completed: false ,
    //    datey: new Date,
       
    //  },
    //  {
    //   content: 'Second todo',
    //   completed: false,
    //   datey: new Date,
    // }
   ]
   
  }

  toggleDone (id:Number) {
    this.Todys.map((v:any, i:any) =>{
      if(i==id){
        v.completed = !v.completed
        return v
      }

    })
  }
  deleteTodo(c:Number){
    this.Todys = this.Todys.filter((v:any, i:any)=>
    c !== i
    )
  }
  addTodo(){
    this.Todys.push({
      content:this.namy,
      completed: false,
      datey:new Date,
      hours: this.hour + ":",
      minutes: this.min,
      dateDone: this.dateToBeDone,
      calendars:this.calendar
    })
    console.log(this.Todys)
    this.namy = '',
    this.hour = '',
    this.min = '',
    this.dateToBeDone = ''
    this.calendar = ''

  }

}
