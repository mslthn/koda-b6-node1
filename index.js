const fs = require('fs').promises;
const path = require('path');

const artis = ["Justin Bieber", "Oasis", "Westlife", "Rex Orange County", "Billie Eilish"];

async function createMusicStructure() {
  try {
    await fs.mkdir('./musik', { recursive: true });
    console.log('Direktori musik berhasil dibuat');

    for (const artist of artis) {
      const artistDir = path.join('./musik', artist.replace(/\s+/g, '_'));
      await fs.mkdir(artistDir, { recursive: true });
      console.log(`Folder ${artist} berhasil dibuat`);

      // const song = [];
      // for (let j = 1; j <= 5; j++) {
      //   const songFile = path.join(artistDir, `lagu${j}.mp3`);
      //   song.push(fs.writeFile(songFile, ''));
      // }
      // await Promise.all(song);
      // console.log(`5 file lagu di ${artist} berhasil dibuat`);
    }

    console.log('Semua direktori dan file berhasil dibuat');
  } catch (err) {
    console.error('Error:', err);
  }
}

createMusicStructure();

