import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../src/classes.js';

import { test, expect } from '@jest/globals';

test.each([
    [Bowman, 'Bowman', 25, 25],
    [Swordsman, 'Swordsman', 40, 10],
    [Magician, 'Magician', 10, 40],
    [Daemon, 'Daemon', 10, 40],
    [Undead, 'Undead', 25, 25],
    [Zombie, 'Zombie', 40, 10],
])('Should correctly create %s character', (ClassType, type, expectedAttack, expectedDefence) => {
    const character = new ClassType('Hero');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe(type);
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(expectedAttack);
    expect(character.defence).toBe(expectedDefence);
});

test('Should throw error for invalid name length', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('не создать такого');
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('не создать такого');
});

test('Should throw error for invalid type', () => {
    expect(() => new Character('Hero', 'InvalidType')).toThrow('не создать такого');
});

test('Should create Character with valid name and type', () => {
    const character = new Character('Hero', 'Bowman');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
});
