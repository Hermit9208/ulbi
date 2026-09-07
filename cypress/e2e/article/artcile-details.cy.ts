let currentArticleId = '';

describe('User enters on Article page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('And saw article content', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('And saw recommendation list', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('And send comment', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('test');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('And gives a grade', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
