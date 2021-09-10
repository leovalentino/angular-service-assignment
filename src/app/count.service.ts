import {Injectable} from '@angular/core';

@Injectable()
export class CountService {

  activeToInatctiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInatctiveCounter++;
    console.log('Active to inactive' +  this.activeToInatctiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to active ' +  this.inactiveToActiveCounter);
  }

}
