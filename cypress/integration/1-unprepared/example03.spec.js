describe('Example 3', () => {
  it('fails with Redux', () => {
    cy.visit('/unprepared/example3');
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').contains(28);
  });
});
