import '../../App.css';
import React, { useContext } from 'react';
import { Box, Flex, Image, useMediaQuery } from '@chakra-ui/react';
import rock from './../../assets/icon-rock.svg';
import paper from './../../assets/icon-paper.svg';
import scissor from './../../assets/icon-scissors.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { GlobalContext } from '../../context/global.context';
const posibilityArray = ['paper', 'rock', 'scissor'];

const Game = () => {
  const [randomElement, setRandomElement] = useState(null);
  const [winner, setWinner] = useState(null);
  const { handleCount, handleOpen, isOpen } = useContext(GlobalContext);
  const [isMobileSize] = useMediaQuery('(max-width: 768px)');

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
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              pos='relative'
            >
              <Box
                p={{ base: '16px', md: '30px' }}
                borderRadius='50%'
                backgroundColor='game.icons.rock'
                boxShadow='inset 0px -10px 12px 4px hsl(338, 100%, 30%)'
                zIndex='1'
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
                >
                  <Image
                    src={rock}
                    h={{ base: '50px', md: '80px' }}
                    minW={{ base: '50px', md: '80px' }}
                  />
                </Box>
              </Box>

              {winner && winner === 'YOU WIN' && (
                <Box
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
              )}
            </Box>
          ) : data === 'paper' ? (
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              pos='relative'
            >
              <Box
                p={{ base: '16px', md: '30px' }}
                borderRadius='50%'
                backgroundColor='game.icons.paper'
                boxShadow='inset 0px -10px 12px 0px hsl(234, 55%, 35%)'
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
                >
                  <Image
                    src={paper}
                    h={{ base: '50px', md: '80px' }}
                    minW={{ base: '50px', md: '80px' }}
                  />
                </Box>
              </Box>

              {winner && winner === 'YOU WIN' && (
                <Box
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
              )}
            </Box>
          ) : (
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              pos='relative'
            >
              <Box
                p={{ base: '16px', md: '30px' }}
                borderRadius='50%'
                backgroundColor='game.icons.scissor'
                boxShadow='inset 0px -10px 12px 4px hsl(23, 60%, 47%)'
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
                >
                  <Image
                    src={scissor}
                    h={{ base: '50px', md: '80px' }}
                    minW={{ base: '50px', md: '80px' }}
                  />
                </Box>
              </Box>
              {winner && winner === 'YOU WIN' && (
                <Box
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
              )}
            </Box>
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
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                pos='relative'
              >
                <Box
                  p={{ base: '16px', md: '30px' }}
                  borderRadius='50%'
                  backgroundColor='game.icons.rock'
                  boxShadow='inset 0px -10px 12px 4px hsl(338, 100%, 30%)'
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
                  >
                    <Image
                      src={rock}
                      h={{ base: '50px', md: '80px' }}
                      minW={{ base: '50px', md: '80px' }}
                    />
                  </Box>
                </Box>
                {winner && winner === 'YOU LOSE' && (
                  <Box
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
                )}
              </Box>
            ) : randomElement === 'paper' ? (
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                pos='relative'
              >
                <Box
                  p={{ base: '16px', md: '30px' }}
                  borderRadius='50%'
                  backgroundColor='game.icons.paper'
                  boxShadow='inset 0px -10px 12px 0px hsl(234, 55%, 35%)'
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
                  >
                    <Image
                      src={paper}
                      h={{ base: '50px', md: '80px' }}
                      minW={{ base: '50px', md: '80px' }}
                    />
                  </Box>
                </Box>
                {winner && winner === 'YOU LOSE' && (
                  <Box
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
                )}
              </Box>
            ) : (
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                pos='relative'
              >
                <Box
                  p={{ base: '16px', md: '30px' }}
                  borderRadius='50%'
                  backgroundColor='game.icons.scissor'
                  boxShadow='inset 0px -10px 12px 4px hsl(23, 60%, 47%)'
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
                  >
                    <Image
                      src={scissor}
                      h={{ base: '50px', md: '80px' }}
                      minW={{ base: '50px', md: '80px' }}
                    />
                  </Box>
                </Box>
                {winner && winner === 'YOU LOSE' && (
                  <Box
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
                )}
              </Box>
            )
          ) : (
            <Box
              h={{ base: '130px', lg: '240px' }}
              w={{ base: '130px', lg: '240px' }}
              backgroundColor='game.text.dark'
              borderRadius='50%'
            ></Box>
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
