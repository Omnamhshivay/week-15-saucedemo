package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckOutPage extends Utility {
    private static final Logger log = LogManager.getLogger(CheckOutPage.class.getName());
    public CheckOutPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(id = "first-name")
    WebElement fname;
    @CacheLookup
    @FindBy(id = "last-name")
    WebElement lname;
    @CacheLookup
    @FindBy(id = "postal-code")
    WebElement postalcode;
    @CacheLookup
    @FindBy(id = "continue")
    WebElement continueButton;
    @CacheLookup
    @FindBy(id = "finish")
    WebElement finishButton;
    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'THANK YOU FOR YOUR ORDER')]")
    WebElement thankYouText;


    public void enterFirstnameLastnameAndPostalcode(String firstName,String lastName,String PostalCode){
        sendTextToElement(fname,firstName);
        sendTextToElement(lname,lastName);
        sendTextToElement(postalcode,PostalCode);
    }
    public void clickOnContinueButton(){
        clickOnElement(continueButton);
    }
    public void clickOnFinishButton(){
        clickOnElement(finishButton);
    }
    public String getThankYouForYourOrder(){
        return getTextFromElement(thankYouText);

    }

}
