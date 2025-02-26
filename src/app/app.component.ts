import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FallingHeartsComponent } from './falling-hearts/falling-hearts.component';
import { Meta, Title } from '@angular/platform-browser';
@Component({
    selector: 'app-root',
    standalone: true,
  imports: [CommonModule, RouterOutlet, FallingHeartsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'hanhnhung-wedding';

  constructor(private meta: Meta, private titleService: Title) {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.titleService.setTitle('Hạnh Nhung Wedding');

    this.meta.updateTag({ property: 'og:title', content: 'Hạnh Nhung Wedding' });
    this.meta.updateTag({ property: 'og:description', content: 'Minh Hạnh ❤️ Tuệ Nhung' });
    this.meta.updateTag({ property: 'og:image', content: 'https://hanhnhung-wedding.web.app/assets/img/hanhnhung2.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://hanhnhung-wedding.web.app/' });
  }
}
