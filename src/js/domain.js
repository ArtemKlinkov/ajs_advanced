import fetchData from './http';

class Character {
}

export function lifebarColor(character) {
  if (!character) {
    throw new Error('Не передан персонаж!');
  }

  const characterHealth = character.health;

  if (characterHealth < 15) {
    return 'critical';
  }

  if (characterHealth >= 15 && characterHealth < 50) {
    return 'wounded';
  }

  return 'healthy';
}

export function sortCharacters(characters) {
  if (!characters) {
    throw new Error('Не переданы персонажи для сортировки!');
  }

  return characters.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }
    return 0;
  });
}

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}
export default Character;
