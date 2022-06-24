import React,{useState, useContext} from 'react';

const UserContext = React.createContext();


// export function useUserContext() {
//     return useContext(userContext);
// }

function UserProvider (props){
  
    const Holi = () => {
    return(
        <p> Holisss</p>
    )
  }

  //--------------------------------------------------------------
 // goButton
  const [spanish, setSpanish] = useState(1)
  
  /*const languages = [spanish]
  function goButton (){
      // console.log(languages)
      const selection = []
      const language = ['EN', 'DE', 'FR', 'BR', 'RU', 'IT', 'ES', 'TR', 'ZH', 'JA']
      const langSelected = []
      // const inputFlag = [];

      languages.map((lang, index) => {
          if (lang === 0.5) {
              selection.push(index)
          }
      })
      language.map((lengua, indice) => {
          var iterator = selection.values();
          for (const elements of iterator) {
              if (indice === (elements)) {
                  langSelected.push(lengua)
              }
          }
      })
      console.log(selection)
      console.log(langSelected)
      // onAddBtnClick();
      // console.log(inputFlag)

    } 
*/


    return (
        <UserContext.Provider value={{
            Holi,
            spanish,
            setSpanish,
            }}>
            
                {props.children}
         
        </UserContext.Provider>  
    )

}
export  {UserContext, UserProvider};