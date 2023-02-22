import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SignInForm from '../components/SignInForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function SignInModal({open, handleClose}) {

  return (
    <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
                  <SignInForm closeModal={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}