import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ConstructionsComponent } from './constructions.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ConstructionsModule } from './constructions.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConstructionsService } from './services/constructions.service';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { Construction } from './models/construction.model';
import { mockConstructions } from './mock-data/constructions';


describe('ConstructionsComponent', () => {
  let component: ConstructionsComponent;
  let fixture: ComponentFixture<ConstructionsComponent>;
  let dialog: MatDialog;
  let constructionsService: ConstructionsService;

  beforeEach(() => {

    const matDialogStub = {
      open: jasmine.createSpy('open').and.returnValue({
        afterClosed: jasmine.createSpy('afterClosed').and.returnValue(of(false))
      })
    };

    TestBed.configureTestingModule({
      declarations: [ConstructionsComponent],
      providers: [
        {provide: MatDialog, useValue: matDialogStub },
        {provide: MatSnackBar, useValue: {}},
        {provide: ConstructionsService, useClass: MockConstructionsService }
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
    constructionsService = TestBed.inject(ConstructionsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('constructions service should be injected', inject([ConstructionsService], (service: ConstructionsService) => {
    expect(service).toBeTruthy();
  }));

  it('should render a button with text "+ Dodaj"', () => {
    const btnElement = fixture.nativeElement.querySelector('button');
    expect(btnElement.textContent).toBe('+ Dodaj');
  });

  it('should initialize dataSource correctly', () => {
    expect(component.dataSource).toBeInstanceOf(MatTableDataSource);
  });

  it('should call getAllData method on ngOnInit', () => {
    spyOn(component, 'getAllData');
    component.ngOnInit();
    expect(component.getAllData).toHaveBeenCalled();
  });

  it('should call addNewConstruction method on button click', () => {
    spyOn(component, 'addNewConstruction');
    const addButton = fixture.debugElement.nativeElement.querySelector('button');
    addButton.click();
    fixture.detectChanges();
    expect(component.addNewConstruction).toHaveBeenCalled();
  });

  it('should fetch constructions data on ngOnInit', () => {
    const mockData: Construction[] = mockConstructions;

    spyOn(constructionsService.getAll(), 'subscribe').and.callThrough();
    
    component.ngOnInit();
    expect(component.dataSource.data).toEqual(mockData);
  });

  it('should apply filter to dataSource on keyup event in input', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
    const testData = 'test filter';

    inputElement.value = testData;
    inputElement.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();

    expect(component.dataSource.filter).toBe(testData);
  });

  it('should open edit dialog when ediElement is called', () => {
    const mockData: Construction[] = mockConstructions;
    const mockConstruction: Construction = mockConstructions[0];
    component.editElement(mockConstruction);
    expect(dialog.open).toHaveBeenCalledOnceWith(jasmine.anything(), jasmine.objectContaining({
      data: mockConstruction
    }));
  });
});

class MockConstructionsService {
  getAll() {
      return of(mockConstructions);
    }
  }
