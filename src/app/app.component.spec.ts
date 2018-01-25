// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
// import { AppComponent } from './app.component';
//
// describe('AppComponent', () => {
//
//   let comp: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [AppComponent]
//     })
//       .compileComponents();
//   }));
//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     comp = fixture.componentInstance;
//     de = fixture.debugElement.query(By.css('h2'));
//     el = de.nativeElement;
//   });
//
//   it('1st test', () => {
//     expect(el.textContent).toEqual('Gym of Hope');
//   });
//   it('2nd test', () => {
//
//   });
//   it('3rd test', () => {
//
//   });
// });



import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By} from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent Hope Boxing Gym TestSuite: ', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AppComponent);
  //   comp = fixture.componentInstance;
  //   de = fixture.debugElement.query(By.css('h1'));
  //   el = de.nativeElement;
  // });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hope Boxing Gym');
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector('h2').textContent).toContain('Gym of Hope');
  }));
});
