import '../../App.css';
import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Image,
  Spinner,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import rock from './../../assets/icon-rock.svg';
import paper from './../../assets/icon-paper.svg';
import scissor from './../../assets/icon-scissors.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { GlobalContext } from '../../context/global.context';
import BackgroundUI from '../BackgroundUI';
import GameSelect from '../GameSelect';
const posibilityArray = ['paper', 'rock', 'scissor'];

const Game = () => {
  const [randomElement, setRandomElement] = useState(null);
  const [winner, setWinner] = useState(null);
  const { handleCount, handleOpen, isOpen } = useContext(GlobalContext);
  const [isMobileSize] = useMediaQuery('(max-width: 768px)');
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 300);

    return () => clearInterval(timer);
  }, []);

  if (count > 0) {
    console.log(count);
  }
  const data = isOpen[1];

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
  }, [randomElement]);

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
          ) : (
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
            ) : (
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
