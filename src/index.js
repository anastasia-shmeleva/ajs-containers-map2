const userSettings = new Map();
const defaultSettings = new Map();

export default class Settings {
  constructor(theme, music, difficulty) {
    if (theme !== 'dark' && theme !== 'light' && theme !== 'gray') throw new Error('выберете из тем \'dark\', \'light\' или \'gray\'');
    if (music !== 'trance' && music !== 'pop' && music !== 'chillout' && music !== 'rock' && music !== 'off') throw new Error('выберете из \'trance\', \'pop\', \'rock\', \'off\' или \'chillout\'');
    if (difficulty !== 'easy' && difficulty !== 'normal' && difficulty !== 'hard' && difficulty !== 'nightmare') throw new Error('выберете из тем \'easy\', \'normal\', \'hard\' или \'nightmare\'');
    defaultSettings.set(this, { theme: 'dark', music: 'trance', difficulty: 'easy' });
    userSettings.set(this, { theme, music, difficulty });
  }

  settings() {
    return userSettings.get(this);
  }
}
