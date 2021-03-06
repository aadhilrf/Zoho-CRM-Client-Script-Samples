/**
 * Module: Leads
 * Page: Create record
 * Event: onSave
 * Description: Client Script to validate email of Leads based on third party data and to prevent save action
 * Constraints: jsonplaceholder.typicode.com or the domain to be accessed has to be added in Setup -> Users and Control -> Trusted Domains
 */

const email = ZDK.Page.getField('Email').getValue(); // Get the field value

const response = await fetch('https://jsonplaceholder.typicode.com/users?email=' + email);

const lead_data = (await response.json())[0];

if (lead_data) {
    return true;
} else {
    const user_response = ZDK.Client.showConfirmation('Email not valid. Are you sure you want to continue?'); // user confirmation returns true/false
    
    return user_response;
}