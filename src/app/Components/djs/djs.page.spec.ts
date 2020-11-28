import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DjsPage } from './djs.page';

describe('DjsPage', () => {
  let component: DjsPage;
  let fixture: ComponentFixture<DjsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DjsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
