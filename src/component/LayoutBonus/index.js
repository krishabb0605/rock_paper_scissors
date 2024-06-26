import React, { useContext } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import rock from './../../assets/icon-rock.svg';
import paper from './../../assets/icon-paper.svg';
import scissor from './../../assets/icon-scissors.svg';
import spock from './../../assets/icon-spock.svg';
import lizard from './../../assets/icon-lizard.svg';
import pentagon from './../../assets/bg-pentagon.svg';
import Game from '../Game';
import { GlobalContext } from '../../context/global.context';
import './../../App.css';

const LayoutBonus = () => {
  const { handleOpen, isGameOpen, instantChange } = useContext(GlobalContext);

  return (
    <Flex justifyContent='center'>
      {!isGameOpen[0] && (
        <Box pos='relative' width={{ base: '70%', sm: '100%' }}>
          <Image
            src={pentagon}
            width='100%'
            visibility={instantChange ? 'hidden' : 'visible'}
          />
          <Box
            p={{ base: '16px', sm: '24px' }}
            borderRadius='50%'
            backgroundColor='game.icons.scissor'
            pos='absolute'
            top='0px'
            left='0px'
            transform='translate(50%,-50%)'
            boxShadow='inset 0px -10px 12px 4px hsl(23, 60%, 47%)'
            onClick={() => {
              handleOpen(true, 'scissor');
            }}
            className={instantChange && 'scissorAnimation'}
            cursor='pointer'
          >
            <Box
              p={{ base: '16px', sm: '20px' }}
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
            p={{ base: '16px', sm: '24px' }}
            borderRadius='50%'
            backgroundColor='game.icons.paper'
            pos='absolute'
            top='40%'
            right='0px'
            transform='translate(50%,-50%)'
            boxShadow='inset 0px -10px 12px 0px hsl(234, 55%, 35%)'
            onClick={() => {
              handleOpen(true, 'paper');
            }}
            className={instantChange && 'animationPaper'}
            cursor='pointer'
          >
            <Box
              p={{ base: '16px', sm: '20px' }}
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
            p={{ base: '16px', sm: '24px' }}
            borderRadius='50%'
            backgroundColor='game.icons.rock'
            pos='absolute'
            bottom='0px'
            right='40%'
            transform='translate(100%,50%)'
            boxShadow='inset 0px -10px 12px 4px hsl(338, 100%, 30%)'
            onClick={() => {
              handleOpen(true, 'rock');
            }}
            className={instantChange && 'animationRock'}
            cursor='pointer'
          >
            <Box
              p={{ base: '16px', sm: '20px' }}
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

          <Box
            p={{ base: '16px', sm: '24px' }}
            borderRadius='50%'
            backgroundColor='game.icons.lizard'
            pos='absolute'
            bottom='0px'
            left='20%'
            transform='translate(-50%,50%)'
            boxShadow='inset 0px -10px 12px 4px hsl(270, 100%, 30%)'
            onClick={() => {
              handleOpen(true, 'lizard');
            }}
            className={instantChange && 'animationLizard'}
            cursor='pointer'
          >
            <Box
              p={{ base: '16px', sm: '20px' }}
              backgroundColor='white'
              borderRadius='50%'
              boxShadow='inset 0px 8px 8px 0px #a29999c9'
            >
              <Image
                src={lizard}
                h={{ base: '50px', sm: '80px' }}
                minW={{ base: '50px', sm: '80px' }}
              />
            </Box>
          </Box>

          <Box
            p={{ base: '16px', sm: '24px' }}
            borderRadius='50%'
            backgroundColor='game.icons.cyan'
            pos='absolute'
            bottom='60%'
            left='0'
            transform='translate(-50%,50%)'
            boxShadow='inset 0px -10px 12px 4px hsl(200, 100%, 30%)'
            onClick={() => {
              handleOpen(true, 'spock');
            }}
            className={instantChange && 'animationSpock'}
            cursor='pointer'
          >
            <Box
              p={{ base: '16px', sm: '20px' }}
              backgroundColor='white'
              borderRadius='50%'
              boxShadow='inset 0px 8px 8px 0px #a29999c9'
            >
              <Image
                src={spock}
                h={{ base: '50px', sm: '80px' }}
                minW={{ base: '50px', sm: '80px' }}
              />
            </Box>
          </Box>
        </Box>
      )}
      {isGameOpen[0] && <Game />}
    </Flex>
  );
};

export default LayoutBonus;
