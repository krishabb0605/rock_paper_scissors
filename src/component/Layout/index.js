import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import rock from './../../assets/icon-rock.svg';
import paper from './../../assets/icon-paper.svg';
import scissor from './../../assets/icon-scissors.svg';
import triangle from './../../assets/bg-triangle.svg';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <Box pos='relative' width={{ base: '70%', sm: '100%' }}>
      <Image src={triangle} width='100%' />
      <NavLink to='/game' state={{ data: 'paper' }}>
        <Box
          p='24px'
          borderRadius='50%'
          backgroundColor='game.icons.paper'
          pos='absolute'
          top='0px'
          left='0px'
          transform='translate(-50%,-50%)'
          boxShadow='inset 0px -10px 12px 0px hsl(234, 55%, 35%)'
        >
          <Box
            p='20px'
            backgroundColor='white'
            borderRadius='50%'
            boxShadow='inset 0px 8px 8px 0px #a29999c9'
          >
            <Image
              src={paper}
              h={{ base: '50px', sm: '80px' }}
              minW={{ base: '50px', sm: '80px' }}
            />
          </Box>
        </Box>
      </NavLink>

      <NavLink to='/game' state={{ data: 'scissor' }}>
        <Box
          p='24px'
          borderRadius='50%'
          backgroundColor='game.icons.scissor'
          pos='absolute'
          top='0px'
          right='0px'
          transform='translate(50%,-50%)'
          boxShadow='inset 0px -10px 12px 4px hsl(23, 60%, 47%)'
        >
          <Box
            p='20px'
            backgroundColor='white'
            borderRadius='50%'
            boxShadow='inset 0px 8px 8px 0px #a29999c9'
          >
            <Image
              src={scissor}
              h={{ base: '50px', sm: '80px' }}
              minW={{ base: '50px', sm: '80px' }}
            />
          </Box>
        </Box>
      </NavLink>

      <NavLink to='/game' state={{ data: 'rock' }}>
        <Box
          p='24px'
          borderRadius='50%'
          backgroundColor='game.icons.rock'
          pos='absolute'
          bottom='0px'
          left='50%'
          transform='translate(-50%,50%)'
          boxShadow='inset 0px -10px 12px 4px hsl(338, 100%, 30%)'
        >
          <Box
            p='20px'
            backgroundColor='white'
            borderRadius='50%'
            boxShadow='inset 0px 8px 8px 0px #a29999c9'
          >
            <Image
              src={rock}
              h={{ base: '50px', sm: '80px' }}
              minW={{ base: '50px', sm: '80px' }}
            />
          </Box>
        </Box>
      </NavLink>
    </Box>
  );
};

export default Layout;
