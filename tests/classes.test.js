import { Character } from '../src/classes/character.js';
import { Bowman } from '../src/classes/bowman.js';
import { Swordsman } from '../src/classes/swordsman.js';
import { Magician } from '../src/classes/magician.js';
import { Daemon } from '../src/classes/daemon.js';
import { Undead } from '../src/classes/undead.js';
import { Zombie } from '../src/classes/zombie.js';

import { test, expect } from '@jest/globals';

test.each([
    [Bowman, { name: 'Hero', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25 }],
    [Swordsman, { name: 'Hero', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10 }],
    [Magician, { name: 'Hero', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40 }],
    [Daemon, { name: 'Hero', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40 }],
    [Undead, { name: 'Hero', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25 }],
    [Zombie, { name: 'Hero', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10 }],
])('Should correctly create %s character', (ClassType, expectedCharacter) => {
    const character = new ClassType('Hero');
    expect(character).toEqual(expectedCharacter);
});

test('Should throw error for invalid name length', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('не создать такого');
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('не создать такого');
});

test('Should throw error for invalid type', () => {
    expect(() => new Character('Hero', 'InvalidType')).toThrow('не создать такого');
});

test('Should create Character with valid name and type', () => {
    const expectedCharacter = { name: 'Hero', type: 'Bowman', health: 100, level: 1 };
    const character = new Character('Hero', 'Bowman');
    expect(character).toEqual(expectedCharacter);
});
