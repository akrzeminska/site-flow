import { Construction } from "../models/construction.model";

export const mockConstructions: Construction[] = [
    {
      id: 1,
      name: 'Osiedle Zacisze',
      location: 'ul. Tadeusza Romanowicza 5, Kraków',
      client: 'IMS',
      costEstimateId: 1,
      manager: 'Andrzej Gugała',
      contactId: [1],
      description: 'Budynek mieszkalny wielorodzinny',
      taskId: [1],
      status: 'W budowie',
    },
    {
      id: 2,
      name: 'Biurowiec B4',
      location: 'Al. Pokoju 1, Kraków',
      client: 'Filion Sp. Z o.o.',
      costEstimateId: 2,
      manager: 'Janusz Sowa',
      contactId: [2],
      description: 'Budynek biurowo-usługowy',
      taskId: [2],
      status: 'Planowany',
    }
  ];