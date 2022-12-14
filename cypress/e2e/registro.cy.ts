import { faker } from '@faker-js/faker'

describe('funcionalidade página de cadastro', () => {

  beforeEach(() => {
    cy.visit('/minha-conta')
  })

  it('deve permitir que um usuário se cadastre', () => {
    const nomeFaker = faker.name.firstName()
    const emailFaker = faker.internet.email(nomeFaker)
    const senhaFaker = faker.internet.password()
    const sobrenomeFaker = faker.name.lastName()

    cy.get('#reg_email').type(emailFaker)
    cy.get('#reg_password').type(senhaFaker)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nomeFaker)
    cy.get('#account_last_name').type(sobrenomeFaker)
    cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-message').should(
      'contain',
      'Detalhes da conta modificados com sucesso.'
    )
  })
  })
