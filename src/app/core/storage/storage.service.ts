import { Injectable } from '@angular/core';
import { StorageLabel } from '@enums';
import { decodeData, encodeData } from '@utils';

interface DbPair {
  name: string;
  version: number;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    this.initStorage();
  }

  set dbNameList(list: DbPair[]) {
    window.localStorage.setItem(StorageLabel.DB_NAMES, encodeData(list));
  }
  get dbNameList() {
    return decodeData(window.localStorage.getItem(StorageLabel.DB_NAMES));
  }

  set dbCurrent(db: DbPair) {
    window.localStorage.setItem(StorageLabel.DB_CURRENT, JSON.stringify(db));
  }
  get dbCurrent() {
    return JSON.parse(window.localStorage.getItem(StorageLabel.DB_CURRENT));
  }

  initStorage() {
    if (!this.dbNameList) {
      this.dbNameList = [];
    }
  }
}
