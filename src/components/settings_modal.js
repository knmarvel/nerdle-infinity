import './settings_modal.css';

function SettingsModal(props) {
  return (
    <div className="settingsModal">
      <div className="modal-content">
      This modal pops up with settings information
      <button 
        onClick={() => props.toggleModal("settings", false)}
        className="closeButton"
      >X
      </button>
      </div>
    </div>
  );
}

export default SettingsModal;