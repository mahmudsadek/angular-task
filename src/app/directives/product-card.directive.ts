import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective {

  @Input("appProductCard") bgColor:string = '#EEE';

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.borderRadius = "20px";
    this.el.nativeElement.style.boxShadow = "3px 3px 10px gray";
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.BoxShadow("6px 6px 17px gray");
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.BoxShadow("3px 3px 10px gray");
  }
  private BoxShadow(value: string) {
    this.el.nativeElement.style.boxShadow = value;
  }

}
