#### Initial thoughts 
- Didn't understand text-based approval testing and why I should use "TextTest" but I familiar with the method defined on test folder so I keep working with that
- After test for the first time I found that the test defined doesn't make sense but I think it's just an example and the code will not work because the if definitions are wrong
- First I will add a console.log to see what is coming:
`[ Item { name: 'foo', sellIn: -1, quality: 0 } ]`

- I'll add to my first test sellIn and quality and the correct name that we expect
- After basic operation it's done we start to see whats happen with "special cases" creating new test cases
- I'll work using Red-Green-Refactor pattern
- 'Sulfuras' item didn't work, suposed that if Sulfuras never sold SellIn value should be 0
