import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { NzLayoutModule } from "ng-zorro-antd/layout"

import { Home } from "./index"
import { MenuModule,  } from "../../components/menu/index.module"


@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    MenuModule
  ]
})

export class HomeModule {}