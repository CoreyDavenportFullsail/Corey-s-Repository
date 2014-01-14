/**
 * Created by Corey Davenport on 1/13/14. "Discounts"
 */
//Purpose of this program is to display price of discounted item, before and after sales tax

var originalPrice= 100;
var discountPercent=.20;
var item="Sweater";
var salesTax=.06;

//these are the givens

var discountedPrice= originalPrice-(originalPrice*discountPercent);
var finalPrice=(originalPrice*salesTax)+discountedPrice;

console.log("Your" + " " + item + " " + "was originally $" + originalPrice + ", but after 20% discount, it is now $"
             + discountedPrice + " " + "without tax, and $" + finalPrice + " " + "with tax.");