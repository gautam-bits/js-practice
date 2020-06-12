var h1Elements = document.getElementsByTagName("h1");
var circles = []
var shape = 1 ;
var keyData = {

  q: {
    sound: new Howl({
      src: ['assets/sounds/sounds/bubbles.mp3']
    }),
    color: '#1abc9c'
  },
  w: {
    sound: new Howl({
      src: ['assets/sounds/sounds/clay.mp3']
    }),
    color: '#2ecc71'
  },
  e: {
    sound: new Howl({
      src: ['assets/sounds/sounds/confetti.mp3']
    }),
    color: '#3498db'
  },
  r: {
    sound: new Howl({
      src: ['assets/sounds/sounds/corona.mp3']
    }),
    color: '#9b59b6'
  },
  t: {
    sound: new Howl({
      src: ['assets/sounds/sounds/dotted-spiral.mp3']
    }),
    color: '#34495e'
  },
  y: {
    sound: new Howl({
      src: ['assets/sounds/sounds/flash-1.mp3']
    }),
    color: '#16a085'
  },
  u: {
    sound: new Howl({
      src: ['assets/sounds/sounds/flash-2.mp3']
    }),
    color: '#27ae60'
  },
  i: {
    sound: new Howl({
      src: ['assets/sounds/sounds/flash-3.mp3']
    }),
    color: '#2980b9'
  },
  o: {
    sound: new Howl({
      src: ['assets/sounds/sounds/glimmer.mp3']
    }),
    color: '#8e44ad'
  },
  p: {
    sound: new Howl({
      src: ['assets/sounds/sounds/moon.mp3']
    }),
    color: '#2c3e50'
  },
  a: {
    sound: new Howl({
      src: ['assets/sounds/sounds/pinwheel.mp3']
    }),
    color: '#f1c40f'
  },
  s: {
    sound: new Howl({
      src: ['assets/sounds/sounds/piston-1.mp3']
    }),
    color: '#e67e22'
  },
  d: {
    sound: new Howl({
      src: ['assets/sounds/sounds/piston-2.mp3']
    }),
    color: '#e74c3c'
  },
  f: {
    sound: new Howl({
      src: ['assets/sounds/sounds/prism-1.mp3']
    }),
    color: '#95a5a6'
  },
  g: {
    sound: new Howl({
      src: ['assets/sounds/sounds/prism-2.mp3']
    }),
    color: '#f39c12'
  },
  h: {
    sound: new Howl({
      src: ['assets/sounds/sounds/prism-3.mp3']
    }),
    color: '#d35400'
  },
  j: {
    sound: new Howl({
      src: ['assets/sounds/sounds/splits.mp3']
    }),
    color: '#1abc9c'
  },
  k: {
    sound: new Howl({
      src: ['assets/sounds/sounds/squiggle.mp3']
    }),
    color: '#2ecc71'
  },
  l: {
    sound: new Howl({
      src: ['assets/sounds/sounds/strike.mp3']
    }),
    color: '#3498db'
  },
  z: {
    sound: new Howl({
      src: ['assets/sounds/sounds/suspension.mp3']
    }),
    color: '#9b59b6'
  },
  x: {
    sound: new Howl({
      src: ['assets/sounds/sounds/timer.mp3']
    }),
    color: '#34495e'
  },
  c: {
    sound: new Howl({
      src: ['assets/sounds/sounds/ufo.mp3']
    }),
    color: '#16a085'
  },
  v: {
    sound: new Howl({
      src: ['assets/sounds/sounds/veil.mp3']
    }),
    color: '#27ae60'
  },
  b: {
    sound: new Howl({
      src: ['assets/sounds/sounds/wipe.mp3']
    }),
    color: '#2980b9'
  },
  n: {
    sound: new Howl({
      src: ['assets/sounds/sounds/zig-zag.mp3']
    }),
    color: '#8e44ad'
  },
  m: {
    sound: new Howl({
      src: ['assets/sounds/sounds/moon.mp3']
    }),
    color: '#2c3e50'
  }
}


function onKeyDown(event) {
  h1Elements[0].style.color = keyData[event.key].color;
  var maxPoint = new Point(view.size.width, view.size.height)
  var randomPoint = Point.random()
  var point = maxPoint * randomPoint
  if(shape%3 == 1)
  {
    var newCircle = Path.Circle(point, 200)
    shape++
    shape %= 3
  }
  else if(shape%3 == 2)
  {
    var xx = point.x 
    var yy = point.y
    xx += 350
    yy += 350
    var point2 = new Point(xx,yy)
    var newCircle = Path.Rectangle(point, point2)
    shape++
    shape %= 3
  }
  else
  {
    var newCircle =  Path.RegularPolygon(point, 3, 220)
    shape++
    shape %= 3
  }
  newCircle.fillColor = keyData[event.key].color
  keyData[event.key].sound.play()
  circles.push(newCircle)
}

function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    var magx = Math.random()*40;
    var magy = Math.sqrt(1600 - (magx*magx));
    var dir = Math.floor(Math.random()*4)
    if(dir === 0)
    {
      circles[i].position.x += magx;
      circles[i].position.y += magy;
    }
    else if(dir === 1)
    {
      circles[i].position.x -= magx;
      circles[i].position.y += magy;
    }
    if(dir === 2)
    {
      circles[i].position.x += magx;
      circles[i].position.y -= magy;
    }
    if(dir === 3)
    {
      circles[i].position.x -= magx;
      circles[i].position.y -= magy;
    }

    circles[i].fillColor.hue += 10
    circles[i].scale(0.9)
    circles[i].rotate(7);
    
    if (circles[i].area < 1) {
      circles[i].remove() // remove the circle from the canvas
      circles.splice(i, 1) // remove the circle from the array
      i-- // decrement i so that the loop doesn't skip a circle because of .splice()
      //console.log(circles)
    }
  }
}
