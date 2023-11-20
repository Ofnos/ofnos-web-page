import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('hero', { read: ElementRef }) heroElement: ElementRef | undefined;

  ngAfterViewInit(): void {
    window.scroll(0, 2)
  }

  @HostListener('window:scroll', ['$event'])
  showElements() {
    const reveals = document.querySelectorAll('.fade-in');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  }
}
