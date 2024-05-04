import React, { useContext } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import rock from './../../assets/icon-rock.svg';
import paper from './../../assets/icon-paper.svg';
import scissor from './../../assets/icon-scissors.svg';
import triangle from './../../assets/bg-triangle.svg';
import Game from '../Game';
import { GlobalContext } from '../../context/global.context';

const Layout = () => {
  // const [isOpen, setIsOpen] = useState([false, '']);
  const { handleOpen, isOpen } = useContext(GlobalContext);

  return (
    <Flex justifyContent='center'>
      {!isOpen[0] && (
        <Box pos='relative' width={{ base: '70%', sm: '100%' }}>
          <Image src={triangle} width='100%' />
          <Box
            p='24px'
            borderRadius='50%'
            backgroundColor='game.icons.paper'
            pos='absolute'
            top='0px'
            left='0px'
            transform='translate(-50%,-50%)'
            boxShadow='inset 0px -10px 12px 0px hsl(234, 55%, 35%)'
            onClick={() => handleOpen(true, 'paper')}
            cursor='pointer'
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

          <Box
            p='24px'
            borderRadius='50%'
            backgroundColor='game.icons.scissor'
            pos='absolute'
            top='0px'
            right='0px'
            transform='translate(50%,-50%)'
            boxShadow='inset 0px -10px 12px 4px hsl(23, 60%, 47%)'
            onClick={() => handleOpen(true, 'scissor')}
            cursor='pointer'
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

          <Box
            p='24px'
            borderRadius='50%'
            backgroundColor='game.icons.rock'
            pos='absolute'
            bottom='0px'
            left='50%'
            transform='translate(-50%,50%)'
            boxShadow='inset 0px -10px 12px 4px hsl(338, 100%, 30%)'
            onClick={() => handleOpen(true, 'rock')}
            cursor='pointer'
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
        </Box>
      )}
      {isOpen[0] && <Game />}
    </Flex>
  );
};

export default Layout;
