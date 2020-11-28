import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MadiboanePage } from './madiboane.page';

describe('MadiboanePage', () => {
  let component: MadiboanePage;
  let fixture: ComponentFixture<MadiboanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadiboanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MadiboanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
