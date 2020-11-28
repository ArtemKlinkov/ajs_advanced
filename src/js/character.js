export default class Character {
  constructor(name, type, attack, defence) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов.');
    } else {
      this.name = name;
    }

    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Неизвестный класс персонажа');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Персонаж мертв! Нельзя повысить уровень.');
    } else {
      this.health = 100;
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }

  set health(health) {
    if (health <= 0) {
      this.private_health = 0;
    } else if (health > 100) {
      this.private_health = 100;
    } else {
      this.private_health = health;
    }
  }

  get health() {
    return this.private_health;
  }
}
