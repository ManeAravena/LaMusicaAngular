import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosArtistasComponent } from './nuestros-artistas.component';

describe('NuestrosArtistasComponent', () => {
  let component: NuestrosArtistasComponent;
  let fixture: ComponentFixture<NuestrosArtistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrosArtistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
