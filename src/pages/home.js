import {
  Box,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  chakra,
} from '@chakra-ui/react';
import Crown from '../images/crown.png';
import Drag from '../images/drag.png';
import Masks from '../images/masks.png';
import Tights from '../images/tights.png';

const Home = () => (
  <Box>
    <Box margin="0 auto" width="100%" maxW="10em">
      <Image src={Crown} />
    </Box>
    <chakra.h1 fontWeight="500" textAlign={'center'}>
      <chakra.span
        display={'block'}
        fontSize={{ base: '1.2em', md: '1.5em' }}
        color="white"
      >
        IVERBIG COCK'S
      </chakra.span>
      <chakra.span
        display={'block'}
        fontWeight="700"
        fontSize={{ base: '1.75em', md: '2.25em' }}
        color="purple.900"
      >
        POSH PUB CRAWL
      </chakra.span>
    </chakra.h1>
    <Box margin="0 auto" width="100%" maxW="15em">
      <Image src={Drag} />
    </Box>
    <chakra.h2
      fontSize={{ base: '1.2em', md: '1.5em' }}
      fontWeight="500"
      textAlign={'center'}
      marginBottom={'1em'}
    >
      Coming to a city near you!
    </chakra.h2>
    <Box margin="0 auto" width="100%" maxW="30em">
      <Text color="pink.100" textAlign={'center'}>
        Come join Iverbig Cock (the real Queen of the North) and her bevvy of
        saucy Queens for Iverbig Cock's Posh Pub Crawl. Support local Queens and
        support local businesses!
      </Text>
    </Box>

    <Box margin="0 auto" width="100%" maxW="15em">
      <Image src={Tights} />
    </Box>
    <chakra.h2
      fontSize={{ base: '1.2em', md: '1.5em' }}
      fontWeight="500"
      textAlign={'center'}
      marginBottom={'1em'}
    >
      Upcoming events-
    </chakra.h2>

    <Box margin="0 auto" width="100%" maxW="15em" color="pink.100">
      <Text
        textAlign={'center'}
        marginBottom={'0.8em'}
        color="white"
        fontWeight={'bold'}
      >
        Liverpool- 20/10/23
      </Text>
      <UnorderedList marginBottom={'1.5em'}>
        <ListItem>The Naval Club</ListItem>
        <ListItem>The Rocket</ListItem>
        <ListItem>Five Ways</ListItem>
        <ListItem>The Edinburgh</ListItem>
      </UnorderedList>
      <Text
        textAlign={'center'}
        marginBottom={'0.8em'}
        color="white"
        fontWeight={'bold'}
      >
        Newcastle- 04/11/23
      </Text>
      <UnorderedList marginBottom={'1.5em'}>
        <ListItem>The Yard Bar</ListItem>
        <ListItem>Rusty's</ListItem>
        <ListItem>The Eagle</ListItem>
        <ListItem>Powerhouse</ListItem>
      </UnorderedList>
      <Text
        textAlign={'center'}
        marginBottom={'0.8em'}
        color="white"
        fontWeight={'bold'}
      >
        Manchester 12/23
      </Text>
      <Text>(dates/venues tbc)</Text>
    </Box>
    <Box margin="0 auto" width="100%" maxW="15em" marginBottom={'-2em'}>
      <Image src={Masks} />
    </Box>
    <chakra.h2
      fontSize={{ base: '1.2em', md: '1.5em' }}
      fontWeight="500"
      textAlign={'center'}
      marginBottom={'1em'}
    >
      Join us!
    </chakra.h2>

    <Box margin="0 auto" width="100%" maxW="15em">
      <Text textAlign={'center'} marginBottom={'0.8em'}>
        Follow us on{' '}
        <Link
          href="https://instagram.com/iverbigscock1992"
          textDecoration={'underline'}
        >
          Instagram
        </Link>
      </Text>
    </Box>
  </Box>
);

export default Home;
