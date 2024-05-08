import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import './../../App.css';
import LayoutRegular from '../LayoutRegular';
import { NavLink } from 'react-router-dom';
import LayoutBonus from '../LayoutBonus';

const Selection = () => {
  return (
    <Box bg='game.radial.bg' h={window.innerHeight} w='100vw' overflow='hidden'>
      <Flex
        alignItems='center'
        justifyContent='space-evenly'
        color='white'
        h='100%'
        flexDir={{ base: 'column', md: 'row' }}
      >
        <NavLink to='/regular'>
          <Flex
            flexDir='column'
            gap={{ base: '0px', md: '120px' }}
            alignItems='center'
          >
            <Text
              padding='8px 40px'
              fontWeight='600'
              bg='white'
              color='game.text.dark'
              borderRadius='8px'
              fontSize={{ base: '16px' }}
              zIndex='1'
              display={{ base: 'none', md: 'block' }}
            >
              Regular
            </Text>

            <Box>
              <LayoutRegular />
            </Box>
          </Flex>
        </NavLink>

        <Box>
          <Text
            padding='8px 40px'
            fontWeight='600'
            border='3px solid'
            borderColor='game.text.header'
            borderRadius='8px'
            fontSize={{ base: '16px' }}
            zIndex='1'
            textTransform='uppercase'
          >
            Choose game
          </Text>
        </Box>

        <NavLink to='/bonus'>
          <Flex
            flexDir='column'
            gap={{ base: '0px', md: '120px' }}
            alignItems='center'
          >
            <Text
              padding='8px 40px'
              fontWeight='600'
              bg='white'
              color='game.text.dark'
              borderRadius='8px'
              fontSize={{ base: '16px' }}
              zIndex='1'
              display={{ base: 'none', md: 'block' }}
            >
              Bonus
            </Text>

            <Box>
              <LayoutBonus />
            </Box>
          </Flex>
        </NavLink>
      </Flex>
    </Box>
  );
};

export default Selection;
