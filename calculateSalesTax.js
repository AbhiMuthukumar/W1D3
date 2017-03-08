function calculateSalesTax(salesData, taxRates){
  var salesTax = {};
  for (sale in salesData){
    if(!salesTax[salesData[sale].name]){
      salesTax[salesData[sale].name] = {};
      salesTax[salesData[sale].name].totalSales = 0;
      salesTax[salesData[sale].name].totalTaxes = 0;
      salesData[sale].sales.forEach(function(amount){
        salesTax[salesData[sale].name].totalSales += amount;
        salesTax[salesData[sale].name].totalTaxes += amount * taxRates[salesData[sale].province];
      });
    }
    else{
      salesData[sale].sales.forEach(function(amount){
        salesTax[salesData[sale].name].totalSales += amount;
        salesTax[salesData[sale].name].totalTaxes += amount * taxRates[salesData[sale].province];
      });
    }
  }
  return salesTax;
};

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);