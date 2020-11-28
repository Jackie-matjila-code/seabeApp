import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MmadimoPage } from './mmadimo.page';

describe('MmadimoPage', () => {
  let component: MmadimoPage;
  let fixture: ComponentFixture<MmadimoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmadimoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MmadimoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
