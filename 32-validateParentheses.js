/*
Create a function that will evaluate if a given expression has balanced parentheses -- Using stacks In this example, we will only consider "{}" as valid parentheses {}{} would be considered balancing. {{{}} is not balanced

var expression = "{{}}{}{}"
var expressionFalse = "{}{{}";
*/

function validateParentheses(expression){
    //If expression is empty then it's valid
    if (expression.length <= 0) return true;

    //Only took the parentheses
    var onlyParentheses = expression.replace(/^{}/g,"").split("");
    var stack = [];

    //Make sure every parentheses has his couple. 
    //I have to make sure that there is a opener parentheses and a closer parentheses
    for(let i = 0; i < onlyParentheses.length; i++){
        //Make sure to add opener parentheses to the stack.
        if(onlyParentheses[i] === "{"){
            stack.push("{");
        //If I am stand in a closer parentheses there are two option.
        } else if (onlyParentheses[i] === "}") {
            //The stack must have at least 1 opener parentheses. If it haven't, then the expression is not valid.
            if(stack.length > 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    //If the stack is empty, then the expression is valid.
    return stack.length === 0;
}