import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const GameSelect = ({ mainProps, boxProps, image }) => {
  return (
    <Box
      p={{ base: '16px', md: '30px' }}
      borderRadius='50%'
      zIndex='1'
      {...mainProps}
    >
      <Box
        p={{ base: '24px', md: '50px' }}
        backgroundColor='white'
        pos='relative'
        top={{ base: '50px', md: '90px' }}
        left='50%'
        zIndex='1'
        transform='translate(-50%,-50%)'
        borderRadius='50%'
        boxShadow='inset 0px 8px 8px 0px #a29999c9'
        {...boxProps}
      >
        <Image
          src={image}
          h={{ base: '50px', md: '80px' }}
          minW={{ base: '50px', md: '80px' }}
        />
      </Box>
    </Box>
  );
};

export default GameSelect;
