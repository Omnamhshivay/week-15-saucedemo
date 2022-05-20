$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("purchase.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I want to purchase cheapest and costliest product\r\nfrom the saucedemo after sorting the products by Hight to Low filter.",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User navigates saucedemo page and complete the item purchas",
  "description": "",
  "id": "search-functionality;user-navigates-saucedemo-page-and-complete-the-item-purchas",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on saucedemo page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I filter the products by Price \"high to low\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I open shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter details firstname \"\u003cfirstName\u003e\", lastName \"\u003clastName\u003e\" and zipPostalCode \"\u003cPostalCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to see message \u0027Thank you for your order\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-functionality;user-navigates-saucedemo-page-and-complete-the-item-purchas;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "PostalCode"
      ],
      "line": 19,
      "id": "search-functionality;user-navigates-saucedemo-page-and-complete-the-item-purchas;;1"
    },
    {
      "cells": [
        "Amitabh",
        "Bachan",
        "LO1 2DN"
      ],
      "line": 20,
      "id": "search-functionality;user-navigates-saucedemo-page-and-complete-the-item-purchas;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3442949000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User navigates saucedemo page and complete the item purchas",
  "description": "",
  "id": "search-functionality;user-navigates-saucedemo-page-and-complete-the-item-purchas;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on saucedemo page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I filter the products by Price \"high to low\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I open shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter details firstname \"Amitabh\", lastName \"Bachan\" and zipPostalCode \"LO1 2DN\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to see message \u0027Thank you for your order\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "PuecheseSteps.iAmOnSaucedemoPage()"
});
formatter.result({
  "duration": 77999200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 34
    },
    {
      "val": "secret_sauce",
      "offset": 63
    }
  ],
  "location": "PuecheseSteps.iLoginWithCredentialUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 165036600,
  "status": "passed"
});
formatter.match({
  "location": "PuecheseSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 86960300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "high to low",
      "offset": 32
    }
  ],
  "location": "PuecheseSteps.iFilterTheProductsByPrice(String)"
});
formatter.result({
  "duration": 349726600,
  "status": "passed"
});
formatter.match({
  "location": "PuecheseSteps.iSelectCheapestCostliestProductsAndAddToBasket()"
});
formatter.result({
  "duration": 176019500,
  "status": "passed"
});
formatter.match({
  "location": "PuecheseSteps.iOpenShoppingCart()"
});
formatter.result({
  "duration": 63321800,
  "status": "passed"
});
formatter.match({
  "location": "PuecheseSteps.iGoToCheckout()"
});
formatter.result({
  "duration": 53046500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amitabh",
      "offset": 27
    },
    {
      "val": "Bachan",
      "offset": 47
    },
    {
      "val": "LO1 2DN",
      "offset": 74
    }
  ],
  "location": "PuecheseSteps.iEnterDetailsFirstnameLastNameAndZipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 213602800,
  "status": "passed"
});
formatter.match({
  "location": "PuecheseSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 58448800,
  "status": "passed"
});
formatter.match({
  "location": "PuecheseSteps.iClickOnFinishButton()"
});
formatter.result({
  "duration": 48497300,
  "status": "passed"
});
formatter.match({
  "location": "PuecheseSteps.iShouldBeAbleToSeeMessageThankYouForYourOrder()"
});
formatter.result({
  "duration": 31310600,
  "status": "passed"
});
formatter.after({
  "duration": 90800,
  "status": "passed"
});
});