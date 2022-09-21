const { Builder, By, Key, until } = require("selenium-webdriver");
fs = require('fs')
var restuesnts=  ['restaurant/mcdonald-s-boat-quay-delivery/SGDD04944',"restaurant/nana-original-thai-food-golden-mile-complex-delivery/SGDD01766",
"restaurant/drinifini-37a-south-bridge-road-islandwide-delivery-delivery/4-C22TSEXBV2MXMA","restaurant/wok-hey-funan-delivery/4-C2VKJ3U2C2JZTN","https://food.grab.com/sg/en/restaurant/little-ribbons-pasta-co-funan-delivery/4-C3JTGTBXJAXXR2"
,"https://food.grab.com/sg/en/restaurant/poke-theory-change-alley-mall-delivery/4-C2BTTP4CCX6VGT","https://food.grab.com/sg/en/restaurant/burger-king-hitachi-tower-delivery/4-CY3TEEVBJLMHUA","https://food.grab.com/sg/en/restaurant/dunkin-donuts-funan-mall-delivery/4-CYU3N7KCECKGNX","https://food.grab.com/sg/en/restaurant/subway-funan-delivery/4-CZDKG25AVYVAT6","https://food.grab.com/sg/en/restaurant/kebabs-faktory-funan-delivery/4-CZAWBCC1SEVYEA"]

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://food.grab.com/sg/en/");
  await driver
    .findElement(By.id("location-input"))
    .sendKeys("Singapore", Key.RETURN);
  await driver
    .findElement(By.xpath('//*[@id="page-content"]/div[2]/div/button'))
    .click();
 
  await driver.sleep(5 * 1000);

  var url = "https://food.grab.com/sg/en/";

  for(var res in restuesnts){

     var  newUrl=url+res;
     await driver.get(newUrl);
     var netWorkData = await driver.executeScript(
       "return window.performance.getEntries();"
     );
   
     console.log("Latitude"+netWorkData[0],netWorkData[1]);

fs.writeFile('text.txt',"Latitude"+netWorkData[0] , function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
  }

  fs.writeFile('text.txt',"longitude"+netWorkData[1] , function (err,data) {
   if (err) {
     return console.log(err);
   }
   console.log(data);
 });
   

 
}

example()