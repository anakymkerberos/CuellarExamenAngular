import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter')
  public onmouseenter() {
    this.element.nativeElement.style.backgroundColor = 'green';

  }

  @HostListener('mouseleave')
  public onmouseleave() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }

}
