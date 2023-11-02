import { Component, OnInit } from '@angular/core';
import { LocalStorageSeederService } from 'src/app/shared/services/local-storage-seeder.service';
import { ConstructionsLocalStorageService } from './services/constructions-local-storage.service';


@Component({
  selector: 'app-constructions',
  templateUrl: './constructions.component.html',
  styleUrls: ['./constructions.component.scss']
})
export class ConstructionsComponent {

  constructor(private seederService: LocalStorageSeederService, constructionsLocalStorageService: ConstructionsLocalStorageService){
    seederService.ensureDataSeeder();
  }
}
