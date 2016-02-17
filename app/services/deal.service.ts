import {Injectable} from 'angular2/core';
import {DEALS} from '../mocks/mock.deals.ts'


@Injectable()
export class DealService {
    getHeroes(){
        return Promise.resolve(DEALS);
    }
}