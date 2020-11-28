import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeabePage } from './seabe.page';

describe('SeabePage', () => {
  let component: SeabePage;
  let fixture: ComponentFixture<SeabePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeabePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeabePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
