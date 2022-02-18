import { ArrowBackIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Text, Image } from "@chakra-ui/react";

export const CreateBackground = () => {
  const editingWord = "あいうえお";
  return (
    <Box w="100%" h="300px" bgColor="orange.100" borderRadius="lg">
      <Flex w="100%" h="10" justifyContent="space-between" pt="4">
        <Button colorScheme="gray" variant="ghost">
          <ArrowBackIcon boxSize="8" />
        </Button>
        <Input
          lineHeight="10"
          w="200px"
          variant="filled"
          fontSize="xl"
          textAlign="center"
          defaultValue="編集中"
        ></Input>
        <Button colorScheme="gray" variant="ghost">
          <DeleteIcon boxSize="8" />
        </Button>
      </Flex>
      <Box m="3" pt="10" overflow="scroll" display="flex">
        <Button
          colorScheme="gray"
          variant="ghost"
          m={"1"}
          w="130px"
          h={"130px"}
          display="block"
          p={"0"}
          ratio={1}
        >
          <Image
            mr={"20px"}
            ml="20px"
            boxSize="90px"
            objectFit="contain"
            src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-text-3.png&r=0&g=0&b=0"
            alt=""
          />
          <br />
          <Text fontSize={"xl"} mt="-5">
            文字を作成
          </Text>
        </Button>
      </Box>
    </Box>
  );
};
