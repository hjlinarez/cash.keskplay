import React, { useRef } from "react";

function pagar({ id = "myModal", title = "Título", children }) {
  const modalRef = useRef();

  // Esta función puede ser llamada desde el padre usando el ref
  const openModal = () => {
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  // Permite al padre acceder a openModal
  React.useImperativeHandle(children.ref, () => ({
    openModal,
  }));

  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={id + "Label"}
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={id + "Label"}>
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(pagar);