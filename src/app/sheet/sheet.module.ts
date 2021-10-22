import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { SheetComponent } from './sheet.component'

@NgModule({
  imports: [NativeScriptCommonModule],
  declarations: [SheetComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SheetModule {}
