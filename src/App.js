import './App.css';
import {AboutModal, HowToPlayModal, SettingsModal, SharingModal} from "./components"


function App() {
  // TODO: need routing for FAQs

  const [modalState, setModalState]={
    about: false,
    howToPlay: false,
    settings: false,
    sharing: false
  };

  function toggleModal(modalName, open=true){ 
    let modalStateNew = {...modalState};
    if(open){
      modalStateNew[modalName]=true;
    }
    else{
      Object.values(modalStateNew).forEach(modalNameValue => false);
    }
  };

  return (
    <div className="App"> 
    Hi, what's up?
      {modalState["about"] && <AboutModal/>}
      {modalState["howToPlay"] && <HowToPlayModal/>}
      {modalState["settings"] && <SettingsModal/>}
      {modalState["sharing"] && <SharingModal/>}
      <header> 

        <div className="controls">
          <ul>
            <li><button toggleModal={toggleModal} onClick={()=>toggleModal("howToPlay")} >?</button></li>
            <li><button toggleModal={toggleModal} onClick={()=>toggleModal("about")}>i</button></li>
            <li><button toggleModal={toggleModal} onClick={()=>toggleModal("sharing")}>↪</button></li>
            <li><button toggleModal={toggleModal} onClick={()=>toggleModal("settings")}>\u2699</button></li>
          </ul>
        </div>
      </header>
        
    </div>
  );
}

export default App;
