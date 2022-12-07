import { onMainIMDBPage } from "../../support/pages/iMDB/MainIMDBPage"
import { onSearchResultPage } from "../../support/pages/iMDB/SearchResultPage"

describe('Search test', () => {
    before( () => {
        // Access to the website before all tests in order to avoid repeated actions
        // Checking that placeholder is correct
        cy.log('Open web site')
        cy.openIMDBsite()
        onMainIMDBPage.checkIsSearchFieldExist() 
    })

    //Checking the relevance of the search by the entered correct movie name
    //Checking the start of the search by pressing the Enter button on the keyboard
    //Checking that the title ‘Search “...” ’ contains the value entered by the user
    it('Enter a correct movie name', () => {
        onMainIMDBPage.enterTextInSearchField("titanic")
        onMainIMDBPage.clickEnter()
        onSearchResultPage.getElementText("titanic")
        onSearchResultPage.checkIsSearchResultCorrect("titanic")
    })

    //Checking the relevance of the search by the entered TV Show name with a typo
    //Checking the start of the search by clicking on the magnifying glass icon
    it('Enter a TV Show name with typo', () => {
        onMainIMDBPage.enterTextInSearchField("frinds")
        onMainIMDBPage.clickSearchIcon()
        onSearchResultPage.getElementText("friends")
        onSearchResultPage.checkIsSearchResultCorrect("frinds")
    })

     //Checking the relevance of the search by the entered Celebrity name with an additional symbol
    it('Enter a Celebrity name with an additional symbol', () => {
        onMainIMDBPage.enterTextInSearchField("beyonce//")
        onMainIMDBPage.clickSearchIcon()
        onSearchResultPage.checkIsSearchResultCorrect("beyonce")
    })

     //Checking the appearance of the pop-up with a relevant result after entering a value in the text field
    it('Popup', () => {
        onMainIMDBPage.enterTextInSearchField("Avatar")
        onMainIMDBPage.checkPopup("Avatar")
    })

    //Checking the deletion of the entered text with the ESC button
    it('Delete via ESC button', () => {
        onMainIMDBPage.enterTextInSearchField("delete")
        onMainIMDBPage.clickEsc()
        onMainIMDBPage.checkIsSearchFieldExist() 
    })

    //Checking the deletion of the last entered symbol with the Backspace button
    it('Delete via Backspace button', () => {
        onMainIMDBPage.enterTextInSearchField("oops")
        onMainIMDBPage.clickBackspace()
        onMainIMDBPage.checkIfSearchFieldContains("oop")
    })

     //Checking that the search is case - insensitive
     it('Check register', () => {
        onMainIMDBPage.enterTextInSearchField("WILL")
        onMainIMDBPage.clickEnter()
        onSearchResultPage.getElementText("Will")
        onSearchResultPage.checkIsSearchResultCorrect("will")
    })

     //Checking the relevance of the search by the entered a name without space
     it('Enter a name without space', () => {
        onMainIMDBPage.enterTextInSearchField("billmurray")
        onMainIMDBPage.clickSearchIcon()
        onSearchResultPage.getElementText("bill murray")
        onSearchResultPage.checkIsSearchResultCorrect("billmurray")
    })

    //Checking the relevance of the search by the entered number
    it('Enter a number', () => {
        onMainIMDBPage.enterTextInSearchField(1)
        onMainIMDBPage.clickEnter()
        onSearchResultPage.checkIsSearchResultCorrect(1)
    })

    //Checking the relevance of the search by the entered letter
    it('Enter a letter', () => {
        onMainIMDBPage.enterTextInSearchField("an")
        onMainIMDBPage.clickSearchIcon()
        onSearchResultPage.checkIsSearchResultCorrect("an")
    })

    //Checking the correct behavior of the program when entering a space
    it('Enter a whitespace', () => {
        onMainIMDBPage.enterTextInSearchField(" ")
        onMainIMDBPage.clickEnter()
        onSearchResultPage.checkIsSearchResultCorrect("IMDb")
    })

    //Checking the correct behavior of the program when entering a JsScript
    it('Enter a JsScript', () => {
        onMainIMDBPage.enterTextInSearchField("<script>alert('test')</script>")
        onMainIMDBPage.clickEnter()
        onSearchResultPage.checkIsSearchResultCorrect("<script>alert('test')</script>")
    })

})
