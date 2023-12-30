import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageSeederService {
  private localStorageKey = 'construction';
  private constructionSeed = [
    {
      "id": 1,
      "name": "Green House",
      "location": "Romanowicza Street, Cracow",
      "client": "IMS",
      "costEstimateId": 1,
      "manager": "John Doe",
      "contactId": [1],
      "description": "Example Construction Description",
      "taskId": [1],
      "status": "In progress"
    },
    {
      "id": 2,
      "name": "Office Building",
      "location": "Main Street, Los Angeles",
      "client": "ABC Inc.",
      "costEstimateId": 2,
      "manager": "Sarah Johnson",
      "contactId": [2],
      "description": "New office building construction.",
      "taskId": [2],
      "status": "Planning"
    },
    
    {
      "id": 3,
      "name": "Apartment Complex",
      "location": "Oak Avenue, New York",
      "client": "XYZ Developers",
      "costEstimateId": 3,
      "manager": "Michael Brown",
      "contactId": [3],
      "taskId": [3],
      "description": "Construction of a luxury apartment complex.",
      "status": "In progress"
    },
    
    {
      "id": 4,
      "name": "Hospital Renovation",
      "location": "Maple Street, Chicago",
      "client": "City Healthcare",
      "costEstimateId": 4,
      "manager": "Emily Davis",
      "contactId": [4],
      "description": "Renovation of the city hospital's facilities.",
      "taskId": [4],
      "status": "Completed"
    },
  ];

  private contactSeed = [
    {
      "id": 1,
      "name": "John",
      "surname": "Doe",
      "company": "IMS Budownictwo",
      "phone": 123456789,
      "email": "john.doe@example.com",
      "role": "Project Manager",
      "description": "Główna osoba kontaktowa dla projektu.",
      "taskId": [1,3,4],
      "constructionId": [1,3],
      "category": "Zarządzanie"
    },
    {
      "id": 2,
      "name": "Alice",
      "surname": "Johnson",
      "company": "GWK System",
      "phone": 555123456,
      "email": "alice.j@example.com",
      "role": "Project Coordinator",
      "description": "Kluczowy kontakt do koordynacji projektu.",
      "taskId": [1,3,4],
      "constructionId": [1,3],
      "category": "Projektowanie"
    },
    {
      "id": 3,
      "name": "Michael",
      "surname": "Brown",
      "company": "Max Development",
      "phone": 987654321,
      "email": "michael.b@example.com",
      "role": "Project Director",
      "description": "Dyrektor nadzorujący projekty budowlane.",
      "taskId": [1,3,4],
      "constructionId": [1,3],
      "category": "Projektowanie"
    },
    {
      "id": 4,
      "name": "Emily",
      "surname": "Davis",
      "company": "Garden Residence",
      "phone": 333111999,
      "email": "emily.d@example.com",
      "role": "Project Manager",
      "description": "Odpowiedzialna za projekt renowacji szpitala.",
      "taskId": [1,3,4],
      "constructionId": [1,3],
      "category": "Wykonawstwo"
    }
  ];
  
  private costEstimateSeed = [
    {
      "id": 1,
      "name": 'K1/03/2021 "Osiedle pod Dębami"',
      "author": 'Janusz Brzęczyszczykiewicz',
      "description": 'Roboty budowlane w zakresie stanu surowego otwartego',
      "client": 'IMS Budownictwo Sp. z o.o.',
      "location": 'ul. Zabłocie 13, 30-702 Kraków',
      "contractNumber": '273/2021-UPL',
      "costEstimateValue": 281595,
      "constructionId": 1,
      "contactId": [1],
      "allWorks": [
        {
         "Lp": "0.",
         "Nazwa": "PRACE PRZYGOTOWAWCZE",
         "Wartość": 27500
        },
        {
         "Lp": "0.1",
         "Nazwa": "Drogi i place tymczasowe",
         "Ilość": 1,
         "J.m.": "kpl",
         "Cena j.m. (M+R)": 7000,
         "Wartość": 7000
        },
        {
         "Lp": "0.2",
         "Nazwa": "Ogrodzenie i ochrona terenu budowy",
         "Ilość": 1,
         "J.m.": "kpl",
         "Cena j.m. (M+R)": 5200,
         "Wartość": 5200
        },
        {
         "Lp": "0.3",
         "Nazwa": "Zapewnienie i koszt mediów do celów budowy",
         "Ilość": 12,
         "J.m.": "msc.",
         "Cena j.m. (M+R)": 625,
         "Wartość": 7500
        },
        {
         "Lp": "0.4",
         "Nazwa": "Zaplecze budowy - kontener socjalny, kontener magazynowy, wc",
         "Ilość": 12,
         "J.m.": "msc.",
         "Cena j.m. (M+R)": 350,
         "Wartość": 4200
        },
        {
         "Lp": "0.5",
         "Nazwa": "Wywóz odpadów budowlanych",
         "Ilość": 12,
         "J.m.": "msc.",
         "Cena j.m. (M+R)": 300,
         "Wartość": 3600
        },
        {
         "Lp": "1.",
         "Nazwa": "  ROBOTY ZIEMNE",
         "Wartość": 19176
        },
        {
         "Lp": "1.1",
         "Nazwa": "Wykopy mechaniczne na odkład - zebranie warstwy humusu gr. 30cm - założono pozostawienie ziemi z wykopów celem zagospodarowania na terenie inwestycji",
         "Ilość": 40.2,
         "J.m.": "m3",
         "Cena j.m. (M+R)": 40,
         "Wartość": 1608
        },
        {
         "Lp": "1.2",
         "Nazwa": "Wykop mechaniczny pod fundamenty - założono pozostawienie ziemi z wykopów w rejonie inwestycji celem zagospodarowania",
         "Ilość": 234.8,
         "J.m.": "m3",
         "Cena j.m. (M+R)": 40,
         "Wartość": 9392
        },
        {
         "Lp": "1.3",
         "Nazwa": "Obsypka fundamentów od wewnątrz - piasek zagęszczony mechanicznie",
         "Ilość": 92,
         "J.m.": "m3",
         "Cena j.m. (M+R)": 70,
         "Wartość": 6440
        },
        {
         "Lp": "1.4",
         "Nazwa": "Obsypka fundamentów z zewnątrz - ziemia z wykopów",
         "Ilość": 24.8,
         "J.m.": "m3",
         "Cena j.m. (M+R)": 70,
         "Wartość": 1736
        },
        {
         "Lp": "2.",
         "Nazwa": "  FUNDAMENTY, IZOLACJE I ROBOTY ŻELBETOWE PODZIEMIA",
         "Wartość": 33018.75
        },
        {
         "Lp": "2.1",
         "Nazwa": "Podkłady betonowe gr. 10cm pod ławy i stopy fundamentowe\nBeton B10 (C8\/10)",
         "Ilość": 6.5,
         "J.m.": "m3",
         "Cena j.m. (M+R)": 310,
         "Wartość": 2015
        },
        {
         "Lp": "2.2",
         "Nazwa": "Ławy fundamentowe żelbetowe 70x30cm, 80x30cm, 120x30cm\nBeton konstrukcyjny B25 (C20\/25)",
         "Ilość": 14.5,
         "J.m.": "m3",
         "Cena j.m. (M+R)": 290,
         "Wartość": 4205
        },
        {
         "Lp": "2.3",
         "Nazwa": "Ławy fundamentowe żelbetowe 70x30cm, 80x30cm, 120x30cm\nStal zbrojeniowa + ułożenie",
         "Ilość": 553,
         "J.m.": "kg",
         "Cena j.m. (M+R)": 6.5,
         "Wartość": 3594.5
        },
        {
         "Lp": "2.4",
         "Nazwa": "Trzpienie i wieńce fundamentowe żelbetowe\nBeton konstrukcyjny B25 (C20\/25)",
         "Ilość": 3.1,
         "J.m.": "m3",
         "Cena j.m. (M+R)": 290,
         "Wartość": 899
        },
        {
         "Lp": "2.5",
         "Nazwa": "Trzpienie i wieńce fundamentowe żelbetowe\nStal zbrojeniowa + ułożenie",
         "Ilość": 338.5,
         "J.m.": "kg",
         "Cena j.m. (M+R)": 6.5,
         "Wartość": 2200.25
        },
        {
         "Lp": "2.6",
         "Nazwa": "Ściany fundamentowe z bloczków betonowych\nBloczki na zaprawie cementowej",
         "Ilość": 35.9,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 130,
         "Wartość": 4667
        },
        {
         "Lp": "2.7",
         "Nazwa": "Izolacja przeciwwilgociowa pozioma fundamentów\n2x papa termozgrzewalna",
         "Ilość": 48.2,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 70,
         "Wartość": 3374
        },
        {
         "Lp": "2.8",
         "Nazwa": "Izolacja przeciwwilgociowa pionowa ścian fundamentowych np. membrana wodoszczelna typu średniego",
         "Ilość": 139.2,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 70,
         "Wartość": 9744
        },
        {
         "Lp": "2.9",
         "Nazwa": "Izolacja termiczna pionowa ścian fundamentowych z EPS hydro gr. 15cm + folia kubełkowa",
         "Ilość": 35,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 60,
         "Wartość": 2100
        },
        {
         "Lp": "2.10",
         "Nazwa": "Wypełnienie dylatacji między budynkami do poz. 0,00",
         "Ilość": 5.5,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 40,
         "Wartość": 220
        },
        {
         "Lp": "3.",
         "Nazwa": "  STROPY i ROBOTY ŻELBETOWE NADZIEMIA",
         "Wartość": 87334.84999999999
        },
        {
         "Lp": "3.1",
         "Nazwa": "Płyta żelbetowa stropu nad parterem gr. 18cm\nBeton konstrukcyjny B25 (C20\/25)",
         "Ilość": 70.6,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 220,
         "Wartość": 15531.999999999998
        },
        {
         "Lp": "3.2",
         "Nazwa": "Płyta żelbetowa stropu nad parterem gr. 18cm\nStal zbrojeniowa + ułożenie",
         "Ilość": 1372.9,
         "J.m.": "kg",
         "Cena j.m. (M+R)": 6.5,
         "Wartość": 8923.85
        },
        {
         "Lp": "3.1",
         "Nazwa": "Płyta żelbetowa stropodachu gr. 16cm\nBeton konstrukcyjny B25 (C20\/25)",
         "Ilość": 84.1,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 330,
         "Wartość": 27752.999999999996
        },
        {
         "Lp": "3.2",
         "Nazwa": "Płyta żelbetowa stropodachu gr. 16cm\nStal zbrojeniowa + ułożenie",
         "Ilość": 1453.7,
         "J.m.": "kg",
         "Cena j.m. (M+R)": 6.5,
         "Wartość": 9449.050000000001
        },
        {
         "Lp": "3.3",
         "Nazwa": "Elementy żelbetowe - podciągi, słupy, wieńce\nBeton konstrukcyjny B25 (C20\/25)",
         "Ilość": 11.8,
         "J.m.": "m3",
         "Cena j.m. (M+R)": 290,
         "Wartość": 3422
        },
        {
         "Lp": "3.4",
         "Nazwa": "Elementy żelbetowe - podciągi, słupy, wieńce\nStal zbrojeniowa + ułożenie",
         "Ilość": 1806.2,
         "J.m.": "kg",
         "Cena j.m. (M+R)": 6.5,
         "Wartość": 11740.300000000001
        },
        {
         "Lp": "3.5",
         "Nazwa": "Schody żelbetowe\nBeton konstrukcyjny B25 (C20\/25)",
         "Ilość": 9.4,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 900,
         "Wartość": 8460
        },
        {
         "Lp": "3.6",
         "Nazwa": "Schody żelbetowe\nStal zbrojeniowa + ułożenie",
         "Ilość": 316.1,
         "J.m.": "kg",
         "Cena j.m. (M+R)": 6.5,
         "Wartość": 2054.65
        },
        {
         "Lp": "4.",
         "Nazwa": "  ROBOTY MUROWE",
         "Wartość": 64509
        },
        {
         "Lp": "4.1",
         "Nazwa": "Roboty murowe ścian konstrukcyjnych zewnętrznych\nBloczki silikatowe gr. 24cm na zaprawie cem.-wap.",
         "Ilość": 193.9,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 160,
         "Wartość": 31024
        },
        {
         "Lp": "4.2",
         "Nazwa": "Roboty murowe ścian konstrukcyjnych wewnętrznych\nBloczki silikatowe gr. 24cm na zaprawie cem.-wap.",
         "Ilość": 82,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 160,
         "Wartość": 13120
        },
        {
         "Lp": "4.3",
         "Nazwa": "Roboty murowe ścian działowych\nBloczki silikatowe gr. 12cm na zaprawie cem.-wap. ",
         "Ilość": 54.9,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 115,
         "Wartość": 6313.5
        },
        {
         "Lp": "4.4",
         "Nazwa": "Roboty murowe ścian działowych\nBloczki silikatowe gr. 8cm na zaprawie cem.-wap. ",
         "Ilość": 68,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 110,
         "Wartość": 7480
        },
        {
         "Lp": "4.5",
         "Nazwa": "Nadproża prefabrykowane typu L-19N",
         "Ilość": 25.8,
         "J.m.": "mb",
         "Cena j.m. (M+R)": 150,
         "Wartość": 3870
        },
        {
         "Lp": "4.6",
         "Nazwa": "Przewody kominowe: powietrzno-spalinowe wraz z termoizolacją i okładziną kominów ponad połać dachu + czapka kominowa",
         "Ilość": 2,
         "J.m.": "kpl",
         "Cena j.m. (M+R)": 300,
         "Wartość": 600
        },
        {
         "Lp": "4.7",
         "Nazwa": "Wypełnienie dylatacji między budynkami od poz. 0,00",
         "Ilość": 46.7,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 45,
         "Wartość": 2101.5
        },
        {
         "Lp": "5.",
         "Nazwa": "  STROPODACH",
         "Wartość": 50056.8
        },
        {
         "Lp": "5.1",
         "Nazwa": "Papa paroizolacyjna",
         "Ilość": 84.1,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 70,
         "Wartość": 5887
        },
        {
         "Lp": "5.2",
         "Nazwa": "Kliny spadkowe ze styropianu EPS100 3%",
         "Ilość": 84.1,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 36,
         "Wartość": 3027.6
        },
        {
         "Lp": "5.3",
         "Nazwa": "Termoizolacja ze styropianu EPS100 gr. 25cm",
         "Ilość": 84.1,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 96,
         "Wartość": 8073.599999999999
        },
        {
         "Lp": "5.4",
         "Nazwa": "2x papa termozgrzewalna",
         "Ilość": 84.1,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 120,
         "Wartość": 10092
        },
        {
         "Lp": "5.5",
         "Nazwa": "2x papa termozgrzewalna - wywinięcia na attyki i cokoły kominów, wyłazów",
         "Ilość": 37.1,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 130,
         "Wartość": 4823
        },
        {
         "Lp": "5.6",
         "Nazwa": "Termoizolacja pionowa attyki i cokołu kominów, wyłazów dachowych ze styropianu EPS gr. 10cm",
         "Ilość": 25.8,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 34,
         "Wartość": 877.2
        },
        {
         "Lp": "5.7",
         "Nazwa": "Termoizolacja pozioma attyki ze styropianu EPS gr. 5cm",
         "Ilość": 11.3,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 28,
         "Wartość": 316.40000000000003
        },
        {
         "Lp": "5.8",
         "Nazwa": "Płyta OSB gr. 18mm pod obróbkę blacharska attyki",
         "Ilość": 24,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 90,
         "Wartość": 2160
        },
        {
         "Lp": "5.9",
         "Nazwa": "Obróbka blacharska attyki z blachy stalowej powlekanej gr. 0.5mm w kolorze RAL standard",
         "Ilość": 36,
         "J.m.": "m2",
         "Cena j.m. (M+R)": 150,
         "Wartość": 5400
        },
        {
         "Lp": "5.10",
         "Nazwa": "Czapki kominów",
         "Ilość": 2,
         "J.m.": "kpl",
         "Cena j.m. (M+R)": 500,
         "Wartość": 1000
        },
        {
         "Lp": "5.11",
         "Nazwa": "Wpusty dachowe podgrzewane grawitacyjne",
         "Ilość": 2,
         "J.m.": "szt.",
         "Cena j.m. (M+R)": 1200,
         "Wartość": 2400
        },
        {
         "Lp": "5.12",
         "Nazwa": "Przelewy awaryjne",
         "Ilość": 2,
         "J.m.": "szt.",
         "Cena j.m. (M+R)": 500,
         "Wartość": 1000
        },
        {
         "Lp": "5.13",
         "Nazwa": "Wyłaz dachowy",
         "Ilość": 2,
         "J.m.": "szt.",
         "Cena j.m. (M+R)": 2500,
         "Wartość": 5000
        },
        {
         "J.m.": "RAZEM",
         "Wartość": 281595
        }
       ]
    },
    {
      "id": 2,
      "name": 'B2/05/2022 "Apartamenty Nad Jeziorem"',
      "author": 'Alicja Kowalska',
      "description": 'Budowa luksusowych apartamentów nad jeziorem',
      "client": 'Firma Deweloperska XYZ Sp. z o.o.',
      "location": 'ul. Nadbrzeżna 7, 50-200 Wrocław',
      "contractNumber": '109/2022-XYZ',
      "costEstimateValue": 3000000,
      "constructionId": 2,
      "contactId": [2],
      "allWorks": []
    },
    {
      "id": 3,
      "name": 'C3/07/2023 "Nowoczesne Biurowce Plaza"',
      "author": 'Marcin Nowak',
      "description": 'Budowa nowoczesnych biurowców w centrum miasta',
      "client": 'Plaza Development Sp. z o.o.',
      "location": 'Plac Wolności 5, 00-001 Warszawa',
      "contractNumber": '512/2023-PLD',
      "costEstimateValue": 5000000,
      "constructionId": 3,
      "contactId": [3],
      "allWorks": []
    },
    {
      "id": 4,
      "name": 'D4/09/2024 "Parkowa Rezydencja"',
      "author": 'Magdalena Zielińska',
      "description": 'Realizacja ekskluzywnej parkowej rezydencji',
      "client": 'Firma Inwestycyjna ABC Sp. z o.o.',
      "location": 'ul. Parkowa 10, 80-300 Gdańsk',
      "contractNumber": '701/2024-ABC',
      "costEstimateValue": 8000000,
      "constructionId": 4,
      "contactId": [4],
      "allWorks": []
    }
    
  ];

  private taskSeed = [
    {
      "id": 1,
      "name": "Task 1",
      "description": "Example task description",
      "scope": "Project scope",
      "constructionId": [1],
      "responsiblePerson": "Alice Smith",
      "contactId": 1,
      "completionDate": "2023-11-30",
      "cost": 2000
    },
    {
      "id": 2,
      "name": "Task 2",
      "description": "Design office building layout",
      "scope": "Architectural design",
      "constructionId": [2],
      "responsiblePerson": "Ella White",
      "contactId": 2,
      "completionDate": "2023-12-15",
      "cost": 3500
    },
    
    {
      "id": 3,
      "name": "Task 3",
      "description": "Apartment complex site survey",
      "scope": "Site analysis and survey",
      "constructionId": [3],
      "responsiblePerson": "David Clark",
      "contactId": 3,
      "completionDate": "2024-01-10",
      "cost": 5000
    },
    
    {
      "id": 4,
      "name": "Task 4",
      "description": "Hospital renovation electrical work",
      "scope": "Electrical installation",
      "constructionId": [4],
      "responsiblePerson": "Olivia Turner",
      "contactId": 4,
      "completionDate": "2023-12-30",
      "cost": 4500
    }
  ];

  constructor() { }

  ensureDataSeeder(): void {
    const dataToStore: any = {};

    this.constructionSeed.forEach((construction, index) => {
      dataToStore[`construction_${index + 1}`] = JSON.stringify(construction);
    });

    this.contactSeed.forEach((contact, index) => {
      dataToStore[`contact_${index + 1}`] = JSON.stringify(contact);
    });

    this.costEstimateSeed.forEach((costEstimate, index) => {
      dataToStore[`costEstimate_${index + 1}`] = JSON.stringify(costEstimate);
    });

    this.taskSeed.forEach((task, index) => {
      dataToStore[`task_${index + 1}`] = JSON.stringify(task);
    });

    for (const key in dataToStore) {
      localStorage.setItem(key, dataToStore[key]);
    }
  }
}
