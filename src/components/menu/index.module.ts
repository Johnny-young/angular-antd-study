import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { NgZorroAntdModule } from "ng-zorro-antd"

import { Menu } from "./index"

@NgModule({
  declarations: [
    Menu
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    Menu,
  ]
})

export class MenuModule {}
