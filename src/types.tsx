export type Calculation = {
    number1: number;
    number2: number;
    dateNow: number;
    result: number;
    operator: string;
    
  };
  
export type CalculationRespone = Calculation & {id: string;}

export type InputType = "input1" | "input2";
export type Operator = "+" | "-" | "/" | "*"