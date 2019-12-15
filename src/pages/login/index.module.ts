import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { Login } from "./index"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  declarations: [
    Login
  ],
  exports: [
    Login
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})

export class LoginModule {}