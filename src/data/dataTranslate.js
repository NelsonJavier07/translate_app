// import axios from 'axios'
// import { setTraductor, setBtnClickFr, setBtnClickEs, setBtnClickEn, setBtnClickFrII, setBtnClickEsII, setBtnClickEnII } from '../components/TranslateBox/TranslateBox.jsx'
// import { useState } from 'react' 

// export const translateBtn = async({words, languajeOrigin, languajeDestination}) =>{
//     let []
//     const urlBase = `https://api.mymemory.translated.net/get?q=${words}&langpair=${languajeOrigin}|${languajeDestination}`
        
//         return axios.get(urlBase)
//                 .then((res) =>{ return setTraductor(res.data.responseData.translatedText),
//                     setTimeout(() => { return( 
//                         setBtnClickEnII(false), 
//                         setBtnClickEsII(false), 
//                         setBtnClickFrII(false),
//                         setBtnClickEn(false),
//                         setBtnClickEs(false),
//                         setBtnClickFr(false)
//                         )}, 2000)
//                     })
//                 .catch((err) =>{console.log(err);})
//     }



//     // const q = 'Hello World!';
//     // const langpair = 'en|it';
// export const dataTranslate = () =>{
    
//     // const urlBase = 'https://api.mymemory.translated.net/get?'
//     const urlBase = 'https://api.mymemory.translated.net/get?'
//     //'https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=en|it'
//     return(
//         axios.get(urlBase)
//         .then((res) => console.log('Entro por then', res.data))
//         .catch((err) => console.log('Entro por catch', err))
//     )

// }

