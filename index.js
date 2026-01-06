import fs from 'fs'
import path from 'path'

const band = [
    { name : "Neck Deep",
      song : ["In Bloom", "December", "A Part of Me", "Serpents", "Motion Sickness"]
    },
    { name : "Green Day",
      song : ["Boulevard of Broken Dreams", "American Idiot", "Wake Me Up When September Ends", "21 Guns", "Holiday"]
    },
    { name : "Blink 182",
      song : ["All the Small Things", "I Miss You", "Whats My Age Again", "Adams Song", "Stay Together for the Kids"]
    }, 
    { name : "Perunggu",
      song : ["Ini Abadi", "33x", "Pastikan Riuh Akhiri Malammu", "Kalibata, 2012", "Gemilang"]
    },
    { name : "Dongker",
      song : ["disarankan di Bandung", "Bertaruh Pada Api", "Merusak Kesenangan", "Tuhan di Reruntuh Kota", "Sepenggal Sadar"]
    }
]

function generateMusic(){
  try {
    for (let i = 0; i < band.length; i++) {
      const namaBand = band[i];
      const dirBand = path.join("Music", namaBand.name)

      if (fs.existsSync(dirBand)) {
            console.log(`${dirBand} already exists`)
        } else {
            // fs.mkdirSync(dirBand);
            fs.mkdirSync(dirBand, { recursive: true })
        }

      for (let j = 0; j < namaBand.song.length; j++) {
        const songName = namaBand.song[j]
        const musicGenerate = path.join(dirBand, songName + ".mp3")

        fs.writeFileSync(musicGenerate, "")
      }
    }
  } catch (error) {
    console.log(error)
  }
}

generateMusic()

// fs.mkdir("music", (err)=>{
//   if (err){
//     console.log("Error creating directory", err)
//   }


// })

// function createBandFolder(band, callback) {
//   const bandPath = path.join("Music", band)
//   fs.mkdir(bandPath, { recursive: true }, (err) => {
//     if (err) {
//       console.error(`Error creating ${band} directory:`, err)
//       callback(err)
//       return
//     }
//     console.log(`Folder ${band} berhasil dibuat`)
//     const lagu = laguMap[band]
//     if (lagu) {
//       let count = 0
//       lagu.forEach((song) => {
//         const filePath = path.join(bandPath, `${song}.mp3`)
//         fs.writeFile(filePath, "", (err) => {
//           if (err) {
//             console.error(`Error creating ${song}.mp3:`, err)
//           } else {
//             console.log(`File ${song}.mp3 di ${band} berhasil dibuat`)
//           }
//           count++
//           if (count === lagu.length) {
//             callback()
//           }
//         })
//       })
//     } else {
//       console.log(`Band ${band} belum memiliki lagu di database.`)
//       callback()
//     }
//   })
// }

// namaBand.forEach((band) => {
//   createBandFolder(band, () => {
//     // done
//   })
// })

// async function createMusicStructure() {
//   try {
//     await fs.mkdir('.\musik', { recursive: true });
//     console.log('Direktori musik berhasil dibuat');

//     for (const artist of artis) {
//       await fs.mkdir(artistDir, { recursive: true });
//       console.log(`Folder ${artist} berhasil dibuat`);

//       const song = [];
//       for (let j = 1; j <= 5; j++) {
//         const songFile = path.join(artistDir, `lagu${j}.mp3`);
//         song.push(fs.writeFile(songFile, ''));
//       }
//       await Promise.all(song);
//       console.log(`5 file lagu di ${artist} berhasil dibuat`);
//     }

//     console.log('Semua direktori dan file berhasil dibuat');
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }

// createMusicStructure();

// const fs = require(`fs`)
// const bands = ["Niki", "Hindia", "Noah", "OneDirection", "JustinBieber"]
// let artist 

// fs.mkdir(`Music`,function(err){
//         if(err){
//             console.log(`Gagal membuat file "Music"` )
//         }else console.log(`Berhasil membuat file "Music"`)
//     })
// for(i=0; i<bands.length; i++){
//     artist = bands[i]
//     // console.log(artist)
//     fs.mkdir(`Music/${artist}`,function(err){
//         if(err){
//             console.log("Gagal membuat file")
//         }else console.log("Berhasil membuat file")

    
//     })
// }

