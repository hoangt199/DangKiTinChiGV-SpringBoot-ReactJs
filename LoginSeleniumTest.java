package com.myapp.dktc;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginSeleniumTest {
    WebDriver driver;


    @Before
    public void start() throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\TQH\\Downloads\\chromedriver_win32\\chromedriver.exe");
        this.driver = new ChromeDriver();
        this.driver.manage().window().maximize();
        this.driver.get("http://localhost:3000/login");
        Thread.sleep(1000);
    }

    @After
    public void finish() throws InterruptedException {
        Thread.sleep(1000);
        this.driver.quit();
    }

    // Dang nhap thanh cong
    @Test
    public void CorrectIdPass() throws InterruptedException {
        WebElement boxID = this.driver.findElement(By.name("username"));
        WebElement boxPass = this.driver.findElement(By.name("password"));
        WebElement btnSubmit = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[4]/button"));
        boxID.sendKeys("giaovien1");
        boxPass.sendKeys("giaovien1");
        btnSubmit.click();

        Thread.sleep(1000);

        String currentUrl = this.driver.getCurrentUrl();
        String expectUrl = "http://localhost:3000/Home";

        Assert.assertEquals(currentUrl, expectUrl);
    }

    // Dang nhap voi ID dung va Pass sai
    @Test
    public void CorrectIdWrongPass() throws InterruptedException {
        WebElement boxID = this.driver.findElement(By.name("username"));
        WebElement boxPass = this.driver.findElement(By.name("password"));
        WebElement btnSubmit = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[4]/button"));
        boxID.sendKeys("giaovien1");
        boxPass.sendKeys("giaovien");
        btnSubmit.click();

        Thread.sleep(1000);

        WebElement notify = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[5]/div"));
        Assert.assertEquals("Error: Unauthorized", notify.getText());
    }

    // Dang nhap voi ID sai va Pass dung
    @Test
    public void WrongIdCorrectPass() throws InterruptedException {
        WebElement boxID = this.driver.findElement(By.name("username"));
        WebElement boxPass = this.driver.findElement(By.name("password"));
        WebElement btnSubmit = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[4]/button"));
        boxID.sendKeys("giaovien");
        boxPass.sendKeys("giaovien1");
        btnSubmit.click();

        Thread.sleep(1000);

        WebElement notify = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[5]/div"));
        Assert.assertEquals("Error: Unauthorized", notify.getText());
    }

    // ID sai pass sai

    @Test
    public void WrongIdWrongPass() throws InterruptedException {
        WebElement boxID = this.driver.findElement(By.name("username"));
        WebElement boxPass = this.driver.findElement(By.name("password"));
        WebElement btnSubmit = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[4]/button"));
        boxID.sendKeys("giaovien");
        boxPass.sendKeys("giaovien");
        btnSubmit.click();

        Thread.sleep(1000);

        WebElement notify = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[5]/div"));
        Assert.assertEquals("Error: Unauthorized", notify.getText());
    }

    // id trong
    @Test
    public void BlankId() throws InterruptedException {
        WebElement boxID = this.driver.findElement(By.name("username"));
        WebElement boxPass = this.driver.findElement(By.name("password"));
        WebElement btnSubmit = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[4]/button"));
        boxID.clear();
        boxPass.sendKeys("giaovien1");
        btnSubmit.click();

        Thread.sleep(1000);

        WebElement notify = this.driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/form/div[1]/div/div[2]"));
        Assert.assertEquals("This field is required!", notify.getText());
    }

    // pass trong
    @Test
    public void BlankPass() throws InterruptedException {
        WebElement boxID = this.driver.findElement(By.name("username"));
        WebElement boxPass = this.driver.findElement(By.name("password"));
        WebElement btnSubmit = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[4]/button"));
        boxID.sendKeys("giaovien1");
        boxPass.sendKeys("");
        btnSubmit.click();

        Thread.sleep(1000);

        WebElement notify = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[2]/div/div"));
        Assert.assertEquals("This field is required!", notify.getText());
    }

    // id trong pass trong
    @Test
    public void BlankPassBlankID() throws InterruptedException {
        WebElement boxID = this.driver.findElement(By.name("username"));
        WebElement boxPass = this.driver.findElement(By.name("password"));
        WebElement btnSubmit = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[4]/button"));
        boxID.sendKeys("giaovien1");
        boxPass.sendKeys("");
        btnSubmit.click();

        Thread.sleep(1000);

        WebElement notify = this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div[2]/div/div"));
        Assert.assertEquals("This field is required!", notify.getText());
    }
}
