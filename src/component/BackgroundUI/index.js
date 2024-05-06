import { Box } from '@chakra-ui/react';
import React from 'react';
import '../../App.css';

const BackgroundUI = () => {
  return (
    <Box
      className='bgAnimation'
      p={{ base: '154', sm: '240px', lg: '350px' }}
      borderRadius='50%'
      backgroundColor='#a0bdea0d'
      pos='absolute'
      top='50%'
      left='50%'
      transform='translate(-50%, -50%)'
    >
      <Box
        p={{ base: '134px', sm: '210px', lg: '290px' }}
        borderRadius='50%'
        backgroundColor='#a0bdea0d'
        pos='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
      >
        <Box
          p={{ base: '114px', sm: '180px', lg: '230px' }}
          borderRadius='50%'
          backgroundColor='#a0bdea0d'
          pos='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
        >
          <Box
            p={{ base: '94px', sm: '150px', lg: '170px' }}
            borderRadius='50%'
            backgroundColor='#a0bdea0d'
            pos='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BackgroundUI;
