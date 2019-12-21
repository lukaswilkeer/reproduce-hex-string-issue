# reproduce-hex-string-issue

### Reproduceble example of toHexString problem.

This issue was referenced at [automattic/mongoose #8423](https://github.com/Automattic/mongoose/issues/8423)

The problem could be solved using a middleware on get method of a model to convert the string of a BSON type to a hex string on init of project.
using the method `toString()`, removing the timestamp and the random number, or using `toHexString()` of a BSON buffer.
[Mentioned here](https://github.com/Automattic/mongoose/issues/7968).

[quote]
```
// Works if you put this line here
mongoose.ObjectId.get(v => v.toString());
```

**To test:**

`npm install`

`npm test`

Before you'll need to import the mongo data, using mongoimport:

```mongoimport --db=blink --collection=clocks```
