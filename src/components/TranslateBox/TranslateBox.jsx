import { dataTranslate } from '../../data/dataTranslate.js'
import { useEffect, useState } from 'react'
import '../TranslateBox/TranslateBox.css'


export const TranslateBox = () => {

     const [word, setWord] = useState('');


    const wordValidation = () =>{
        console.log('cantidad de caracteres', word.length);
        return word.length > 500 ? console.log("La palabra es mayor a 500 caracteres") : null;
    }

    useEffect(() =>{
        dataTranslate();
    },[])

    return(
        <div className='container'>
            <div className="containerB">
                <div className="boxTranslateBtnA">
                    <span>Detected Languaje</span>
                    <button>English</button>
                    <button>French</button>
                    <button>Spanish<img src="public/images/expand_down.svg" alt="desplegar" /></button>
                </div>

                <textarea 
                    name="textTranslate" 
                    id="textTranslate" 
                    value={word} 
                    onChange={(e) => {
                        wordValidation(); 
                        setWord(e.target.value)
                    }}
                >
                </textarea>
                <span>{`${word.length}/500`}</span>
                <div className='boxTranslateBtnB'>
                    <section>
                        <button><img src='public/images/sound_max_fill.svg' alt="altavoz" /></button>
                        <button><img src="public/images/copy.svg" alt="copiar" /></button>
                    </section>
                    <section>
                        <button id='btnTranslate'><img src="public/images/sort_alfa.svg" alt="alfa" />Translate</button>
                    </section>
                </div>

            </div>

            <div className="containerB">
                <div className="boxTranslateBtnA">
                    <button>English</button>
                    <button>French</button>
                    <button>Spanish<img src="public/images/expand_down.svg" alt="desplegar" /></button>
                </div>

                <textarea name="textTranslate" id="textTranslate"></textarea>

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