import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const students = [
      {id: 1, name: ''},
      {id: 2, name: ''},
      {id: 3, name: ''},
      {id: 4, name: ''},
      {id: 5, name: ''},
      {id: 6, name: ''},
      {id: 7, name: ''}
    ];

    return { students };
  }
}
