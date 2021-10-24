import { Component, Inject, Input, OnInit, Optional } from '@angular/core'
import { RootLayoutInputs } from './tokens';

import { UIService } from './ui.service';

@Component({
  selector: 'sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent {

  constructor(private uiService: UIService, @Inject(RootLayoutInputs) @Optional() public person: any) {
  }

  ngOnInit() {
    console.log('sheet is open');
    console.log("name: ", this.person.name); // "Brain"
  }

  close(): void {
    this.uiService.closeSheet();
  }

}
