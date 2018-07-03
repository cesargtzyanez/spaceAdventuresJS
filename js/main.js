const totalAsteroids = 5;

const Asteroid = function (imageIndex, top, speed = 12) {

  this.getAsteroid = function () {
    const newAsteroid = document.createElement('img');
    newAsteroid.classList.add('asteroid');
    newAsteroid.style.top = top + 'px';
    newAsteroid.style.animationDuration = speed + 's';
    newAsteroid.src = 'assets/asteroid_' + imageIndex + '.png';

    return newAsteroid;
  };

};

function addAsteroids(total) {
  for(let i = 0; i < total; i++) {
    const rdmAsteroid = Math.ceil(Math.random() * 3);
    const top = Math.ceil( Math.random() * (window.innerHeight - 150 ) );
    const speed = 8 + Math.ceil( Math.random()*8 );

    /* Old way to create an Asteroid
    const newAsteroid = document.createElement('img');
    newAsteroid.classList.add('asteroid');
    newAsteroid.style.top = top + 'px';
    newAsteroid.src = 'assets/asteroid_' + rdmAsteroid + '.png';*/

    // New way to create an asteroid using constructors
    const newAsteroid = new Asteroid(rdmAsteroid, top, speed);

    document.querySelector('.game-wrapper').appendChild(newAsteroid.getAsteroid());
  }
}

addAsteroids(totalAsteroids);