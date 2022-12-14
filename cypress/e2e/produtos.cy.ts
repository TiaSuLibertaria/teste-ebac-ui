describe('funcionalidade página de produto', () => {

  beforeEach(() => {
    cy.visit('/produtos/')
  })

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
    //eq(4)
      .contains('Abominable Hoodie')
    .click()
  })

  it.only('deve adicionar um produto no carrinho', () => {
    const quantidade = 8
    cy.get('[class="product-block grid"]')
      .contains('Abominable Hoodie').click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type(`${quantidade}`)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)

  });
})