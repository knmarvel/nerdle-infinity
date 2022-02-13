import './sharing_modal.css';

function SharingModal(props) {
  return (
    <div className="sharingModal">
      <div className='modal-content'>
        This modal pops up with sharing information:
        <ul>
          <li>
            at the end of the game
          </li>
          <li>
            when the share button is clicked
          </li>
        </ul>
        <button
          onClick={() => props.toggleModal("sharing", false)}
          className="closeButton"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default SharingModal;