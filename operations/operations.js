const fs = require("fs");
const cheerio = require("cheerio");
const path = require("path");
let nameFile = " ";
if (process.argv[2]) {
  nameFile = process.argv[2];
} else {
  nameFile = require("../config/nameFile");
}

//LOAD A FILE

const filePath = path.join(__dirname, `../${nameFile}.html`);

//CREATION AND OPERATIONS ON VALUES
const {
  domainSelector,
  nameSelector,
  countrySelector,
  employeeBracketSelector,
  stateSelector,
  citySelector,
  fundingRoundSelector,
  typeSelector,
  totalFundSelector,
  industriesTextSelector,
  foundedYearSelector,
  statusSelector,
  legalSelector,
  descriptionSelector,
  facebookSelector,
  linkedInSelector,
  twitterSelector,
} = require("../selectors/selectors");

//1. REMOVING EXTRA WHITESPACE AND LINEBREAKS FROM DOMAIN

const $ = cheerio.load(fs.readFileSync(filePath));
let domainText = $(domainSelector)
  .text()
  .replace(/\s+|\\n/g, " ")
  .trim();
domainText = domainText;

//2. BRING THE NAME TEXT
const nameText = $(nameSelector).text();
//3. REMOVING EXTRA WHITESPACE AND LINEBREAKS FROM COUNTRY
let countryText = $(countrySelector)
  .text()
  .replace(/\s+|\\n/g, " ")
  .trim();

//4. REMOVING EXTRA WHITESPACE AND LINEBREAKS FROM STATE
let stateText = $(stateSelector)
  .text()
  .replace(/\s+|\\n/g, " ")
  .trim();

//5. REMOVING EXTRA WHITESPACE AND LINEBREAKS FROM CITY
let cityText = $(citySelector)
  .text()
  .replace(/\s+|\\n/g, " ")
  .trim();

//6. BRING EMPLOYEE TEXT
const employeeText = $(employeeBracketSelector).text();
//7. BRING FUNDING ROUND TEXT
const fundingRoundText = $(fundingRoundSelector).text();
//8. BRING TYPE TEXT
const typeText = $(typeSelector).text();
//9. BRING TOTAL FUND TEXT
const totalFundText = $(totalFundSelector).text();
//10. REMOVING EXTRA WHITESPACE AND LINEBREAKS FROM INDUSTRIES
let industriesText = $(industriesTextSelector)
  .map(function (i, el) {
    return $(this).text();
  })
  .get();
industriesText = JSON.stringify(industriesText);
industriesText = industriesText.replace(/\s+|\\n/g, " ");
industriesText = JSON.parse(industriesText);
industriesText = industriesText.map((e) => e.trim());
//11. BRING FOUNDED YEAR TEXT
const foundedYearText = $(foundedYearSelector).text();
//12. BRING STATUS TEXT
const statusText = $(statusSelector).text();
//12. BRING LEGAL TEXT
const legalText = $(legalSelector).text();
//13. REMOVING EXTRA WHITESPACE AND LINEBREAKS FROM DESCRIPTION
let descriptionText = $(descriptionSelector)
  .map(function (i, el) {
    return $(this).text();
  })
  .get();
descriptionText = JSON.stringify(descriptionText);
descriptionText = descriptionText.replace(/\s+|\\n/g, " ");
descriptionText = JSON.parse(descriptionText);
descriptionText = descriptionText.map((e) => e.trim());
//14. BRING TEXT FOR FB, LINKEDIN, TWITTER
const facebookText = $(facebookSelector).attr("href");
const linkedInText = $(linkedInSelector).attr("href");
const twitterText = $(twitterSelector).attr("href");

module.exports = {
  domainText,
  nameText,
  countryText,
  stateText,
  cityText,
  employeeText,
  fundingRoundText,
  typeText,
  totalFundText,
  industriesText,
  foundedYearText,
  statusText,
  legalText,
  descriptionText,
  facebookText,
  linkedInText,
  twitterText,
};
