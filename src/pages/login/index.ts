import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { LocalStorageService } from "../../services/localstorage"
import { USERNAME, INIT_FLAG, START_USEING_DATE } from "../../services/localstorage/namespace"
import { getTodayTime } from "../../utils/time"

@Component({
  selector: 'app-login',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})

export class Login implements OnInit {
  constructor(
    private store: LocalStorageService,
    private router: Router
  ) {}

  username: string

  ngOnInit() {
    // console.log('login load')
  }

  login(name: string) {
    this.store.set(USERNAME, name)
    this.store.set(START_USEING_DATE, getTodayTime())
    this.store.set(INIT_FLAG, true)

    this.router.navigateByUrl('home')
  }
}