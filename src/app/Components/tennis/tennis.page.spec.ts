import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TennisPage } from './tennis.page';

describe('TennisPage', () => {
  let component: TennisPage;
  let fixture: ComponentFixture<TennisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TennisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
