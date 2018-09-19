import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const students = [
      {id: 1, name: 'Alice'},
      {id: 2, name: 'David'},
      {id: 3, name: 'Carol'},
      {id: 4, name: 'Trump'},
      {id: 5, name: 'Joseph'},
      {id: 6, name: 'JR'},
      {id: 7, name: 'Johney'}
    ];

    return { students };
  }
}
