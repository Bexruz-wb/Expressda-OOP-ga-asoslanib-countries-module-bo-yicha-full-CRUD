import CountryService from "../services/CountryService.js";

export default class CountryController {
  static getAll(req, res) {
    return res.json(CountryService.getAll());
  }

  static getOne(req, res) {
    const country = CountryService.getById(req.params.id);
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }
    return res.json(country);
  }

  static create(req, res) {
    const country = CountryService.create(req.body);
    return res.status(201).json(country);
  }

  static update(req, res) {
    const updated = CountryService.update(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: "Country not found" });
    }
    return res.json(updated);
  }

  static delete(req, res) {
    CountryService.delete(req.params.id);
    return res.json({ message: "Country deleted" });
  }
}
