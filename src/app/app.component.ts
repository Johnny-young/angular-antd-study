import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { LocalStorageService } from "../services/localstorage"
import { USERNAME } from "../services/localstorage/namespace"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-antd';
  constructor(
    private store: LocalStorageService,
    private router: Router
  ) {}

  checkIsLogin() {
    let data = this.store.get(USERNAME)

    if(!data) {
      // 未登录
      this.router.navigateByUrl('/login')
    }else {
      // 已登录
      this.router.navigateByUrl('/home')
    }
  }

  ngOnInit() {
    this.checkIsLogin()
  }
}
