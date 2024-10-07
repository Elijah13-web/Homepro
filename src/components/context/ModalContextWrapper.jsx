// import React from 'react';
// import Modal from "../cards/Modal" ;
// import { useModal } from './ModalContext';

// // This component wraps the Modal component and provides a context to access the modal state.
// const ModalWrapper = () => {
//   const { isModalOpen, closeModal, modalContent } = useModal();

//   return (
//     <Modal isOpen={isModalOpen} onClose={closeModal}>
//       {modalContent}
//     </Modal>
//   );
// };

// export default ModalWrapper;

import React from 'react';
import Modal from "../cards/Modal";
import { useModal } from './ModalContext';
import AuthForm from '../../pages/auth/AuthForm';

const ModalWrapper = () => {
  const { isModalOpen, closeModal, openModal } = useModal();

  const openAuthModal = () => {
    openModal(<AuthForm />);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isModalOpen && <AuthForm />}
      </Modal>
    </>
  );
};

export default ModalWrapper;
