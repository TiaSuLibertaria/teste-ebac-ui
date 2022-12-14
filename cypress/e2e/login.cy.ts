describe('funcionalidade página de login', () => {
  beforeEach(() => {
    cy.visit('/minha-conta')
  })

  it('deve permitir que um usuario válido faça o login', () => {
    cy.get('#username').type('suelenedu@yahoo.com.br')
    cy.get('#password').type('su#apa12')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
      'contain.text',
      'Olá'
    )
  })

  it('não deve permitir que um usuário inválido faça o login', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain.text', 'Erro')
  })
})