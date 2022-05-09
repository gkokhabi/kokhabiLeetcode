/*
Given a string formula representing a chemical formula, return the count of each atom.

The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

One or more digits representing that element's count may follow if the count is greater than 1. 
If the count is 1, no digits will follow.

For example, "H2O" and "H2O2" are possible, but "H1O2" is impossible.
Two formulas are concatenated together to produce another formula.

For example, "H2O2He3Mg4" is also a formula.
A formula placed in parentheses, and a count (optionally added) is also a formula.

For example, "(H2O2)" and "(H2O2)3" are formulas.
Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

The test cases are generated so that all the values in the output fit in a 32-bit integer.

*/

/**
 * @param {string} formula
 * @return {string}
 */
 const countOfAtoms = function(formula) {
  let form = formula.split("")
  const  letters = {}
/**This array is to keep the order of the letters**/
  const order = []
  //this stack is to save every number
  const stack = []
  let current
  let dos;
  let value;
  let prev;
 
  //Iterates trough the input
  for(let i=0; i<formula.length;i++){
      value = 1
  //Always using the last value in the input
      current = form.pop()
  //If there is a number put it in the stack
      if(/[0-9]/.test(current)){
          //If the previous is a number concatenate both
          if(/[0-9]/.test(prev)){
             let help = stack.lastIndexOf(Number(prev,10))
             stack[help] = Number(current+prev,10)
          }
            else{
             stack.push(Number(current,10))
            }
         }
  //If the letter is lowercase save it
     else if(/[a-z]/.test(current) ){
          dos = current
      }
  //Every time a parenthesis is closed extract from the stack the last value
      else if(current == "(" ){
          stack.pop()
      }
  
  //Checks for upperase values to save them in the map
      else if(/[A-Z]/.test(current)){
       //If you have a lowwercase saved concatenate them
          if(dos){
             current = current + dos
             dos = ""
             }
      //Multiply every value on the stack to get the value of this element
          for(let j=0;j<stack.length;j++){
              value = value * stack[j]
          }
      //Operations to create the map
          if(!letters[current]){
             letters[current] = value
             }
          else{
              letters[current] += value
          }
       //If the previous value was a number remove it from the stack  
          if(/[0-9]/.test(prev)){
              stack.pop()
          }
        //Operations to fill the order matrix  
         if(!order.includes(current)){
            order.push(current)
            }
          else{
             order.splice(order.indexOf(current),1) 
            order.push(current) 
          }
          
      }
     //If the dos variable has something keep the number as the prev 
      if(dos){
         prev = prev
         }
      else{  
        prev = current  
      }             
  }

  //This part is to put in form the result
  let result = ""

  order.sort()
  
  for(var k=0;k<order.length;k++){
      if(letters[order[k]] < 2) {
          result += order[k] 
       }
  else{
      result += order[k] + letters[order[k]]
     }
      
  }
  
  return result 
};