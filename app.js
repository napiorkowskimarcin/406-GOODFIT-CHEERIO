//WEB SCRAPPING - FOR CRUNCHBASE
//ALL OF THE SELECTORS FOR CHEERIO ARE STORED INSIDE ./SELECTORS/SELECTORS
//ALL OF THE MODYFICATIONS MADE ON THE IMPORTED VALUES ARE STORED INSIDE ./OPERATIONS/OPERATIONS

const {
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
} = require("./operations/operations");

//
//CREATE AN ARRAY OF PREPARED PROPERTIES
let companyInfo = [];
companyInfo.domain = domainText;
companyInfo.name = nameText;
companyInfo.country = countryText;
companyInfo.state = stateText;
companyInfo.city = cityText;
companyInfo.employeeBracket = employeeText;
companyInfo.lastFundingRound = fundingRoundText;
companyInfo.type = typeText;
companyInfo.totalFundingAmount = totalFundText;
companyInfo.industries = industriesText;
companyInfo.foundedYear = foundedYearText;
companyInfo.status = statusText;
companyInfo.legalName = legalText;
companyInfo.shortDescription = descriptionText;
companyInfo.facebookUrl = facebookText;
companyInfo.linkedinUrl = linkedInText;
companyInfo.twitter = twitterText;
console.log(companyInfo);