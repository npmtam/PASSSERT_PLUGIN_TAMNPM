package pageUI;

public class HomePageUI {

    //Login
    public static final String LOGIN_LINK = "//a[text()='Log in']";
    public static final String LOGIN_TEXTBOXES = "//input[@id='user_%s']";
    public static final String NEW_POST_BUTTON = "//span[text()='New']/parent::a[@class='ab-item']";
    public static final String LOGIN_BUTTON = "//input[@id='wp-submit']";

    //New Post
    public static final String POST_TITLE = "//textarea[@placeholder='Add title']";
    public static final String POST_SELECT_BLOCK = "//textarea[@role='button']";
    public static final String POST_CONTENT = "//p[@role='textbox']";
    public static final String PUBLISH_BUTTON = "//button[contains(text(), 'Publish')]";
    public static final String PUBLISH_BUTTON_CONFIRM = "//button[text()='Publish']";
    public static final String VIEW_POST_BUTTON = "//a[text()='View Post']";

    //Passsert form
    public static final String PASSSERT_FORM = "//div[@class='passster-form']";
    public static final String PASSSERT_TITLE = "//form[@id='password-form']/h4";
    public static final String PASSSERT_HINT_TEXT = "//form[@id='password-form']/p";
    public static final String PASSSERT_PASSWORD = "//input[@placeholder='Enter your password..']";
    public static final String PASSSERT_SUBMIT_BUTTON = "//button[@id='passster_submit']";
    public static final String PASSSERT_ERROR_MESSAGE = "//span[@class='passster-error']";

    //Shortcode
    public static final String SHORTCODE = " [passster password=\"%s\"]%s[/passster]";


}
