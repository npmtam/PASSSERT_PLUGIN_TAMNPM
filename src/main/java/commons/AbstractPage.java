package commons;

import com.google.inject.internal.cglib.core.$Local;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageUI.HomePageUI;

public class AbstractPage {
    WebDriver driver;
    WebElement element;
    By by;
    Actions action;
    WebDriverWait waitExplicit;
    long shortTimeout = 3;
    long longTimeout = 15;

    public AbstractPage(WebDriver driver) {
        this.driver = driver;
        action = new Actions(driver);
    }

    public void openURL(String url) {
        driver.get(url);
    }

    public void hoverMouseToElement(String locator) {
        element = driver.findElement(By.xpath(locator));
        action.moveToElement(element).perform();
    }

    public void clickToElement(String locator) {
        element = driver.findElement(By.xpath(locator));
        element.click();
    }

    public void sendKeyToElement(String locator, String value) {
        element = driver.findElement(By.xpath(locator));
        element.clear();
        element.sendKeys(value);
    }

    public void sendKeyToElement(String locator, String attributeValue, String textValue) {
        locator = String.format(locator, attributeValue);
        element = driver.findElement(By.xpath(locator));
        element.clear();
        element.sendKeys(textValue);
    }

    public void sendShortCode(String locator, String password, String hiddenText){
        String shortCode = String.format(HomePageUI.SHORTCODE, password, hiddenText);
        System.out.println(shortCode);
        element = driver.findElement(By.xpath(locator));
        element.sendKeys(shortCode);
    }

    public boolean isElementDisplayed(String locator) {
        element = driver.findElement(By.xpath(locator));
        return element.isDisplayed();
    }

    public String getTextElement(String locator) {
        element = driver.findElement(By.xpath(locator));
        return element.getText();
    }

    public String getAttributeValue(String locator, String attributeName) {
        element = driver.findElement(By.xpath(locator));
        return element.getAttribute(attributeName);
    }
}
