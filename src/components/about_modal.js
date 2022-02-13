import './about_modal.css';

function AboutModal(props) {
  return (
    <div className="aboutModal">
      <div className="modal-content">
        This modal pops up with information about the dev team and game
      </div>
      <button 
        className="closeButton"
        onClick={() => props.toggleModal("about", false)}>
          X
      </button>
    </div>
  );
}

export default AboutModal;