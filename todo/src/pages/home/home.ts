import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public toDos = [];
 public reorderIsEnabled = false;
  constructor(public navCtrl: NavController, private alertCntrl: AlertController) {

  }

  addTodoAlert() {
    let addTodoAlert = this.alertCntrl.create({
      title: "Add Todo",
      message: "Add your Todo",
      inputs: [
        {
          name: "todoName",
          placeholder: "Todo Name"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Add Todo",
          handler: data => {
            let todoName;
            todoName = data.todoName;
            this.toDos.push(todoName);
          }
        }
      ]
    });
    addTodoAlert.present();
  }

  removeTodo(todo:string) {
    let index:number = this.toDos.indexOf(todo);
    if(index !== -1) {
      this.toDos.splice(index, 1);
    }
  }

  toggleReorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  reorderItems($event) {
    reorderArray(this.toDos, $event);
  }
}
