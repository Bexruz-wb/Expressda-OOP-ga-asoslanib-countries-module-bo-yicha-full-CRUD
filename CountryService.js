import { readJSON, writeJSON } from "../utils/file.js";

const filePath = "countries.json";

export default class CountryService {
  // GET ALL
  static getAll() {
    return readJSON(filePath);
  }

  // GET BY ID
  static getById(id) {
    const countries = readJSON(filePath);
    return countries.find(c => c.id === id);
  }

  // CREATE
  static create(data) {
    const countries = readJSON(filePath);

    const newCountry = {
      id: Date.now().toString(),
      name: data.name,
      capital: data.capital,
      population: data.population
    };

    countries.push(newCountry);
    writeJSON(filePath, countries);
    return newCountry;
  }

  // UPDATE
  static update(id, data) {
    const countries = readJSON(filePath);
    const index = countries.findIndex(c => c.id === id);

    if (index === -1) return null;

    countries[index] = { ...countries[index], ...data };
    writeJSON(filePath, countries);
    return countries[index];
  }

  // DELETE
  static delete(id) {
    const countries = readJSON(filePath);
    const filtered = countries.filter(c => c.id !== id);
    writeJSON(filePath, filtered);
    return true;
  }
}
