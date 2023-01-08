import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
} from "@chakra-ui/react";
import { db } from "../src/db_info";
import { Button } from "@chakra-ui/react";
import { CalculationRespone } from "../src/types";

 function ListOfCalc() {
  const [calculations, setCalculations] = useState<CalculationRespone[]>([]);
  const usersCollectionRef = query(
    collection(db, "calculator"),
    orderBy("dateNow", "desc")
  );

  useEffect(() => {
    onSnapshot(usersCollectionRef, (snapshot) => {
      setCalculations(
        //@ts-ignore
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  const deleteCalc = async (id: string) => {
    const calcDoc = doc(db, "calculator", id);
    await deleteDoc(calcDoc);
  };
  const getTime = (timestrap: number) => {
    const date = new Date(timestrap);

    // Get the date and time components
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    // Format the date and time as dd-mm-yyyy hh-mm-ss
    return `${hours}:${minutes}:${seconds} ${day}-${month}-${year} `;
  };

  const rows = calculations.map((calculation: CalculationRespone) => {
    return (
      <Tr key={calculation.id}>
        <Td>{getTime(calculation.dateNow)}</Td>
        <Td>{calculation.number1}</Td>
        <Td>{calculation.operator}</Td>
        <Td>{calculation.number2}</Td>
        <Td>{calculation.result}</Td>
        <Td>
          <Center>
            {
              <Button
                title="Click to remove"
                colorScheme="orange"
                variant="ghost"
                onClick={() => deleteCalc(calculation.id)}
              >
                X
              </Button>
            }
          </Center>
        </Td>
      </Tr>
    );
  });

  return (
    <>
      <Center>
        <TableContainer maxW="1000px" minW="500px">
          <Table variant="striped" colorScheme="orange">
            <TableCaption placement="top">Calculation history</TableCaption>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Number 1</Th>
                <Th>Operator</Th>
                <Th>Number 2</Th>
                <Th>Result</Th>
                <Th>Remove</Th>
              </Tr>
            </Thead>
            <Tbody>{rows}</Tbody>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
}
export default ListOfCalc