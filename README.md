### Decisions 
- Based on the cases and validations I'll work using Red-Green-Refactor pattern.
- Time is limited so I need to prioritize and I feel add value to the system, I mean add a new feature(Conjured) is more important that refactor all code, so I just be sure that all the basic cases that I be able to test because of time are good.

### Instructions:

1. Install dependencies `$ npm i`
2. Run `$ npm test`
3. You should see results of some test

- Code is also available on [Github](https://github.com/Atticusnd/gilded-rose/tree/main)
- You can find Git history on log.txt 

### To Do:
- Create functions to describe the behavior by item type
- Remove all unnecessary ifs, maybe using high order functions(ish) :p 
- Update code using some ES features and good practices
- Creating better uses cases on unit testing section and finishing all the cases


### Initial thoughts 
- After test for the first time I found that the test defined doesn't make sense but I think it's just an example and the code will not work because the if definitions are wrong
- Didn't understand why I should use "TextTest" tool but I'm familiar with the method defined on test folder so I keep working with that
- First I will add a console.log to see what is coming:
`[ Item { name: 'foo', sellIn: -1, quality: 0 } ]`
- 'Sulfuras' item didn't work, I supposed that if Sulfuras never sold SellIn value should be 0
