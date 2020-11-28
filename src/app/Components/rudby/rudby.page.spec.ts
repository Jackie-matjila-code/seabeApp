import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RudbyPage } from './rudby.page';

describe('RudbyPage', () => {
  let component: RudbyPage;
  let fixture: ComponentFixture<RudbyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudbyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RudbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
