function getJSON(url, callback) {
  let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
  let xhr = new XMLHttpRequest()
  xhr.onload = function () {
    callback(this.responseText)
  }
  xhr.open('GET', url, true)
  xhr.send()
}

export function getUsefulContents(url, callback) {
  getJSON(url, (data) => callback(JSON.parse(data)))
}
