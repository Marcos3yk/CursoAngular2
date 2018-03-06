import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }
  private backgroundColor: string;
  
  @HostBinding('style.background-color') get setColor(){
    //código extra;
    return this.backgroundColor;
  }

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
