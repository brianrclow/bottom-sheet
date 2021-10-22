import { ComponentFactoryResolver, Injectable, Injector, NgZone, ApplicationRef, ComponentRef } from '@angular/core';
import { generateNativeScriptView } from '@nativescript/angular';
import { getRootLayout, View, CoreTypes } from '@nativescript/core';
import { SheetComponent } from "./sheet.component";
import { RootLayoutInputs } from './tokens';

export const DEFAULT_ANIMATION_CURVE = CoreTypes.AnimationCurve.cubicBezier(0.17, 0.89, 0.24, 1.11);

@Injectable({
  providedIn: 'root',
})
export class UIService {
  constructor(private zone: NgZone, private injector: Injector, private componentFactoryResolver: ComponentFactoryResolver, private applicationRef: ApplicationRef) { }

  private _sheetView;


  showSheet(name: string): void {
    this.getView(SheetComponent, name).then((v) => {
      this._sheetView = v;
      getRootLayout()
        .open(this._sheetView, {
          shadeCover: false
            ? null
            : {
              color: '#FFF',
              opacity: false ? 0 : 0.7,
              tapToClose: true,
            },
          animation: {
            enterFrom: {
              translateY: 500,
              duration: 300,
              curve: DEFAULT_ANIMATION_CURVE,
            },
            exitTo: {
              translateY: 500,
              duration: 300,
              curve: DEFAULT_ANIMATION_CURVE,
            },
          },
        })
        .then(() => {
        //   console.log('sheet is open');
        })
        .catch((err) => {
          console.log('error opening', err);
        });
    });
  }

  bringSheetToFront(): Promise<void> {
    return getRootLayout().bringToFront(this._sheetView);
  }

  closeSheet(): void {
    if (this._sheetView) {
      getRootLayout()
        .close(this._sheetView)
        .then(() => {
          this.destroyNgRef(this._sheetView);
          console.log('closed');
        })
        .catch((err) => {
          console.log('error closing', err);
        });
    }
  }


  closeAll(): void {
    getRootLayout().closeAll();
  }

  destroyNgRef(view: View) {
    if ((<any>view).__ngRef) {
      ((<any>view).__ngRef as ComponentRef<View>).destroy();
    }
  }

  getView(component, input?: any): Promise<View> {
    return new Promise((resolve) => {
      const injector = Injector.create({
        providers: [{ provide: RootLayoutInputs, useValue: input }],
        parent: this.injector,
      });
      const cmpRef = generateNativeScriptView(component, {
        injector,
      });
      (<any>cmpRef.firstNativeLikeView).__ngRef = cmpRef.ref;
      resolve(cmpRef.firstNativeLikeView);
    });
  }
}