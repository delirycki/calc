import React, { useState } from "react";
import { Center, Square, Circle } from "@chakra-ui/react";
import {
  Grid,
  GridItem,
  useColorMode,
  Button,
  Card,
  Text,
  Divider,
  NumberInput,
  NumberInputField
} from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

function Calculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState<number>(0);
  const [activeInput, setActiveInput] = useState("input1");

  const [operator, setOperator] = useState("+");
  const [isNumber,setIsNumber] = useState(false)

  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  const operationHandler = (e: any) => {
    setOperator(e.target.value);
  };

  const resultHandler = () => {
    switch (operator) {
      case "+":
        setResult(parseFloat(input1) + parseFloat(input2));
        console.log(result);
        break;
      case "-":
        setResult(parseFloat(input1) - parseFloat(input2));
        break;
      case "*":
        setResult(parseFloat(input1) * parseFloat(input2));
        break;
      case "/":
        setResult(parseFloat(input1) / parseFloat(input2));
        break;
      default:
        console.log(`Sorry, we are out of ${operator}.`);
    }
    setValue(result.toString());
  };
  const numberButtonHandler = (e: any) => {
    switch (activeInput) {
      case "input1":
        if (input1 === "0") {
          setInput1(e.target.value);
        } else {
          setInput1(input1 + e.target.value);
        }
        break;
      case "input2":
        if (input2 === "0") {
          setInput1(e.target.value);
        } else {
          setInput2(input2 + e.target.value);
        }
        break;
    }
  };
  const onChangeInputHandler = (e:any) =>{
    setInput2(e.target.value)
    checkIfOnlyNumbers(e.target.value)

  }

  const checkIfOnlyNumbers = (string:String) => {
    if (string.match(/^\d+$/)) {
      setIsNumber (true);
    } else {
      setIsNumber (false);
    }
  }

  return (
    <div>
      <Center h="100vh" w="100vw">
        <Card>
          <Grid
            h="500px"
            w="400px"
            templateRows="repeat(7, 1fr)"
            templateColumns="repeat(4, 1fr)"
            boxShadow="xl"
            bg="whiteAlpha"
          >
            <GridItem colStart={1} colEnd={1}>
              <NumberInput
                value={input1}
                onFocus={() => setActiveInput("input1")}
                onChange={(e) => setInput1(e)}
                w="100%"
                h="100%"
              >
              <NumberInputField />
            
      </NumberInput>
            </GridItem>
            <GridItem colStart={2} colEnd={4} w="100%" h="100%">
              <Center w="100%" h="100%">
                <Select value={operator} onChange={operationHandler}>
                  <option value="+">+</option>
                  <option value="-">-</option>
                  <option value="*">*</option>
                  <option value="/">/</option>
                </Select>
              </Center>
            </GridItem>
            <GridItem colStart={4} colEnd={4}>
              <NumberInput
                value={input2}
                onFocus={() => setActiveInput("input2")}
                onChange={(e) => setInput2(e)}
                w="100%"
                h="100%"
              >
                  <NumberInputField />
              </NumberInput>
            </GridItem>

            <GridItem colStart={2} colEnd={4}>
              <Center h="100%">
                <Text fontSize="20px" as="b">
                  {result}
                </Text>
              </Center>
            </GridItem>
            <GridItem colStart={4} colEnd={5}>
              <Center h="100%">
                <Button ml="auto" mr={0} variant="ghost" onClick={onCopy}>
                  {hasCopied ? "Copied!" : "Copy"}
                </Button>
              </Center>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="+"
                onClick={operationHandler}
              >
                +
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="-"
                onClick={operationHandler}
              >
                -
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="*"
                onClick={operationHandler}
              >
                *
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="/"
                onClick={operationHandler}
              >
                /
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="7"
                onClick={numberButtonHandler}
              >
                7
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="8"
                onClick={numberButtonHandler}
              >
                8
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="9"
                onClick={numberButtonHandler}
              >
                9
              </Button>
            </GridItem>
            <GridItem colStart={4} colEnd={5} rowStart={4} rowEnd={8}>
              <Button
                w="100%"
                h="100%"
                colorScheme="orange"
                onClick={resultHandler}
              >
                =
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="4"
                onClick={numberButtonHandler}
              >
                4
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="5"
                onClick={numberButtonHandler}
              >
                5
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="6"
                onClick={numberButtonHandler}
              >
                6
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="7"
                onClick={numberButtonHandler}
              >
                1
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="8"
                onClick={numberButtonHandler}
              >
                2
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="9"
                onClick={numberButtonHandler}
              >
                3
              </Button>
            </GridItem>
            <GridItem colStart={1} colEnd={3}>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value="0"
                onClick={numberButtonHandler}
              >
                0
              </Button>
            </GridItem>
            <GridItem colStart={3} colEnd={4}>
              <Button
                colorScheme="orange"
                w="100%"
                h="100%"
                variant="ghost"
                value=","
                onClick={numberButtonHandler}
              >
                ,
              </Button>
            </GridItem>
          </Grid>
        </Card>
      </Center>
    </div>
  );
}

export default Calculator;
