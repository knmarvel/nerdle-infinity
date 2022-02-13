import './how_to_play_modal.css';

function How_To_Play_Modal(props) {
  return (
    <div className="howToPlayModal">
      <div className="modal-content">
        This modal pops up with rules when clicked
        <button
           onClick={() => props.toggleModal("howToPlay", false)}
           className="closeButton"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default How_To_Play_Modal;