import { TestBed, async } from '@angular/core/testing';
import { ObservableReplayComponent } from './observable-replay-demo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ObservableReplayComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ObservableReplayComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cancellable-http-demo'`, () => {
    const fixture = TestBed.createComponent(ObservableReplayComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual(':)');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ObservableReplayComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('cancellable-http-demo app is running!');
  });
});
