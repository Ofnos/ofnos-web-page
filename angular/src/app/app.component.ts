import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ofnos-web-page';

  constructor(private translocoService: TranslocoService) {
    const language = navigator.language.split('-')[0];
    console.log(language);
    if (['en', 'es'].includes(language)) {
      translocoService.setActiveLang(language);
    } else {
      translocoService.setActiveLang('en');
    }
  }
}
