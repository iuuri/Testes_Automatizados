/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

context('Funcionalidade login e exclusão de contas', () => {

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

  it('CT02 Deve fazer login com sucesso', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > form > [type="email"]').type('teste52@teste.com.br')
    cy.get('[type="password"]').type('teste@teste')
    cy.get('.login-form > form > .btn').click()
    cy.get(':nth-child(10) > a').should('contain', 'Logged in as Teste')
  });

  it('CT03 Usuario de login com e-mail e senha incorreto', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > form > [type="email"]').type('emailincorreto@teste.com.br')
    cy.get('[type="password"]').type('senhaincorreta@teste')
    cy.get('.login-form > form > .btn').click()
    cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect')
  });

  it('CT04 Realizar logoff', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > form > [type="email"]').type('teste52@teste.com.br')
    cy.get('[type="password"]').type('teste@teste')
    cy.get('.login-form > form > .btn').click()
    cy.get(':nth-child(10) > a').should('contain', 'Logged in as Teste')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').should('contain', 'Login to your account')

  });

  it('CT05 Registrar usuario com ', () => {
    
  });




});



