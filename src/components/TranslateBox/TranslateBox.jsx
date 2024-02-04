import axios from 'axios'
import { useEffect, useState } from 'react'
import '../TranslateBox/TranslateBox.css'


export const TranslateBox = () => {

    let [words, setWords] = useState('');
    const [languaje, setLanguaje] = useState('')
    const [traductor, setTraductor] = useState([])


    const wordValidation = () =>{
        console.log('cantidad de caracteres', words.length);
        return words.length > 500 ? console.log("La palabra es mayor a 500 caracteres") : null;
    }

   const english = 'en|en';
   const englishToItalian = 'en|it';
   const englishToSpanish = 'en|es';

    
    const translateBtn = async() =>{
    const urlBase = `https://api.mymemory.translated.net/get?q=${words}&langpair=${languaje}`
        
        return axios.get(urlBase)
                .then((res) =>{ return setTraductor(res.data.responseData.translatedText)})
                .catch((err) =>{console.log(err);})
    }


    useEffect(() =>{

        translateBtn
    })



    return(
        <div className='container'>
            <div className="containerB">
                <div className="boxTranslateBtnA">
                    <span>Detected Languaje</span>
                    <button onClick={() =>{return setLanguaje(english)}}>English</button>
                    <button onClick={() =>{return setLanguaje(englishToItalian)}} >French</button>
                    <button onClick={() =>{return setLanguaje(englishToSpanish)}}>Spanish<img src="public/images/expand_down.svg" alt="desplegar" /></button>
                </div>

                <textarea 
                    name="textTranslate" 
                    id="textTranslate" 
                    value={words} 
                    onChange={(e) => {
                        wordValidation(); 
                        setWords(e.target.value)
                    }}
                >
                </textarea>
                <span>{`${words.length}/500`}</span>
                <div className='boxTranslateBtnB'>
                    <section>
                        <button><img src='public/images/sound_max_fill.svg' alt="altavoz" /></button>
                        <button><img src="public/images/copy.svg" alt="copiar" /></button>
                    </section>
                    <section>
                        <button id='btnTranslate' onClick={() => translateBtn()} ><img src="public/images/sort_alfa.svg" alt="alfa" />Translate</button>
                    </section>
                </div>
            </div>

                        {/* parte del segundo cuadro */}

            <div className="containerB">
                <div className="boxTranslateBtnA">
                    <button>English</button>
                    <button>French</button>
                    <button>Spanish<img src="public/images/expand_down.svg" alt="desplegar" /></button>
                </div>

                <textarea 
                    name="textTranslate" 
                    id="textTranslate"
                     value={traductor}
                    // onChange={() => handleTraduction}
                >
                </textarea>

                <div className='boxTranslateBtnB'>
                    <section>
                        <button><img src='public/images/sound_max_fill.svg' alt="altavoz" /></button>
                        <button><img src="public/images/copy.svg" alt="copiar" /></button>
                    </section>
                </div>
            </div>
        </div>
    )
}
