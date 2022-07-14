import { getUsefulContents } from './file.js'

getUsefulContents('http://www.example.com', data => {
  doSomethingUseful(data)
})

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#examples
