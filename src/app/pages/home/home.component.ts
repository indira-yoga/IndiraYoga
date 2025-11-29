import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  scrollEnabled = false;

  ngOnInit() {
    const hasVisitedContent = localStorage.getItem('hasVisitedContent');
    const isAtTop = window.scrollY === 0;

    if (!hasVisitedContent && isAtTop) {
      document.body.style.overflow = 'hidden';
      this.scrollEnabled = false;
    } else {
      this.scrollEnabled = true;
    }
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  scrollToContent() {
    this.scrollEnabled = true;
    document.body.style.overflow = '';

    localStorage.setItem('hasVisitedContent', 'true');

    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
}
