package stepDefinitions;

import commons.AbstractTest;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberOptions.Hooks;
import org.openqa.selenium.WebDriver;
import pageObject.HomePageObject;
import pageUI.HomePageUI;

import java.util.List;
import java.util.Map;

public class CheckDisplaySteps extends AbstractTest {
    WebDriver driver;
    HomePageObject homePage;
    String localhostURL = "http://localhost/tamnpm/";

    public CheckDisplaySteps() {
        driver = Hooks.openBrowser();
        homePage = new HomePageObject(driver);
    }
    @Given("^I open the wordpress website$")
    public void i_open_the_wordpress_website() {
        homePage.openURL(localhostURL);
    }

    @And("^I log in to the website$")
    public void i_log_in_to_the_website(DataTable loginTable) {
        homePage.clickToLoginLink();
        List<Map<String, String>> userNamePassword = loginTable.asMaps(String.class, String.class);
        String username = userNamePassword.get(0).get("Username");
        String password = userNamePassword.get(0).get("Password");
        homePage.inputToUserNamePassword(username, password);
        homePage.clickToLoginButton();
    }

    @When("^I create a new post$")
    public void i_create_a_new_post() {
        homePage.clickToNewPost();
    }

    @Then("^I verify the protected area popup is displayed$")
    public void i_verify_the_protected_area_popup_is_displayed() {
        verifyTrue(homePage.checkPasssertFormDisplayed());
    }

    @And("^write the content$")
    public void write_the_content(DataTable contentTable) {
        List<Map<String, String>> postContent = contentTable.asMaps(String.class, String.class);
        String title = postContent.get(0).get("Title");
        String content = postContent.get(0).get("Content");
        homePage.inputToPostContent(title, content);
    }

    @And("^insert the shortcode to hide text$")
    public void insert_the_shortcode_to_hide_text_something(DataTable shortCode) {
        List<Map<String, String>> shortCodeInject = shortCode.asMaps(String.class, String.class);
        String password = shortCodeInject.get(0).get("Password");
        String hiddenText = shortCodeInject.get(0).get("Hidden text");
        homePage.insertShortCode(password, hiddenText);

    }

    @And("^publish post$")
    public void publish_post() {
        homePage.clickToPublishButton();
    }

    @And("^press the View post button$")
    public void press_the_view_post_button() {
        homePage.clickToViewPostButton();
    }

    @And("^the popup header is \"([^\"]*)\"$")
    public void the_popup_header_is_something(String title) {
        verifyTrue(homePage.checkPasssertTitle(title));
    }


    @And("^the popup display with text \"([^\"]*)\"$")
    public void the_popup_display_with_text_something(String hintText) {
        verifyTrue(homePage.checkPasssertHintText(hintText));
    }

    @And("^the placeholder is \"([^\"]*)\"$")
    public void the_placeholder_is_something(String placeHolder) {
        verifyTrue(homePage.checkPasssertPlaceholder(placeHolder));
    }

    @And("^the submit button displayed$")
    public void the_submit_button_displayed() {
        homePage.clickSubmitButton();
    }

}
