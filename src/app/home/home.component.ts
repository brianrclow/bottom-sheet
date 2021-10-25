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

  person: {name: string };

  constructor(private uiService: UIService) {
    this.person = { 
      name: "Brian"
    };
  }

  openSheet(args: EventData) {
    console.log("Open Sheet");
    console.log("name: ", this.person.name); // { name: "Brian" }
    this.uiService.showSheet(this.person);
  }
}
