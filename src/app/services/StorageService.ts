export default class StorageService {
  private storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key) || "");
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
