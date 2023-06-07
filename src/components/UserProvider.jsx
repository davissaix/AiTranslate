import React,{useState, useContext} from 'react';
import axios from 'axios'
const UserContext = React.createContext();


 export function useUserContext() {
    return useContext(UserContext);
 }

function UserProvider (props){
    const [english, setEnglish] = useState(1)
    const [germany, setGermany] = useState(1)
    const [france, setFrance] = useState(1)
   
    const [brazil, setBrazil] = useState(1)
    const [russian, setRussian] = useState(1)
    const [italian, setItalian] = useState(1)
    const [spanish, setSpanish] = useState(1)
    const [turkish, setTurkish] = useState(1)
    const [chinese, setChinese] = useState(1)
    const [japanese, setJapanese] = useState(1)
    // translate state
    const [english1, setEnglish1] = useState('translateY(0px)')
    const [germany1, setGermany1] = useState('translateY(0px)')
    const [france1, setFrance1] = useState('translateY(0px)')
    
    const [brazil1, setBrazil1] = useState('translateY(0px)')
    const [russian1, setRussian1] = useState('translateY(0px)')
    const [italian1, setItalian1] = useState('translateY(0px)')
    const [spanish1, setSpanish1] = useState('translateY(0px)')
    const [turkish1, setTurkish1] = useState('translateY(0px)')
    const [chinese1, setChinese1] = useState('translateY(0px)')
    const [japanese1, setJapanese1] = useState('translateY(0px)')

    function Ingles () {
    if (english===1 && english1==='translateY(0px)' ) {
        setEnglish(0.5);
        setEnglish1('translateY(-7px)');
    } else {
        setEnglish(1);
        setEnglish1('translateY(0px)')
    }}
    function Aleman(){
    if (germany===1 && germany1==='translateY(0px)' ) {
        setGermany(0.5)
        setGermany1('translateY(-7px)')  
    } else {
        setGermany(1)
        setGermany1('translateY(0px)')
    }}
    function Frances(){
    if (france===1 && france1==='translateY(0px)' ) {
        setFrance(0.5)
        setFrance1('translateY(-7px)')    
    } else {
        setFrance(1)
        setFrance1('translateY(0px)')
    }}
    function Brasil(){
    if (brazil===1 && brazil1==='translateY(0px)' ) {
        setBrazil(0.5)
        setBrazil1('translateY(-7px)')    
    } else {
        setBrazil(1)
        setBrazil1('translateY(0px)')
    }}  
    function Rusia(){
    if (russian===1 && russian1==='translateY(0px)' ) {
        setRussian(0.5)
        setRussian1('translateY(-7px)')    
        } else {
        setRussian(1)
        setRussian1('translateY(0px)')
    }}   
    function Italia(){
    if (italian===1 && italian1==='translateY(0px)' ) {
        setItalian(0.5)
        setItalian1('translateY(-7px)')    
        } else {
        setItalian(1)
        setItalian1('translateY(0px)')
    }}
    function Espana(){
        if (spanish===1 && spanish1==='translateY(0px)' ) {
            setSpanish(0.5)
            setSpanish1('translateY(-7px)')    
            } else {
            setSpanish(1)
            setSpanish1('translateY(0px)')
        }}
    function Turquia(){
        if (turkish===1 && turkish1==='translateY(0px)' ) {
            setTurkish(0.5)
            setTurkish1('translateY(-7px)')    
            } else {
            setTurkish(1)
            setTurkish1('translateY(0px)')
    }} 
    function China(){
        if (chinese===1 && chinese1==='translateY(0px)' ) {
            setChinese(0.5)
            setChinese1('translateY(-7px)')    
            } else {
            setChinese(1)
            setChinese1('translateY(0px)')
    }} 
    function Japon(){
        if (japanese===1 && japanese1==='translateY(0px)' ) {
            setJapanese(0.5)
            setJapanese1('translateY(-7px)')   
            } else {
            setJapanese(1)
            setJapanese1('translateY(0px)')
    }}

  //--------------------------------------------------------------
 //GoButton
    
    const languages = [english, germany, france, brazil, russian, italian, spanish, turkish, chinese, japanese]
    const LangSelected = []
    function GoButton (){
   
        const selection = []
        const language = ['GB', 'DE', 'FR', 'BR', 'RU', 'IT', 'ES', 'TR', 'CN', 'JP']
        languages.map (( lang, index) => { 
            if (lang === 0.5){
            selection.push(index) 
            }})
        language.map((lengua, indice) => {
        var iterator = selection.values();
            for (const elements of iterator){
            if (indice === (elements)){
            LangSelected.push(lengua)
        }}})
        console.log(selection)
        console.log(LangSelected)
    } 
//     const API_KEY = 'ff6374ca99b3252c66f2b521a9de5875130c0745'
//     const text='hi my friends'
//     async function translate(text) {
//     let res = await axios.post(
//     `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
//     { q: text, target: "es" }
//     );
//     let translation = res.data.data.translations[0].translatedText;
//     return translation;
//   }
  
    return (
        <UserContext.Provider value={{
            LangSelected,
            translate,
            GoButton,
            Ingles,
            Aleman,
            Frances,
            Brasil,
            Rusia,
            Italia,
            Espana,
            Turquia,
            China,
            Japon,
            english, 
            germany, 
            france, 
            brazil, 
            russian, 
            italian, 
            spanish, 
            turkish, 
            chinese, 
            japanese,
            english1, 
            germany1, 
            france1, 
            brazil1, 
            russian1, 
            italian1, 
            spanish1, 
            turkish1, 
            chinese1, 
            japanese1,
            }}>
            
                {props.children}
         
        </UserContext.Provider>  
    )

}
export  {UserContext, UserProvider};