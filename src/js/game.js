// eslint-disable-next-line max-classes-per-file
import Character from './domain';

class Game {
  start() {
    // eslint-disable-next-line no-console
    console.log('game started');
    this.character = new Character();
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export default Game;
module.exports = { GameSavingData, readGameSaving, writeGameSaving };
