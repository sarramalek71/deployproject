import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StepsComponent } from './steps.component';

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsComponent , HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
