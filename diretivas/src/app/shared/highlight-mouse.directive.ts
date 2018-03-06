import { Directive, HostBinding , HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );  
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );  
    this.backgroundColor = 'white';
  }
  private backgroundColor: string;
  //@HostBinding('style.background-color') backgroundColor: string;
  @HostBinding('style.background-color') get setColor(){
    //código extra;
    return this.backgroundColor;
  }

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer
  ) { }

}
