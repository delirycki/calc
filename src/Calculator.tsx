import React from 'react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'




function Calculator() {
  return (
    <div>    
      <Center h='100vh' w='100vw'>
      <Grid
        h='500px'
        w='400px'
        templateRows='repeat(7, 1fr)'
        templateColumns='repeat(4, 1fr)'
        bg='red'
      >
        <GridItem colStart={1} colEnd={1} >
          <Input w='100%' h='100%'/>
        </GridItem>
        <GridItem colStart={2} colEnd={4} >
          <Select w='100%' h='100%'>
            <option value='+'>+</option>
            <option value='-'>-</option>
            <option value='*'>*</option>
            <option value='/'>/</option>
            
          </Select>
        </GridItem >
        <GridItem colStart={4} colEnd={4} >
          <Input w='100%' h='100%'/>
        </GridItem >

        <GridItem colStart={1} colEnd={5} bg='yellow' />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
    
        
           
    </Grid>
    </Center>
    </div>

  )
}

export default Calculator 