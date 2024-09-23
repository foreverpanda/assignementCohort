/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function extractEnteries(obj){
  let entry = Object.entries(obj);

  return entry;
}

function calculateTotalSpentByCategory(transactions) {

  let expense = []

  for(let i = 0 ;i< transactions.length ; i++){

    let entries = extractEnteries(transactions[i]);
    let catValue = entries[3][1];
    let priceValue = entries[2][1]
    const data = {
      category : catValue,
      totalSpent : priceValue
    }

    expense.push(data)

    

  }
  return expense;
}

module.exports = calculateTotalSpentByCategory;
