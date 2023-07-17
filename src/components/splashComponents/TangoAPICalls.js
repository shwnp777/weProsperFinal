///--------------------------------------------TANGO CARD API CALLS---------------------------------------------///

///------------CUSTOMERS CALLS (GETS)--------------------///

/// BASIC AUTH///
const options = {
  method: 'GET', 
  headers: {    
    accept: 'application/json',
    authorization: 'Basic <UsernameTOKEN_Hash>'
  }
};

///END BASIC AUTH////

///------------GET A LIST OF ALL CUSTOMERS ON THIS PLATFORM------------------///
fetch('https://integration-api.tangocard.com/raas/v2/customers', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

///----------END GET LIST OF ALL CUSTOMERS ON PLATFORM----------------------///

///----------GET DETAILS FOR A SPECIFIC CUSTOMER ON THIS PLATFORM---------------///


fetch('https://integration-api.tangocard.com/raas/v2/customers/WeProspr', options)///Change final parameter for specific customerIdentifier
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

///-----------END GET DETAILS FOR SPECIFIC CUSTOMER----------------------------///

///----------GET A LIST OF ALL ACCOUNTS CREATED FOR A SPECIFIC CUSTOMER ON THIS PLATFORM--------------///

fetch('https://integration-api.tangocard.com/raas/v2/customers/weProspr/accounts', options)///Change customerIdentifier for account
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

///----------END GET LIST OF ALL ACCOUNTS CREATED FOR SPECIFIC CUSTOMER ON THIS PLATFORM-------------///

///-------------------------END CUSTOMER CALLS (GETS)-----------------------------------------------------------///


//--------------------------------------------------------------------------------------------------------------------------------------------------------------//


///-------------------CUSTOMER CALLS (POSTS)----------------------///

///--------CREATE A NEW CUSTOMER ON THIS PLATFORM---------------------------///
/// BASIC AUTH///
const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Basic <UsernameTOKEN_Hash>'
    },
    body: JSON.stringify({customerIdentifier: 'weProsper', displayName: 'WeProspr'}) //Change Customeridentifier & displayName for specific search
  };
  
  fetch('https://integration-api.tangocard.com/raas/v2/customers', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

///--------END CREATE NEW CUSTOMER------------------------------///

///-------------Create AN ACCOUNT UNDER A SPECIFIC CUSTOMER ON THIS Platform------------------------------////
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Basic <UsernameTOKEN_Hash>'
  },
  body: JSON.stringify({
    accountIdentifier: 'weProsper',//modify
    displayName: 'weProspr',//modify
    contactEmail: 'sales@weProspr.com'//modify
  })
};

fetch('https://integration-api.tangocard.com/raas/v2/customers/weProspr/accounts', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  ///-------------END Create AN ACCOUNT UNDER A SPECIFIC CUSTOMER ON THIS Platform------------------------------////


  ///--------END CUSTOMER CALLS (POSTS)------------------------------///