function createClassRoom(numberOfStudents)// creates a function called createClassRoom
{
    function studentSeat(seat)
    {
       return function()
       {
        return (seat);
       };
    }
    var students = [];
    for(var i=0;i<numberOfStudent;i++)
    {
        var seatGetter = studentSeat(i + 1);
        students.push(seatGetter());
    }
    return students;
    
}
var classRoom = createClassRoom(10);// Creates a closure called classRoom