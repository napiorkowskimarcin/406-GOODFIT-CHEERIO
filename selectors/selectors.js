//STEP  1LIST OF ALL SELECTORS

//CHECK DOMAIN:
const domainSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout.overview-divider.ng-star-inserted > div > row-card > div > div:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card > ul > li > label-with-icon > span > field-formatter > link-formatter > a";

//CHECK NAME
const nameSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > profile-header > div > header > div > div > div > div.identifier-nav > div.identifier-nav-title.ng-star-inserted > h1 > span";
//COUNTRY SELECTOR
const countrySelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout.overview-divider.ng-star-inserted > div > row-card > div > div:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card > ul > li:nth-child(1) > label-with-icon > span > field-formatter > identifier-multi-formatter > span > a:nth-child(3)";
//EMPLOYEE BRACKET SELECTOR
const employeeBracketSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout.overview-divider.ng-star-inserted > div > row-card > div > div:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card > ul > li:nth-child(2) > label-with-icon > span > field-formatter > a";
//STATE SELECTOR
const stateSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout.overview-divider.ng-star-inserted > div > row-card > div > div:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card > ul > li:nth-child(1) > label-with-icon > span > field-formatter > identifier-multi-formatter > span > a:nth-child(2)";
//CITY SELECTOR
const citySelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout.overview-divider.ng-star-inserted > div > row-card > div > div:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card > ul > li:nth-child(1) > label-with-icon > span > field-formatter > identifier-multi-formatter > span > a:nth-child(1)";
//FUNDING ROUND SELECTOR
const fundingRoundSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout.overview-divider.ng-star-inserted > div > row-card > div > div:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card > ul > li:nth-child(3) > label-with-icon > span > field-formatter > a";

//TYPE SELECTOR
const typeSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout.overview-divider.ng-star-inserted > div > row-card > div > div:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card > ul > li:nth-child(4) > label-with-icon > span > field-formatter > span";

//TOTAL FUNDING AMOUT SELECTOR
const totalFundSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout.overview-divider.ng-star-inserted > div > row-card > div > div:nth-child(2) > profile-section > section-card > mat-card > div.section-content-wrapper > div > anchored-values > a:nth-child(1) > field-formatter > span";
//INDUSTRIES SELECTOR
const industriesTextSelector = ".mat-standard-chip";

//FOUNDED YEAR SELECTOR
const foundedYearSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout:nth-child(3) > div > div > div.main-content > row-card:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card:nth-child(1) > ul > li:nth-child(3) > field-formatter > span";

//STATUS SELECTOR
const statusSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout:nth-child(3) > div > div > div.main-content > row-card:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card:nth-child(1) > ul > li:nth-child(5) > field-formatter > span";

//LEGAL NAME SELECTOR
const legalSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout:nth-child(3) > div > div > div.main-content > row-card:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card:nth-child(1) > ul > li > field-formatter > blob-formatter > span";

//SHORT DESCRIPTION SELECTOR
const descriptionSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout:nth-child(3) > div > div > div.main-content > row-card:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > description-card > div > span.description.has-overflow > p";

//FACEBOOK SELECTOR
const facebookSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout:nth-child(3) > div > div > div.main-content > row-card:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card:nth-child(5) > ul > li:nth-child(1) > field-formatter > link-formatter > a";

//LINKEDIN SELECOT
const linkedInSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout:nth-child(3) > div > div > div.main-content > row-card:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card > ul > li:nth-child(2) > field-formatter > link-formatter > a";

//TWITTER SELECTOR
const twitterSelector =
  "body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > ng-component > entity-v2 > page-layout > div > div > div > page-centered-layout:nth-child(3) > div > div > div.main-content > row-card:nth-child(1) > profile-section > section-card > mat-card > div.section-content-wrapper > div > fields-card > ul > li:nth-child(3) > field-formatter > link-formatter > a";

//EXPORTING VARIABLES FOR SELECTORS
module.exports = {
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
};
