import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', img: '1.jpg'},
      { id: 12, name: 'Narco', img: '2.jpg' },
      { id: 13, name: 'Bombasto', img: '3.jpeg'},
      { id: 14, name: 'Celeritas', img: '4.jpg'},
      { id: 15, name: 'Magneta', img: '5.jpg'},
      { id: 16, name: 'RubberMan', img: '6.jpg'},
      { id: 17, name: 'Dynama', img: '7.jpg'},
      { id: 18, name: 'Dr IQ', img: '8.jpg'},
      { id: 19, name: 'Magma', img: '9.jpg'},
      { id: 20, name: 'Tornado', img: '10.jpeg'}
    ];
    return {heroes};
  }
}
