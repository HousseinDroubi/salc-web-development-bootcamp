let price = undefined;

// The following will execute the right side expression even if price is undefined, null, false, 0, NaN, or ""
price || console.log(`price is ${price}`);

// The following will print the price if it's not undefined, null, false, 0, NaN, or "", otherwise it will print 'empty'
console.warn(`price is ${price || 'empty'}`);