import axios from 'axios'
import { useEffect, useState } from 'react'
import '../TranslateBox/TranslateBox.css'

import { btnActiveEn, btnActiveFr, btnActiveEs, btnActiveEnII, btnActiveEsII, btnActiveFrII } from "../btnSelect/btnSelect.js";
import { wordValidation } from '../wordValidation/wordValidation.js'


export const TranslateBox = () => {

    let [words, setWords] = useState('Hello how are you?');
    let [languajeOrigin, setLanguajeOrigin] = useState('')
    let [languajeDestination, setLanguajeDestination] = useState('')
    const [traductor, setTraductor] = useState([])

    let [btnClickEn, setBtnClickEn] = useState(false)
    let [btnClickEs, setBtnClickEs] = useState(false)
    let [btnClickFr, setBtnClickFr] = useState(false)

    let [btnClickEnII, setBtnClickEnII] = useState(false)
    let [btnClickEsII, setBtnClickEsII] = useState(false)
    let [btnClickFrII, setBtnClickFrII] = useState(false)

    
    const translateBtn = async() =>{
    const urlBase = `https://api.mymemory.translated.net/get?q=${words}&langpair=${languajeOrigin}|${languajeDestination}`
        
        return axios.get(urlBase)
                .then((res) =>{ return setTraductor(res.data.responseData.translatedText),
                    
                    setTimeout(() => { return( 
                        setBtnClickEnII(false), 
                        setBtnClickEsII(false), 
                        setBtnClickFrII(false),
                        setBtnClickEn(false),
                        setBtnClickEs(false),
                        setBtnClickFr(false)
                        )}, 2000)
                    })
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
                    <button className={`${btnActiveEn({btnClickEn, btnClickEs, btnClickFr, languajeOrigin})}`} onClick={() => {setBtnClickEn(true); return setLanguajeOrigin('en')}}>English</button>
                    <button className={`${btnActiveFr({btnClickEn, btnClickEs, btnClickFr, languajeOrigin})}`} onClick={() => {setBtnClickFr(true); return setLanguajeOrigin('fr')}} >French</button>
                    <button className={`${btnActiveEs({btnClickEn, btnClickEs, btnClickFr, languajeOrigin})}`} onClick={() => {setBtnClickEs(true); return setLanguajeOrigin('es')}}>Spanish<img src="public/images/expand_down.svg" alt="desplegar" /></button>
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
                    <button className={`${btnActiveEnII({btnClickEnII, btnClickEsII, btnClickFrII, languajeDestination})}`} onClick={() => {setBtnClickEnII(true); return setLanguajeDestination('en')}}>English</button>
                    <button className={`${btnActiveEsII({btnClickEnII, btnClickEsII, btnClickFrII, languajeDestination})}`} onClick={() => {setBtnClickEsII(true); return setLanguajeDestination('es')}}>Spanish</button>
                    <button className={`${btnActiveFrII({btnClickEnII, btnClickEsII, btnClickFrII, languajeDestination})}`} onClick={() => {setBtnClickFrII(true); return setLanguajeDestination('fr')}}>French<img src="public/images/expand_down.svg" alt="desplegar" /></button>
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

