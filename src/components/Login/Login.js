import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Flex
      minH={'calc(100vh - 70px)'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        boxShadow={'lg'}
        maxW={'md'}
        my={12}
        p={6}
        rounded={'xl'}
        spacing={4}
        w={'full'}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Sign in
        </Heading>
        <Text
          color={useColorModeValue('gray.800', 'gray.400')}
          fontSize={{ base: 'sm', sm: 'md' }}>
          You&apos;ll get an email with a login link
        </Text>
        <FormControl id="email">
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Login
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Login;