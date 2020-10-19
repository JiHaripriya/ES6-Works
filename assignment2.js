// QUESTION SET - 2
console.log(`----------------------------------------------------------------------------
QUESTION SET - 2\n----------------------------------------------------------------------------\n`)

const apparel = [
	{
		Name: "Jeans",
		Category: "clothes",
		Brand: "Levi",
		Actual_price: 2209,
		Discount: 10
    },
    {
		Name: "Silk Saree",
		Category: "clothes",
		Brand: "Soch",
		Actual_price: 6560,
		Discount: 33
    }, 
    {
		Name: "T-shirts",
		Category: "clothes",
		Brand: "Westworld",
		Actual_price: 850,
		Discount: 0
	},  
	{
		Name: "Dhothi",
		Category: "clothes",
		Brand: "MCR",
		Actual_price: 1570,
		Discount: 2
	}, 
    {
		Name: "Crocs",
		Category: "shoes",
		Brand: "Killer",
		Actual_price: 2797,
		Discount: 30
    }, 
    {
		Name: "90s Runner",
		Category: "shoes",
		Brand: "Puma",
		Actual_price: 4999,
		Discount: 50
    },
    {
		Name: "Men\'s Boots",
		Category: "shoes",
		Brand: "Puma",
		Actual_price: 3999,
		Discount: 50
    },
    {
		Name: "Diamond Ring",
		Category: "jewellery",
		Brand: "Bluestone",
		Actual_price: 14800,
		Discount: 0
    },
    {
		Name: "Gold earring",
		Category: "jewellery",
		Brand: "Tanishq",
		Actual_price: 21529,
		Discount: 6
    },
    {
		Name: "Choker",
		Category: "accessories",
		Brand: "Womanista",
		Actual_price: 129,
		Discount: 0
    },
    {
		Name: "Watch",
		Category: "accessories",
		Brand: "Sonic",
		Actual_price: 2534,
		Discount: 2
	}
]

/*1*/ 
const itemList = apparel.map((value) => value.Name)
console.log("Q-1\n", itemList)

/*2*/
const {Name:ItemName, Actual_price:Price, ...RestPropertyValue} = apparel.slice(1, 2)[0]
console.log("Q-2\n\n Extracted Name: ",ItemName, "\n Extracted Actual_price: ", Price, 
"\n Remaining properties:", RestPropertyValue)

/*3*/
const apparelCopy = JSON.parse(JSON.stringify(apparel))
for(let eachItem of apparelCopy) {
    Object.assign (eachItem, {Selling_price: (eachItem.Actual_price * (1 - eachItem.Discount / 100)).toFixed(2)})
}
console.log("Q-3\n", apparelCopy)

/*4*/
const sameBrandElements = apparel.filter(element => element.Brand === "Puma")
console.log("Q-4\n\n", sameBrandElements)

/*5*/
const productByCategory = apparel.reduce( (groups, item) => {
    groups[item.Category] = groups[item.Category] || [];
    groups[item.Category].push(item)
    return groups
}, {} );
console.log("Q-5\n\n", productByCategory)

/*6*/
const apparelItems = JSON.parse(JSON.stringify(apparel))

const sellingPriceCalculation = (item, discount) => {
    return {Selling_price: (item.Actual_price * (1 - discount / 100)).toFixed(2)}
}

// Sets all products discount value to 5%
const setDefaultDiscount5 = (item) => { 
    Object.assign(item, {Discount: 5}, sellingPriceCalculation(item, 5))
    return item
}

const setBrandDiscount = (items, brand, discount) => {
    for (let item of items) {
        if (item.Brand === brand) Object.assign (item, sellingPriceCalculation(item, discount))
        else setDefaultDiscount5(item) 
        // Adds additonal 2% discount
        if (item.Selling_price > 4000) Object.assign (item, {Selling_price: (item.Selling_price * (1 - 2 / 100)).toFixed(2)}) 
    }
    return items
}
console.log("Q-6\n", setBrandDiscount(apparelItems, "Puma", 50))