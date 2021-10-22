import { Component, Inject } from '@angular/core'
import { RootLayoutInputs } from './tokens';

import { UIService } from './ui.service';

@Component({
  selector: 'sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent {

  constructor(private uiService: UIService, @Inject(RootLayoutInputs) rootLayoutInputs: any) {
  }


  close(): void {
    this.uiService.closeSheet();
  }

}
