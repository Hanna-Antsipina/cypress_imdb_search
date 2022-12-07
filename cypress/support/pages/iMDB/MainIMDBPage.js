class MainIMDBPage {

    //Finds the search field
    get searchField() {
        return cy.get('#suggestion-search')
    }

    //Finds the magnify icon
    get searchIcon(){
        return cy.get('#iconContext-magnify')
    }

    // Finds the popup after entering value in the text field
    get popup(){
        return cy.get('[role="listbox"] li').eq(1).then(element => {
            cy.wrap(element).find('.searchResult__constTitle').first()
        })
    }

    //Сhecks that the search field exists and placeholder is correct
    checkIsSearchFieldExist() {
        this.searchField.should('have.attr', 'placeholder').and('equal', 'Search IMDb')
    }

     //Enters value in the search field
    enterTextInSearchField(text) {
            this.searchField.type(text)
    }

    //Presses the Enter button on the keyboard
    clickEnter(){
        this.searchField.type('{enter}')
    }

    //Presses the magnifying glass icon
    clickSearchIcon(){
        this.searchIcon.click()
    }

    //Presses the Esc button on the keyboard
    clickEsc(){
        this.searchField.type('{esc}')
    }

    //Presses the Backspace button on the keyboard
    clickBackspace(){
        this.searchField.type('{backspace}')
    }
 
    //Checks the value that is contained in the search bar
    checkIfSearchFieldContains(text){
        this.searchField.should('have.attr', 'value', text)
    }

    //Checks the value that is contained in the popup
    checkPopup(textmessage) {
        this.popup.invoke('text').then((text) => {
            expect(text).to.contain(textmessage)
        })
    }

}

export const onMainIMDBPage = new MainIMDBPage()