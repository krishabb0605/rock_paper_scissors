import {
  Box,
  Flex,
  Icon,
  Image,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import logo from './../../assets/logo.svg';
import close from './../../assets/icon-close.svg';
import rulesRegular from './../../assets/image-rules.svg';
import rulesBonus from './../../assets/image-rules-bonus.svg';
import { useContext } from 'react';
import { GlobalContext } from '../../context/global.context';
import LayoutRegular from '../LayoutRegular';
import { useLocation, useNavigate } from 'react-router-dom';
import LayoutBonus from '../LayoutBonus';
import { VscDebugRestart } from 'react-icons/vsc';
import { IoHome } from 'react-icons/io5';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { winningCount, handleCount } = useContext(GlobalContext);

  const navigate = useNavigate();
  const location = useLocation();
  const isRegular = location.pathname.includes('/regular');

  return (
    <Flex
      backgroundColor='game.radial.bg'
      color='white'
      h={window.innerHeight}
      w='100vw'
      overflow='hidden'
      flexDir='column'
      alignItems='center'
      p='60px 0px 0px 0px'
      gap='12px'
    >
      <Flex
        alignItems='center'
        justifyContent='space-between'
        border='4px solid'
        borderColor='game.text.header'
        borderRadius='8px'
        width={{ base: '90%', sm: '50%' }}
        p='20px'
      >
        <Image src={logo} />
        <Flex
          flexDir='column'
          alignItems='center'
          backgroundColor='white'
          borderRadius='4px'
          height='100%'
          w='100px'
          p='8px'
        >
          <Text color='game.text.score' fontWeight='600'>
            SCORE
          </Text>
          <Text color='game.text.dark' fontWeight='700' fontSize='40px'>
            {winningCount}
          </Text>
        </Flex>
      </Flex>

      <Flex flex='1' alignItems='center' flexDir='column' width='100%'>
        <Flex flex='1' alignItems='center' justifyContent='center'>
          {isRegular ? <LayoutRegular /> : <LayoutBonus />}
        </Flex>
        <Flex
          width='100%'
          justifyContent={{ base: 'space-evenly', sm: 'end' }}
          margin={{ base: '0px 0 32px 0px', sm: '0px 60px 32px 0px' }}
          gap='8px'
        >
          <Flex
            padding='8px 12px'
            fontWeight='600'
            border='3px solid'
            borderColor='game.text.header'
            borderRadius='8px'
            fontSize={{ base: '16px' }}
            cursor='pointer'
            zIndex='1'
            alignItems='center'
            onClick={() => navigate('/')}
          >
            <Icon as={IoHome} />
          </Flex>
          <Flex
            padding='8px 12px'
            fontWeight='600'
            border='3px solid'
            borderColor='game.text.header'
            borderRadius='8px'
            fontSize={{ base: '16px' }}
            onClick={() => handleCount('reset')}
            cursor='pointer'
            alignItems='center'
            zIndex='1'
          >
            <Icon as={VscDebugRestart} />
          </Flex>
          <Text
            padding='8px 40px'
            fontWeight='600'
            border='3px solid'
            borderColor='game.text.header'
            borderRadius='8px'
            fontSize={{ base: '16px' }}
            onClick={onOpen}
            cursor='pointer'
            zIndex='1'
          >
            RULES
          </Text>
        </Flex>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          h={{ base: '100%', sm: 'auto' }}
          alignItems={{ base: 'center', sm: 'unset' }}
          justifyContent='space-around'
        >
          <ModalHeader>
            <Flex
              justifyContent={{ base: 'center', sm: 'space-between' }}
              fontWeight='600'
              alignItems='center'
              p='4px 30px'
            >
              <Text color='game.radial.bg' fontSize='32px'>
                RULES
              </Text>
              <Box
                onClick={onClose}
                display={{ base: 'none', sm: 'block' }}
                cursor='pointer'
              >
                <Image src={close} />
              </Box>
            </Flex>
          </ModalHeader>

          <Flex justifyContent='center' p='12px 0 30px 0'>
            <Image src={isRegular ? rulesRegular : rulesBonus} />
          </Flex>

          <ModalFooter display={{ base: 'block', sm: 'none' }}>
            <Box onClick={onClose}>
              <Image src={close} />
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default App;
