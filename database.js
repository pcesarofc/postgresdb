import { sql } from "./db.js";

// CONTAINS THE DATABASE CLASS WITH THE METHODS

export class DatabaseNeon {
  async list() {
    let projects;
    projects = await sql`SELECT * FROM projetos`;

    return projects
  }
}
