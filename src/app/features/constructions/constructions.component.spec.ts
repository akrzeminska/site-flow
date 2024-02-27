import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ConstructionsComponent } from './constructions.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConstructionsModule } from './constructions.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



describe('ConstructionsComponent', () => {
  let component: ConstructionsComponent;
  let fixture: ComponentFixture<ConstructionsComponent>;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructionsComponent],
      providers: [
        {provide: MatDialog, useValue: {}},
        {provide: MatSnackBar, useValue: {}},
      ],
      imports: [
        MatFormFieldModule,
        MatPaginatorModule,
        ConstructionsModule,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(ConstructionsComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addNewConstruction method on button click', () => {
    spyOn(component, 'addNewConstruction'); //zmokowałam metodę add...
    const addButton = fixture.debugElement.nativeElement.querySelector('button'); //znajduję przycisk
    addButton.click(); //klikam [rzycisk]
    fixture.detectChanges(); // aktualizuję widok po kliknięciu
    expect(component.addNewConstruction).toHaveBeenCalled(); //sprawzam czy metoda została wykonana
  })
});
