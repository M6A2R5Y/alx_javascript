let globalVariable = 'welcome';

function outer() 
{
    let course = 'Holberton'
    function inner() 
    {
        let exclamation = '!'
        function inception() 
        {
            alert( globalVariable + course + exclamation)
        }
        inception()  //calls the function inception
        alert(globalVariable + course) 
    }
    inner() //calls the fumction inner
    alert(globalVariable)
}
outer() //calls the function outer