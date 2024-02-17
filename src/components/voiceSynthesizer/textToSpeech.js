
const synth = window.speechSynthesis


export const textToSpeechA = (words) => {
    const utterance = new SpeechSynthesisUtterance(words)
    synth.speak(utterance)
}


export const textToSpeechB = (traductor) => {
    const utterance = new SpeechSynthesisUtterance(traductor)
    synth.speak(utterance)
}
