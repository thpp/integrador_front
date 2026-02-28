import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, signal } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('athena');
  isHandset$!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe('(max-width: 768px)').pipe(
      map((result) => result.matches),
      shareReplay(),
    );
  }

  ngOnInit(): void {}
}
