import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnershipsPage } from './learnerships.page';

describe('LearnershipsPage', () => {
  let component: LearnershipsPage;
  let fixture: ComponentFixture<LearnershipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnershipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnershipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
