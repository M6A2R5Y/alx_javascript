let globalVariable = 'welcome';

function outer() 
{
    let course = 'Holberton'
    function inner() 
    {
        let exclamation = '!'
        function inception() 
        {}
        inception()  //calls the function inception 
    }
    inner() //calls the fumction inner
}
outer() //calls the function outer