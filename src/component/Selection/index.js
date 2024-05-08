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
        flexDir={{ base: 'column', xl: 'row' }}
      >
        <NavLink
          to='/regular'
          style={{ display: 'flex', alignItems: 'center', height: '90%' }}
        >
          <Box pos='relative'>
            <Text
              pos='absolute'
              top='50%'
              left='50%'
              transform='translate(-50%,-130%)'
              width='fit-content'
              height='fit-content'
              padding='8px 40px'
              fontWeight='600'
              color='white'
              borderRadius='8px'
              fontSize={{ base: '16px' }}
              zIndex='1'
            >
              Regular
            </Text>
            <LayoutRegular />
          </Box>
        </NavLink>

        <Box
          p='4px 20px'
          border='3px solid'
          borderColor='game.text.header'
          borderRadius='8px'
        >
          <Flex
            fontWeight='600'
            fontSize={{ base: '16px' }}
            zIndex='1'
            textTransform='uppercase'
          >
            <marquee>Choose game</marquee>
          </Flex>
        </Box>

        <NavLink
          to='/bonus'
          style={{ display: 'flex', alignItems: 'center', height: '90%' }}
        >
          <Box pos='relative'>
            <Text
              pos='absolute'
              top='50%'
              left='50%'
              transform='translate(-50%,0)'
              width='fit-content'
              height='fit-content'
              padding='8px 40px'
              fontWeight='600'
              color='white'
              borderRadius='8px'
              fontSize={{ base: '16px' }}
              zIndex='1'
            >
              Bonus
            </Text>

            <LayoutBonus />
          </Box>
        </NavLink>
      </Flex>
    </Box>
  );
};

export default Selection;
