describe('Testing Expand and Collapse', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should collapse Análise subrows', () => {
    cy.contains('Análise de contas').should('exist')
    cy.contains('Análise de transações').should('exist')

    cy.get('[data-cy=father-Análise]').click()
    cy.contains('Análise de contas').should('not.exist')
    cy.contains('Análise de transações').should('not.exist')
  })

  it('should expand Análise subrows', () => {
    // collapses it
    cy.get('[data-cy=father-Análise]').click()

    //expands it
    cy.get('[data-cy=father-Análise]').click()
    cy.contains('Análise de contas').should('exist')
    cy.contains('Análise de transações').should('exist')
  })
})

describe('Testing checkboxes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should check all Contas checkboxes on Details column', () => {
    cy.get('[data-cy=details-father-2]').click()
    
    cy.get('[data-cy=details-child-1]').find('input').should('be.checked')
    cy.get('[data-cy=details-child-2]').find('input').should('be.checked')
    cy.get('[data-cy=details-child-3]').find('input').should('be.checked')
  })

  it('should uncheck all Contas checkboxes on Details column', () => {
    // check
    cy.get('[data-cy=details-father-2]').click()

    // uncheck
    cy.get('[data-cy=details-father-2]').click()
    cy.get('[data-cy=details-child-1]').find('input').should('not.be.checked')
    cy.get('[data-cy=details-child-2]').find('input').should('not.be.checked')
    cy.get('[data-cy=details-child-3]').find('input').should('not.be.checked')
  })

  it('should select all Criar columns', () => {
    cy.get('[data-cy=create-all-0]').find('label').click()

    cy.get('[data-cy=create-father-1').find('input').should('be.checked')
    cy.get('[data-cy=create-father-2').find('input').should('be.checked')
    cy.get('[data-cy=create-father-3').find('input').should('be.checked')
    cy.get('[data-cy=create-father-4').find('input').should('be.checked')
  })

  it('should unselect all Criar columns', () => {
    // check
    cy.get('[data-cy=create-all-0]').find('label').click()

    // uncheck
    cy.get('[data-cy=create-all-0]').find('label').click()

    cy.get('[data-cy=create-father-1').find('input').should('not.be.checked')
    cy.get('[data-cy=create-father-2').find('input').should('not.be.checked')
    cy.get('[data-cy=create-father-3').find('input').should('not.be.checked')
    cy.get('[data-cy=create-father-4').find('input').should('not.be.checked')
  })

  it('should unselect Customização checkbox when at least one of its children is unselected', () => {
    cy.get('[data-cy=create-father-3]').find('label').click()

    cy.get('[data-cy=create-child-4]').find('label').click()
    cy.get('[data-cy=create-father-3').find('input').should('not.be.checked')
  })

  it('should select Customização checkbox when all of its children is selected', () => {
    cy.get('[data-cy=edit-child-1]').find('label').click({ multiple: true })

    cy.get('[data-cy=edit-father-4]').find('input').should('be.checked')
  })
})

describe('Testing Cadastrar button', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog')
      },
    })
  })

  it('should log nothing when nothing is selected', () => {
    cy.get('[data-cy=register-button]').click()

    cy.get('@consoleLog').should('be.calledWith', 'Resultado:\n ')
  })

  it('should log selected checkboxes', () => {
    cy.get('[data-cy=create-all-0]').find('label').click()
    cy.get('[data-cy=delete-father-3]').find('label').click()
    
    cy.get('[data-cy=register-button]').click()

    cy.get('@consoleLog').should('be.calledWith', 'Resultado:\n Criar - Análise de contas\n,Criar - Análise de transações\n,Criar - Cliente\n,Criar - Transações\n,Criar - Contas digitais\n,Criar - Limites e horários\n,Criar - Tarifas\n,Criar - Tarifas personalizadas\n,Criar - Conta\n,Criar - Entradas\n,Deletar - Limites e horários\n,Deletar - Tarifas\n,Deletar - Tarifas personalizadas\n,Deletar - Conta\n')
  })
})