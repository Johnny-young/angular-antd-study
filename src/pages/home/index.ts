import { Component, OnInit } from "@angular/core"

@Component({
  selector: 'app-home',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})

export class Home implements OnInit {
  isCollapsed: boolean = false
  
  constructor() {}

  ngOnInit() {}
}