//function to convert GBP to EGP

function convertCurrency()
{
  const gbpAmount = document.getElementById("gbp-amount").value;
  const exchangeRate = 38.53;
  const egyptianPounds = gbpAmount * exchangeRate;
  document.getElementById("egp-amount").textContent = egyptianPounds;
}
