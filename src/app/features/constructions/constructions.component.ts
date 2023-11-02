import { Component } from '@angular/core';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';
import { ConstructionsService } from './services/constructions.service';
import { Construction } from 'src/app/models/construction.model';
import { ConstructionsLocalStorageService } from './services/constructions-local-storage.service';

@Component({
  selector: 'app-constructions',
  templateUrl: './constructions.component.html',
  styleUrls: ['./constructions.component.scss']
})
export class ConstructionsComponent  {

  constructor(private seederService: LocalStorageSeederService, private constructionsService: ConstructionsService){
    seederService.ensureDataSeeder();
  }

  columns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: Construction) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Construction) => `${element.name}`,
    },
    {
      columnDef: 'location',
      header: 'Location',
      cell: (element: Construction) => `${element.location}`,
    },
    {
      columnDef: 'client',
      header: 'Client',
      cell: (element: Construction) => `${element.client}`,
    },
    {
      columnDef: 'cost',
      header: 'Cost',
      cell: (element: Construction) => `${element.costEstimateId}`,
    },
    {
      columnDef: 'manager',
      header: 'Manager',
      cell: (element: Construction) => `${element.manager}`,
    },
    {
      columnDef: 'contact',
      header: 'Contact',
      cell: (element: Construction) => `${element.contactId}`,
    },
    {
      columnDef: 'desription',
      header: 'Description',
      cell: (element: Construction) => `${element.description}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Construction) => `${element.status}`,
    },
  ];

  dataSource: Construction[] = [];
  displayedColumns = this.columns.map(c => c.columnDef);

  getDataById() {
    const constructionId: number = 1;
    
    this.constructionsService.getById(constructionId).subscribe((construction: any) => {
      if (construction) {
        this.dataSource = [construction];
      } else {
        console.log('Nie znaleziono konstrukcji o podanym identyfikatorze.');
      }
    });
  }

  getAllData() {
    this.constructionsService.getAll().subscribe((constructions:Array<any>)=> {
      if (constructions) {
        this.dataSource = constructions;
      } else {
        console.log('Nie znaleziono konstrukcji o podanym identyfikatorze.');
      }
    })
  }
}
