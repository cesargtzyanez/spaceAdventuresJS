const totalAsteroids = 5;

function addAsteroids(total) {
  for(let i = 0; i < total; i++) {
    const rdmAsteroid = Math.ceil(Math.random() * 3);
    const top = Math.ceil( Math.random() * (window.innerHeight - 150 ) );

    const newAsteroid = document.createElement('img');
    newAsteroid.classList.add('asteroid');
    newAsteroid.style.top = top + 'px';
    newAsteroid.src = 'assets/asteroid_' + rdmAsteroid + '.png';

    document.querySelector('.game-wrapper').appendChild(newAsteroid);
  }
}

addAsteroids(totalAsteroids);