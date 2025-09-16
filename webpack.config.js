import path from "path";
import { fileURLToPath } from "url"; // Для получения абсолютного пути к текущему файл
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const config = {
  mode: "production",
  entry: {
    home: __dirname + "/src/js/index.js", // Entry point for the home page
    vacancy: __dirname + "/src/js/vacancy/vacancy.js", // Entry point for the about page
    contacts: __dirname + "/src/js/contacts/contacts.js", // Entry point for the contact page
    about: __dirname + "/src/js/about-company/about-company.js", // Entry point for the about company page
    bankets: __dirname + "/src/js/bankets-keitering/bankets-keitering.js",
    child: __dirname + "/src/js/child-keiterings/child-keiterings.js",
    coffe: __dirname + "/src/js/coffee-break-keitering/coffee-break.js",
    corporate: __dirname + "/src/js/corporate-clients/corporate-clients.js",
    furshet: __dirname + "/src/js/furshet-keitering/furshet-keitering.js",
    gala: __dirname + "/src/js/gala-keitering/gala-keitering.js",
    outdoor:
      __dirname + "/src/js/outdoor-bars-keitering/outdoor-bars-keitering.js",
    service: __dirname + "/src/js/service-keitering/service-keitering.js",
  },
  output: {
    path: path.resolve(__dirname, "/src/build/js/"),
    filename: "[name].bundle.js", // Use [name] to create unique filenames for each bundle
  },
};
export default config;
