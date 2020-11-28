import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KgopePage } from './kgope.page';

describe('KgopePage', () => {
  let component: KgopePage;
  let fixture: ComponentFixture<KgopePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgopePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KgopePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
