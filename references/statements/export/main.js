import { cube, foo, graph } from './my-module.js'

graph.options = {
  color: 'green',
  thickness: '3.5px'
}

graph.draw()
console.log(cube(3))
console.log(foo)
