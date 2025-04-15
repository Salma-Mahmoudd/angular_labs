import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  // @Input('appCustom') textColor: string = 'white';
  @Input('appCustom') onClickStyle: {
    color?: string;
    textAlign?: string;
  } = {
    color: 'white',
    textAlign: 'center',
  };

  constructor(private elemRef: ElementRef) {
    // console.log('ElementRef:', elemRef);
    const nativeElement = elemRef.nativeElement;

    nativeElement.style.fontSize = '20px';
    nativeElement.style.color = 'white';
    nativeElement.style.fontWeight = 'bold';
    nativeElement.style.padding = '10px 25px';
    nativeElement.style.marginBottom = '10px';
    nativeElement.style.textAlign = 'center';
    nativeElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    nativeElement.style.textTransform = 'uppercase';
    nativeElement.style.letterSpacing = '20px';
    nativeElement.style.backgroundImage =
      'linear-gradient(to right, #4facfe, #00f2fe)';
    nativeElement.style.cursor = 'pointer';
    nativeElement.style.transition = 'transform 0.2s';
  }

  @HostListener('click') onClick() {
    const nativeElement = this.elemRef.nativeElement;
    nativeElement.style.color = this.onClickStyle.color;
    nativeElement.style.textAlign = this.onClickStyle.textAlign;
  }

  @HostListener('mouseover') onMouseOver() {
    const nativeElement = this.elemRef.nativeElement;
    nativeElement.style.transform = 'scale(1.05)';
  }
  @HostListener('mouseout') onMouseOut() {
    const nativeElement = this.elemRef.nativeElement;
    nativeElement.style.transform = 'scale(1)';
  }
}
