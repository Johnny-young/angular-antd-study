import { Component, OnInit, Input } from "@angular/core"
import { USERNAME } from "../../services/localstorage/namespace"

@Component({
  selector: 'app-menu',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})

export class Menu implements OnInit {

  @Input() isCollapsed: boolean = false

  constructor() {
    
  }

  username: string

  getUserName() {
    this.username = JSON.parse(localStorage.getItem(USERNAME))
  }

  ngOnInit() {
    this.getUserName()
  }
}