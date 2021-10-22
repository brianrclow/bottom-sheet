import { Component, Inject } from '@angular/core'
import { EventData } from '@nativescript/core';
import { RootLayoutInputs } from '../sheet/tokens';
import { UIService } from '../sheet/ui.service';


@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // want to send name to bottom sheet as a demo
  
  name = "Brian";

  constructor(private uiService: UIService) {

  }

  openSheet(args: EventData) {
    console.log("Open Sheet");

    this.uiService.showSheet();
  }
}
