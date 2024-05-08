import '../../App.css';
import React, { useContext } from 'react';
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import rock from './../../assets/icon-rock.svg';
import paper from './../../assets/icon-paper.svg';
import scissor from './../../assets/icon-scissors.svg';
import spock from './../../assets/icon-spock.svg';
import lizard from './../../assets/icon-lizard.svg';

import { useState } from 'react';
import { useEffect } from 'react';
import { GlobalContext } from '../../context/global.context';
import BackgroundUI from '../BackgroundUI';
import GameSelect from '../GameSelect';
import { useLocation } from 'react-router-dom';

const Game = () => {
  const [randomElement, setRandomElement] = useState(null);
  const [winner, setWinner] = useState(null);
  const { handleCount, handleOpen, isGameOpen } = useContext(GlobalContext);
  const data = isGameOpen[1];

  const [isMobileSize] = useMediaQuery('(max-width: 768px)');

  const location = useLocation();
  const isRegular = location.pathname.includes('/regular');

  const [count, setCount] = useState(3);
  const [posibilityArray, setPosibilityArray] = useState([]);

  useEffect(() => {
    isRegular
      ? setPosibilityArray(['paper', 'rock', 'scissor'])
      : setPosibilityArray(['paper', 'rock', 'scissor', 'spock', 'lizard']);
  }, [location, isRegular]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 300);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const newElement =
        posibilityArray.length &&
        posibilityArray[Math.floor(Math.random() * posibilityArray.length)];
      setRandomElement(newElement);
    }, 1000);
  }, [posibilityArray]);

  const compare = (data, randomElement) => {
    if (randomElement === data) {
      return 2;
    } else if (data === 'rock') {
      if (randomElement === 'scissor' || randomElement === 'lizard') {
        return 0;
      } else if (randomElement === 'paper' || randomElement === 'spock') {
        return 1;
      }
    } else if (data === 'paper') {
      if (randomElement === 'rock' || randomElement === 'spock') {
        return 0;
      } else if (randomElement === 'scissor' || randomElement === 'lizard') {
        return 1;
      }
    } else if (data === 'scissor') {
      if (randomElement === 'paper' || randomElement === 'lizard') {
        return 0;
      } else if (randomElement === 'rock' || randomElement === 'spock') {
        return 1;
      }
    } else if (data === 'spock') {
      if (randomElement === 'scissor' || randomElement === 'rock') {
        return 0;
      } else if (randomElement === 'paper' || randomElement === 'lizard') {
        return 1;
      }
    } else if (data === 'lizard') {
      if (randomElement === 'paper' || randomElement === 'spock') {
        return 0;
      } else if (randomElement === 'rock' || randomElement === 'scissor') {
        return 1;
      }
    }
  };

  useEffect(() => {
    if (randomElement) {
      const data1 = compare(data, randomElement);
      if (data1 === 0) {
        setWinner('YOU WIN');
        handleCount('win');
      } else if (data1 === 1) {
        setWinner('YOU LOSE');
        handleCount('lose');
      } else {
        setWinner(`IT'S DRAW`);
        handleCount('draw');
      }
    }
  }, [randomElement, data]);

  return (
    <Flex
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      gap='60px'
    >
      <Flex
        justifyContent='space-evenly'
        alignItems='center'
        gap={{ base: '60px', md: '100px', lg: '120px' }}
        fontWeight='600'
      >
        <Flex
          flexDir={{ base: 'column-reverse', lg: 'column' }}
          alignItems='center'
          gap='40px'
        >
          <Box fontSize={{ base: '16px', lg: '24px' }}>YOU PICKED</Box>

          {data === 'rock' ? (
            <Flex alignItems='center' justifyContent='center' pos='relative'>
              <GameSelect
                mainProps={{
                  backgroundColor: 'game.icons.rock',
                  boxShadow: 'inset 0px -10px 12px 4px hsl(338, 100%, 30%)',
                }}
                boxProps={{ boxShadow: 'inset 0px 8px 8px 0px #a29999c9' }}
                image={rock}
              />

              {winner && winner === 'YOU WIN' && <BackgroundUI />}
            </Flex>
          ) : data === 'paper' ? (
            <Flex alignItems='center' justifyContent='center' pos='relative'>
              <GameSelect
                mainProps={{
                  backgroundColor: 'game.icons.paper',
                  boxShadow: 'inset 0px -10px 12px 0px hsl(234, 55%, 35%)',
                }}
                boxProps={{ boxShadow: 'inset 0px 8px 8px 0px #a29999c9' }}
                image={paper}
              />
              {winner && winner === 'YOU WIN' && <BackgroundUI />}
            </Flex>
          ) : data === 'scissor' ? (
            <Flex alignItems='center' justifyContent='center' pos='relative'>
              <GameSelect
                mainProps={{
                  backgroundColor: 'game.icons.scissor',
                  boxShadow: 'inset 0px -10px 12px 4px hsl(23, 60%, 47%)',
                }}
                image={scissor}
              />
              {winner && winner === 'YOU WIN' && <BackgroundUI />}
            </Flex>
          ) : data === 'lizard' ? (
            <Flex alignItems='center' justifyContent='center' pos='relative'>
              <GameSelect
                mainProps={{
                  backgroundColor: 'game.icons.lizard',
                  boxShadow: 'inset 0px -10px 12px 4px hsl(270, 100%, 30%)',
                }}
                image={lizard}
              />
              {winner && winner === 'YOU WIN' && <BackgroundUI />}
            </Flex>
          ) : (
            <Flex alignItems='center' justifyContent='center' pos='relative'>
              <GameSelect
                mainProps={{
                  backgroundColor: 'game.icons.cyan',
                  boxShadow: 'inset 0px -10px 12px 4px hsl(200, 100%, 30%)',
                }}
                image={spock}
              />
              {winner && winner === 'YOU WIN' && <BackgroundUI />}
            </Flex>
          )}
        </Flex>

        {winner && !isMobileSize && (
          <Flex flexDir='column' alignItems='center' gap='16px'>
            <Box fontSize='40px' fontWeight='700'>
              {winner}
            </Box>
            <Box
              backgroundColor='white'
              color='game.text.dark'
              p='12px 56px'
              borderRadius='8px'
              _hover={{ color: 'red' }}
              cursor='pointer'
              zIndex='1'
              onClick={() => handleOpen(false, '')}
            >
              PLAY AGAIN
            </Box>
          </Flex>
        )}

        <Flex
          flexDir={{ base: 'column-reverse', lg: 'column' }}
          alignItems='center'
          gap='40px'
        >
          <Box fontSize={{ base: '16px', lg: '24px' }}>THE HOUSE PICKED</Box>
          {randomElement ? (
            randomElement === 'rock' ? (
              <Flex alignItems='center' justifyContent='center' pos='relative'>
                <GameSelect
                  mainProps={{
                    backgroundColor: 'game.icons.rock',
                    boxShadow: 'inset 0px -10px 12px 4px hsl(338, 100%, 30%)',
                  }}
                  image={rock}
                />
                {winner && winner === 'YOU LOSE' && <BackgroundUI />}
              </Flex>
            ) : randomElement === 'paper' ? (
              <Flex alignItems='center' justifyContent='center' pos='relative'>
                <GameSelect
                  mainProps={{
                    backgroundColor: 'game.icons.paper',
                    boxShadow: 'inset 0px -10px 12px 0px hsl(234, 55%, 35%)',
                  }}
                  image={paper}
                />
                {winner && winner === 'YOU LOSE' && <BackgroundUI />}
              </Flex>
            ) : randomElement === 'scissor' ? (
              <Flex alignItems='center' justifyContent='center' pos='relative'>
                <GameSelect
                  mainProps={{
                    backgroundColor: 'game.icons.scissor',
                    boxShadow: 'inset 0px -10px 12px 4px hsl(23, 60%, 47%)',
                  }}
                  image={scissor}
                />
                {winner && winner === 'YOU LOSE' && <BackgroundUI />}
              </Flex>
            ) : randomElement === 'lizard' ? (
              <Flex alignItems='center' justifyContent='center' pos='relative'>
                <GameSelect
                  mainProps={{
                    backgroundColor: 'game.icons.lizard',
                    boxShadow: 'inset 0px -10px 12px 4px hsl(270, 100%, 30%)',
                  }}
                  image={lizard}
                />
                {winner && winner === 'YOU LOSE' && <BackgroundUI />}
              </Flex>
            ) : (
              <Flex alignItems='center' justifyContent='center' pos='relative'>
                <GameSelect
                  mainProps={{
                    backgroundColor: 'game.icons.cyan',
                    boxShadow: 'inset 0px -10px 12px 4px hsl(200, 100%, 30%)',
                  }}
                  image={spock}
                />
                {winner && winner === 'YOU LOSE' && <BackgroundUI />}
              </Flex>
            )
          ) : (
            <Flex
              alignItems='center'
              justifyContent='center'
              h={{ base: '130px', md: '240px' }}
              w={{ base: '130px', md: '240px' }}
              backgroundColor='game.text.dark'
              borderRadius='50%'
            >
              <Text fontSize='36px'>{count > 0 && count}</Text>
            </Flex>
          )}
        </Flex>
      </Flex>

      {winner && isMobileSize && (
        <Flex flexDir='column' alignItems='center' gap='16px'>
          <Box fontSize='44px' fontWeight='700'>
            {winner}
          </Box>
          <Box
            backgroundColor='white'
            color='game.text.dark'
            p='12px 56px'
            borderRadius='8px'
            _hover={{ color: 'red' }}
            cursor='pointer'
            onClick={() => handleOpen(false, '')}
          >
            PLAY AGAIN
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

export default Game;
