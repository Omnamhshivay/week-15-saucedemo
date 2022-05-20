package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    public HomePage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(id = "user-name")
    WebElement userName;
    @CacheLookup
    @FindBy(id = "password")
    WebElement passWord;
    @CacheLookup
    @FindBy(id = "login-button")
    WebElement logInButton;


    public void enterUserNameAndPassword(String standard_user,String secret_sauce){
        sendTextToElement( userName,standard_user);
        sendTextToElement( passWord,secret_sauce);
    }
    public void clickOnLoginButton(){
        clickOnElement(logInButton);
    }



}
