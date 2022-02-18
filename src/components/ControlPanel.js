import {  Button, Center,Image,Text } from "@chakra-ui/react"


export const ControlPanel = () => {
  return (
    <Center w={'100%'} minH='300px' bgColor={'orange.50'} display='flex' p={'5'}>
      <Button colorScheme='gray' variant='ghost' m={'1'} w='150px' h={'150px'} display='block' p={'0'} ratio={1} >
        <Image 
        mr={'25px'}
        ml='25px'
        boxSize='100px'
        objectFit='contain'
        src='https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-text-3.png&r=0&g=0&b=0' 
        alt='' />
        <br />
        <Text fontSize={'xl'}>文字を作成</Text>
      </Button>
      <Button colorScheme='gray' variant='ghost' m={'1'} w='150px' h={'150px'} display='block' p={'0'} ratio={1} >
        <Image 
        mr={'25px'}
        ml='25px'
        boxSize='100px'
        objectFit='contain'
        src='https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2015/png/iconmonstr-paint-bucket-10.png&r=0&g=0&b=0' 
        alt='' />
        <br />
        <Text fontSize={'xl'}>背景色を作成</Text>
      </Button>
    </Center>
  )
}