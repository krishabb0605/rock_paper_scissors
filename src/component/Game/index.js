import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box, Flex, Image } from '@chakra-ui/react';
import rock from './../../assets/icon-rock.svg';
import paper from './../../assets/icon-paper.svg';
import scissor from './../../assets/icon-scissors.svg';
import { useState } from 'react';
import { useEffect } from 'react';
const posibilityArray = ['paper', 'rock', 'scissor'];

const Game = () => {
  const [randomElement, setRandomElement] = useState(null);
  const [winner, setWinner] = useState(null);
  const { state } = useLocation();
  const data = state.data;

  useEffect(() => {
    setTimeout(() => {
      const newElement =
        posibilityArray[Math.floor(Math.random() * posibilityArray.length)];
      setRandomElement(newElement);
    }, 1000);
  }, []);

  const compare = (data, randomElement) => {
    if (randomElement === data) {
      return 2;
    } else if (data === 'rock') {
      if (randomElement === 'scissor') {
        return 0;
      } else {
        return 1;
      }
    } else if (data === 'paper') {
      if (randomElement === 'rock') {
        return 0;
      } else {
        return 1;
      }
    } else if (data === 'scissor') {
      if (randomElement === 'rock') {
        return 1;
      } else {
        return 0;
      }
    }
  };
  useEffect(() => {
    if (randomElement) {
      const data1 = compare(data, randomElement);
      if (data1 === 0) {
        // console.log('YOU WIN');
        setWinner('win');
      } else if (data1 === 1) {
        // console.log('YOU LOSE');
        setWinner('lose');
      } else {
        // console.log('draw');
        setWinner(`IT'S DRAW`);
      }
    }
  }, [randomElement]);

  useEffect(() => {
    console.log('RESULT : ', winner);
  }, [winner]);

  return (
    <Box>
      <Flex
        justifyContent='space-evenly'
        alignItems='center'
        gap='120px'
        fontWeight='600'
      >
        <Flex flexDir='column' alignItems='center' gap='40px'>
          <Box fontSize='24px'>YOU PICKED</Box>
          {data === 'rock' ? (
            <Box
              p='30px'
              borderRadius='50%'
              backgroundColor='game.icons.rock'
              boxShadow='inset 0px -10px 12px 4px hsl(338, 100%, 30%)'
            >
              <Box
                p='50px'
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
          ) : data === 'paper' ? (
            <Box
              p='30px'
              borderRadius='50%'
              backgroundColor='game.icons.paper'
              boxShadow='inset 0px -10px 12px 0px hsl(234, 55%, 35%)'
            >
              <Box
                p='50px'
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
          ) : (
            <Box
              p='30px'
              borderRadius='50%'
              backgroundColor='game.icons.scissor'
              boxShadow='inset 0px -10px 12px 4px hsl(23, 60%, 47%)'
            >
              <Box
                p='50px'
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
          )}
        </Flex>

        <Flex flexDir='column' alignItems='center' gap='16px'>
          <Box fontSize='40px'>YOU LOSE</Box>
          <NavLink to='/'>
            <Box
              backgroundColor='white'
              color='game.text.dark'
              p='12px 56px'
              borderRadius='8px'
              _hover={{ color: 'red' }}
              cursor='pointer'
            >
              PLAY AGAIN
            </Box>
          </NavLink>
        </Flex>

        <Flex flexDir='column' alignItems='center' gap='40px'>
          <Box fontSize='24px'>THE HOUSE PICKED</Box>
          {randomElement ? (
            randomElement === 'rock' ? (
              <Box
                p='30px'
                borderRadius='50%'
                backgroundColor='game.icons.rock'
                boxShadow='inset 0px -10px 12px 4px hsl(338, 100%, 30%)'
              >
                <Box
                  p='50px'
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
            ) : randomElement === 'paper' ? (
              <Box
                p='30px'
                borderRadius='50%'
                backgroundColor='game.icons.paper'
                boxShadow='inset 0px -10px 12px 0px hsl(234, 55%, 35%)'
              >
                <Box
                  p='50px'
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
            ) : (
              <Box
                p='30px'
                borderRadius='50%'
                backgroundColor='game.icons.scissor'
                boxShadow='inset 0px -10px 12px 4px hsl(23, 60%, 47%)'
              >
                <Box
                  p='50px'
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
            )
          ) : (
            <Box
              h='240px'
              w='240px'
              backgroundColor='game.text.dark'
              borderRadius='50%'
            ></Box>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Game;
