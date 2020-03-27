package pageObject;

import commons.AbstractPage;
import org.openqa.selenium.WebDriver;
import pageUI.HomePageUI;

public class HomePageObject extends AbstractPage {


    public HomePageObject(WebDriver driver) {
        super(driver);
    }

    public void clickToLoginLink(){
        clickToElement(HomePageUI.LOGIN_LINK);
    }

    public void inputToUserNamePassword(String userName, String password){
        sendKeyToElement(HomePageUI.LOGIN_TEXTBOXES, "login", userName);
        sendKeyToElement(HomePageUI.LOGIN_TEXTBOXES, "pass", password);
    }

    public void clickToLoginButton(){
        clickToElement(HomePageUI.LOGIN_BUTTON);
    }

    public void clickToNewPost(){
        clickToElement(HomePageUI.NEW_POST_BUTTON);
    }

    public void inputToPostContent(String title, String content){
        sendKeyToElement(HomePageUI.POST_TITLE, title);
        clickToElement(HomePageUI.POST_SELECT_BLOCK);
        sendKeyToElement(HomePageUI.POST_CONTENT, content);
    }

    public void insertShortCode(String password, String hiddenText){
        sendShortCode(HomePageUI.POST_CONTENT, password, hiddenText);
    }

    public void clickToPublishButton(){
        clickToElement(HomePageUI.PUBLISH_BUTTON);
        clickToElement(HomePageUI.PUBLISH_BUTTON_CONFIRM);
    }

    public void clickToViewPostButton(){
        clickToElement(HomePageUI.VIEW_POST_BUTTON);
    }

    public boolean checkPasssertFormDisplayed(){
        return isElementDisplayed(HomePageUI.PASSSERT_FORM);
    }

    public boolean checkPasssertTitle(String actualText){
        String title = getTextElement(HomePageUI.PASSSERT_TITLE);
        return actualText.equals(title);
    }

    public boolean checkPasssertHintText(String actualText){
        String hintText = getTextElement(HomePageUI.PASSSERT_HINT_TEXT);
        System.out.println(hintText);
        return actualText.equals(hintText);
    }

    public void inputToPasssertPassword(String password){
        sendKeyToElement(HomePageUI.PASSSERT_PASSWORD, password);
    }

    public void clickSubmitButton(){
        clickToElement(HomePageUI.PASSSERT_SUBMIT_BUTTON);
    }

    public boolean checkPasssertPlaceholder(String expected){
        String placeHolder = getAttributeValue(HomePageUI.PASSSERT_PASSWORD, "placeholder");
        return expected.equals(placeHolder);
    }
}
