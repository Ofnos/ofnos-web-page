import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChildren('carrouseloption') carrouselOptions: QueryList<ElementRef> = new QueryList();

  @HostListener('window:scroll', ['$event'])
  assignCarrouselOption() {
    if (!window.matchMedia('(max-width: 1090px)').matches) return;

    const windowCenter = window.innerHeight / 2;
    let centeredOption = { index: 1, center: 1000 };
    // Get the option that is closest to the screen center
    this.carrouselOptions.forEach((option: ElementRef, i: number) => {
      const rect = option.nativeElement.getBoundingClientRect();
      const optionCenter = rect.top + (rect.height / 2);
      const relativeCenter = Math.abs(windowCenter - optionCenter);
      if (centeredOption.center > relativeCenter) {
        centeredOption = { index: i, center: relativeCenter };
      }
    });
    this.carrouselOptions.forEach((option: ElementRef, i: number) => {
      option.nativeElement.querySelector('input').checked = (centeredOption.index === i);
    });
  }


}
