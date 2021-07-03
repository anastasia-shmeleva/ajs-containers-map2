/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Settings from '../index';

test('gets correct user settings', () => {
  const newSet = new Settings('light', 'pop', 'normal');
  expect(newSet.settings()).toEqual({ theme: 'light', music: 'pop', difficulty: 'normal' });
});

test('Error theme', () => {
  expect(() => {
    const newSet = new Settings('sparkly', 'pop', 'normal');
    throw new Error('выберете из тем \'dark\', \'light\' или \'gray\'');
  }).toThrow();
});

test('Error theme', () => {
  expect(() => {
    const newSet = new Settings('light', 'heavy-metal', 'normal');
    throw new Error('выберете из \'trance\', \'pop\', \'rock\', \'off\' или \'chillout\'');
  }).toThrow();
});

test('Error theme', () => {
  expect(() => {
    const newSet = new Settings('light', 'pop', 'semi-hard');
    throw new Error('выберете из тем \'easy\', \'normal\', \'hard\' или \'nightmare\'');
  }).toThrow();
});
