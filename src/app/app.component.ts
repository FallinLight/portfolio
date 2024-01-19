import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgTiltModule, NgTiltDirective, NgTiltParallaxDirective, NgTiltMousePositions, NgTiltValues } from '@geometricpanda/angular-tilt';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor(private el: ElementRef){ }

  ngOnInit(): void
  {
    VanillaTilt.init(
        this.el.nativeElement.querySelectorAll(".box"), {max: 1, speed: 100, scale: 1.1 }
    );

    VanillaTilt.init(
      this.el.nativeElement.querySelectorAll(".video"), {max: 1, speed: 150, scale: 1.05 }
    );
  }


}
