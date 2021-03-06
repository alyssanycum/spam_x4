import customers from './customers.js';

// From that array, extract just the customers' contact email addresses and store them in a new array. You will need a nested array method - meaning one iteration inside another one - since you need to iterate the entire array of customers, and then iterate the array of emails for each one.

const customerEmails = customers.map(customer =>
    customer.contacts.email.map(email => {
        return email
    }))

console.log(customerEmails)


const customerEmailsList = customers.map(customer =>
    customer.contacts.email.map(email => console.log(email)))