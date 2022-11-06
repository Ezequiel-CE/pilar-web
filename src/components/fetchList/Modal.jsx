import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import { capitalizeFirstLetter, fomartHability } from '../../lib/textFormater';

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const Modal = ({ data, handleClose, open }) => {
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <p style={{ textAlign: 'center' }}>
          {data ? capitalizeFirstLetter(data.name) : '_'}
        </p>
        <Box sx={{ display: 'inline-flex' }}>
          <Avatar
            sx={{ width: 150, height: 150 }}
            src={data ? data.sprites.front_default : '_'}
          >
            P
          </Avatar>
          <Avatar
            sx={{ width: 100, height: 100 }}
            src={data ? data.sprites.back_default : '_'}
          >
            P
          </Avatar>
        </Box>
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 18, fontWeight: 800 }}>Habilidades</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {data &&
              data.abilities &&
              data.abilities.map((h, index) => (
                <Typography key={index}>{fomartHability(h.ability.name)}</Typography>
              ))}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 18, fontWeight: 800 }}>Moviemientos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {data &&
              data.moves &&
              data.moves.map((m, index) => (
                <Typography key={index}>{fomartHability(m.move.name)}</Typography>
              ))}
          </AccordionDetails>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
