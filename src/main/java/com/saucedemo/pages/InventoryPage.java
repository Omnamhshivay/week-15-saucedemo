package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class InventoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(InventoryPage.class.getName());
    public InventoryPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='root']/div[@id='page_wrapper']/div[@id='contents_wrapper']/div[@id='header_container']/div[2]/div[2]/span[1]/select[1]")
    WebElement dropDwon;
    @CacheLookup
    @FindBy(xpath = "//option[@value='hilo']")
    WebElement highToLow;
    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-fleece-jacket']")
    WebElement costliest;
    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-onesie']")
    WebElement cheapestliest;
    @CacheLookup
    @FindBy(id = "shopping_cart_container")
    WebElement cart;




    public void selectPriceHighToLow(String hightolow){
        clickOnElement(dropDwon);
        clickOnElement(highToLow);
    }
    public void clickOnCheapestAndCostliestProduct(){
        clickOnElement(costliest);
        clickOnElement(cheapestliest);
    }
    public void openShoppingCart(){
        clickOnElement(cart);
    }
}
