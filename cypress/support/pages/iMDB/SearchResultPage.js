class SearchResultPage{

    //Finds element that indicating what is being searched for
    get searchH1Text(){
        return cy.get('.ipc-page-section')
        .get('h1')
    }

    //Finds the first output result
    get title(){
        return cy.get('section h3').contains('Titles')
    }

    //Retrieves the text from what is being searched for
    getElementText(textMessage){
        this.title.invoke('text').then((text) => {
            cy.wrap(text).as(textMessage);
              });
        }
        
     //Сhecks that the h1 text contains what is being searched for
    checkIsSearchResultCorrect(text){
        this.searchH1Text.then( element => {
            expect(element).to.contain(text)
        })
    }

}

export const onSearchResultPage = new SearchResultPage()