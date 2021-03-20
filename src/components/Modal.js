function Modal(props) {
  // Props:
  // >>toggle: function - from parent that toggles drawer. No agruments.
  // >>open: boolean - is drawer currently open.

  const { show, onHide } = props;

  // Trigger onHide for if a user clicks the background, but not if they click a child of the background (IE: The modal itself)
  const closeOnBgClick = (e) => {
    if (e.currentTarget === e.target) {
      onHide(e);
    }
  }

  return show ? (
    <div id="modal-background pointer-events-none" className="modal__background" onClick={closeOnBgClick}>
      <div className="mx-auto pointer-events-auto">
        <div id="modal-main" className="w-72 bg-white rounded-md mx-auto p-4">
          <div className="flex flex-row justify-end w-full">
            <button
              id="modal-x"
              className="modal__x"
              aria-label="close"
              onClick={onHide}
            >
              x
            </button>
          </div>
          <div className="mx-auto text-center">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Modal;
