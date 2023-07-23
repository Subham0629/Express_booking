import { Component , OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.css']
})
export class SliderComponent {
  @ViewChild('slider') slider!: ElementRef;
  slideIndex = 0;
  slides: any[] = [
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1687328911358_webbannernpa.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1689834634562_sunburngoadesktop.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1689848664674_theflashprebookdesktop.jpg',
  ];

  
  prevSlide() {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }

  ngOnInit(): void {
    // Call the autoSlide function to start the automatic sliding
    this.autoSlide();
  }

  // Function to change the slide position automatically
  autoSlide(): void {
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.slides.length;
      this.updateSlidePosition();
    }, 3000); // Change slide every 3 seconds (3000ms)
  }

  // Function to update the slide position
  updateSlidePosition(): void {
    this.slider.nativeElement.style.transform = `translateX(-${this.slideIndex * 100}%)`;
  }
}
