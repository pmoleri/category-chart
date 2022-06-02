import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MasterView2Component } from './master-view2.component';

describe('MasterView2Component', () => {
  let component: MasterView2Component;
  let fixture: ComponentFixture<MasterView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterView2Component ],
      imports: [ NoopAnimationsModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
