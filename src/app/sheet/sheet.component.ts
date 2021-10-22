import { Component, Inject, Input, OnInit, Optional } from '@angular/core'
import { RootLayoutInputs } from './tokens';

import { UIService } from './ui.service';

@Component({
  selector: 'sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent {

  @Input() name: string;

  constructor(private uiService: UIService, @Inject(RootLayoutInputs) @Optional() private input: any) {
  }

  ngOnInit() {
    if (this.input?.name) {
      this.name = this.input.name;
    }
    console.log('sheet is open');
    console.log("name: ", this.name); // undefined?
  }

  close(): void {
    this.uiService.closeSheet();
  }

}
