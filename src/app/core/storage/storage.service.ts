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

  private set dbNameList(list: DbPair[]) {
    window.localStorage.setItem(StorageLabel.DB_NAMES, encodeData(list || []));
  }
  private get dbNameList(): DbPair[] {
    return decodeData(window.localStorage.getItem(StorageLabel.DB_NAMES)) || [];
  }
  private set dbCurrent(dbName: string) {
    if (this.hasDatabase(dbName)) {
      window.localStorage.setItem(StorageLabel.DB_CURRENT, encodeData(dbName));
    }
  }
  private get dbCurrent() {
    return decodeData(window.localStorage.getItem(StorageLabel.DB_CURRENT));
  }

  initStorage() {
    if (!this.dbNameList.length) {
      this.dbNameList = [];
    }
  }

  addNewDatabase(db: DbPair) {
    const list = this.dbNameList;
    const filtered = list.filter(item => {
      return item.name === db.name;
    });
    if (!!filtered.length) {
      throw new Error('该用户已存在，请勿重复添加');
    } else {
      list.push(db);
      this.dbNameList = list;
    }
  }
  hasDatabase(name: string): boolean {
    const filtered = this.dbNameList.filter(item => {
      return item.name === name;
    });
    return !!filtered.length;
  }

  setCurrentDatabase(db: DbPair) {
    this.dbCurrent = db.name;
  }
  getCurrentDatabase(): DbPair {
    return this.dbNameList.find(item => item.name === this.dbCurrent);
  }

  isNew() {
    return !!this.dbNameList.length;
  }
}
