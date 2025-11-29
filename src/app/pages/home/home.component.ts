import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  scrollEnabled = false;
  contactScrollEnabled = false;

  slideshows = [
    { images: ['/assets/connecties-1/connecties-1.png', '/assets/connecties-1/connecties-1a.jpg', '/assets/connecties-1/connecties-1b.jpg', '/assets/connecties-1/connecties-1c.jpg', '/assets/connecties-1/connecties-1d.jpg'], currentIndex: 0 },
    { images: ['/assets/connecties-2/connecties-2.png', '/assets/connecties-2/connecties-2a.jpg', '/assets/connecties-2/connecties-2b.jpg', '/assets/connecties-2/connecties-2c.jpg', '/assets/connecties-2/connecties-2d.jpg', '/assets/connecties-2/connecties-2e.jpg', '/assets/connecties-2/connecties-2f.jpg'], currentIndex: 0 },
    { images: ['/assets/connecties-3/connecties-3.png', '/assets/connecties-3/connecties-3a.jpg', '/assets/connecties-3/connecties-3b.jpg', '/assets/connecties-3/connecties-3c.jpg', '/assets/connecties-3/connecties-3d.jpg'], currentIndex: 0 }
  ];

  connectiesTitles = [
    'Surfkamp',
    'House of Waves',
    'AM.CLUB.RTM'
  ];

  connectiesDescriptions = [
    'Ik heb voor Enter the Wave 3,5 weken les gegeven in Noord-Spanje.',
    'Tijdens het event van House of Waves heb ik 2 super leuke yoga mogen verzorgen.',
    'Tijdens het event van AM.CLUB.RTM heb ik een leuke power yoga les gegeven.'
  ];

  ngOnInit() {
    const hasVisitedContent = localStorage.getItem('hasVisitedContent');
    const hasVisitedContactDetails = localStorage.getItem('hasVisitedContactDetails');
    const isAtTop = window.scrollY === 0;

    if (!hasVisitedContent && isAtTop) {
      document.body.style.overflow = 'hidden';
      this.scrollEnabled = false;
    } else {
      this.scrollEnabled = true;
    }

    this.contactScrollEnabled = !!hasVisitedContactDetails;
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

  setSlide(slideshowIndex: number, imageIndex: number) {
    this.slideshows[slideshowIndex].currentIndex = imageIndex;
  }

  scrollToContactDetails() {
    this.contactScrollEnabled = true;

    localStorage.setItem('hasVisitedContactDetails', 'true');

    setTimeout(() => {
      const contactDetailsSection = document.getElementById('contact-details');
      if (contactDetailsSection) {
        contactDetailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
}
