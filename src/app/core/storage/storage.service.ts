import { Injectable } from '@angular/core';
import { StorageLabel } from '@enums';

interface DbPair {
  name: string;
  version: number;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    StorageService.initStorage();
  }

  static set dbNameList(list: DbPair[]) {
    window.localStorage.setItem(StorageLabel.DB_NAME, JSON.stringify(list));
  }
  static get dbNameList() {
    return JSON.parse(window.localStorage.getItem(StorageLabel.DB_NAME));
  }

  static initStorage() {
    if (!StorageService.dbNameList) {
      StorageService.dbNameList = [];
    }
  }
}
