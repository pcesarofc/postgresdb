import { sql } from "./db.js";


// JUST CREATE THE DB ON THE FIRST TIME
// TO CREATE THE DB, RUN `node create-db.js`

sql`
    CREATE TABLE projetos (
        id VARCHAR(255),
        url VARCHAR(255),
        imagem VARCHAR(255)
    );
`.then(() => console.log("Table created"));
