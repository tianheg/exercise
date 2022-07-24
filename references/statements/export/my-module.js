function cube(x) {
  return x*x*x
}

const foo = Math.PI + Math.SQRT2

var graph = {
  options: {
    color: 'red',
    thickness: '2.5px'
  },
  draw: function() {
    console.log('From graph draw function')
  }
}

export { cube, foo, graph }
