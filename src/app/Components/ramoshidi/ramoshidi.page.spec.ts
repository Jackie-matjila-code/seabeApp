import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RamoshidiPage } from './ramoshidi.page';

describe('RamoshidiPage', () => {
  let component: RamoshidiPage;
  let fixture: ComponentFixture<RamoshidiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamoshidiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RamoshidiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
