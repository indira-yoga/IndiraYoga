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
    { images: ['/assets/connecties-1.png'], currentIndex: 0 },
    { images: ['/assets/connecties-2.png'], currentIndex: 0 },
    { images: ['/assets/connecties-3.png'], currentIndex: 0 }
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

    if (hasVisitedContactDetails) {
      this.contactScrollEnabled = true;
    } else {
      this.contactScrollEnabled = false;
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

  setSlide(slideshowIndex: number, imageIndex: number) {
    this.slideshows[slideshowIndex].currentIndex = imageIndex;
  }

  nextSlide(slideshowIndex: number) {
    const slideshow = this.slideshows[slideshowIndex];
    slideshow.currentIndex = (slideshow.currentIndex + 1) % slideshow.images.length;
  }

  prevSlide(slideshowIndex: number) {
    const slideshow = this.slideshows[slideshowIndex];
    slideshow.currentIndex = (slideshow.currentIndex - 1 + slideshow.images.length) % slideshow.images.length;
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
