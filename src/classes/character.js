class Character {
    constructor(name, type) {
        if ((typeof name === 'string') && (name.length >= 2) && (name.length <= 10) && (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type))) {
            this.name = name;
            this.type = type;
            this.health = 100;
            this.level = 1;
        } else {
            throw new Error('не создать такого');
        }
    }

};

export {Character};
