import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import NavBar from './nav';
import Footer from './footer';

const Layout = ({ children }) => (
  <Box background={'#880085'} color="pink.200">
    <NavBar />
    <Box margin="0 auto" maxW={{ base: '90vw', md: '800px' }}>
      <Outlet />
    </Box>
    <Footer />
  </Box>
);

export default Layout;
