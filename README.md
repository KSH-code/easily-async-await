# easily-async-await
손 쉽게 callback function 을 asynchronous 하게 사용할 수 있습니다.
## Usage
```
const { setTimeout } = require('../index')
async function () {
  await setTimeout(function () {
    return 'abab'
  }, 200)
}
```