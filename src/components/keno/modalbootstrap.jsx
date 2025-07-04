import React, { useRef, useImperativeHandle, forwardRef } from "react";

const ModalBootstrap = forwardRef(({ id = "myModal", title = "Título", children }, ref) => {
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    openModal: () => {
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
    }
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
      <div className="modal-dialog modal-dialog-centered">
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
});

export default ModalBootstrap;