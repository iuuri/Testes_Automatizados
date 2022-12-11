/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

context('Funcionalidade Criar e Excluir conta', () => {

  let emailFaker = faker.internet.email()
  let nomeFaker = faker.name.firstName()
  let sobrenomeFaker = faker.name.lastName()
  let senhaFaker = faker.internet.password()

  beforeEach(() => {
    cy.visit("http://automationexercise.com")
  });

  it('CT01 Criar e excluir conta', () => {
    cy.get('.shop-menu > .nav > :nth-child(1) > a').should('contain', 'Home')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.signup-form > h2').should('contain', 'New User Signup!')
    cy.get('[type="text"]').type(nomeFaker)
    cy.get('.signup-form > form > [type="email"]').type(emailFaker)
    cy.get('.signup-form > form > .btn').click()
    cy.get(':nth-child(1) > b').should('contain', 'Enter Account Information')
    cy.get('#id_gender1').click()
    cy.get('#password').type(senhaFaker)
    cy.get('#days').type(13)
    cy.get('#months').type('april')
    cy.get('#years').type(1998)
    cy.get('#newsletter').click
    cy.get('#optin').click
    cy.get('#first_name').type(nomeFaker)
    cy.get('#last_name').type(sobrenomeFaker)
    cy.get('#company').type('teste')
    cy.get('#address1').type('teste 1')
    cy.get('#state').type('teste')
    cy.get('#city').type('teste')
    cy.get('#zipcode').type(99999999)
    cy.get('#mobile_number').type(999999999)
    cy.get('.login-form > form > .btn').click()
    cy.get('b').should('contain', 'Account Created')
    cy.get('.pull-right > .btn').click()
    cy.get(':nth-child(10) > a').should('contain', ' Logged in as ')
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.get('.pull-right > .btn').click()
  });

});