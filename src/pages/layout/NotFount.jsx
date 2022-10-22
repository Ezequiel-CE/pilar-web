import errorIcon from '../../assets/image/404.png';
import { Container } from '@mui/material';

const NotFound = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
      <img src={errorIcon} alt="404 page" />
    </Container>
  );
};

export default NotFound;
