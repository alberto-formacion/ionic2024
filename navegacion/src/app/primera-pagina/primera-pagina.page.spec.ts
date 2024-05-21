import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeraPaginaPage } from './primera-pagina.page';

describe('PrimeraPaginaPage', () => {
  let component: PrimeraPaginaPage;
  let fixture: ComponentFixture<PrimeraPaginaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
