import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MalontonePage } from './malontone.page';

describe('MalontonePage', () => {
  let component: MalontonePage;
  let fixture: ComponentFixture<MalontonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalontonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MalontonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
