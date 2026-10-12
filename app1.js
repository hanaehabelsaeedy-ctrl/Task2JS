const ageInput = "20"; 
const hasTicket = true;
const isMember = false; 
const ticketType = "vip";
const availableSeats = 5; 

const age = Number(ageInput);
console.log(age);
console.log(typeof(age));
const isadult = age >=18;
console.log(isadult);

const canenter = isadult && hasTicket && availableSeats>=1;
if(canenter)
{
    console.log("Access granted ");
}
else{
    console.log("Access denied ");
}

let ticketprice = 0;
if(canenter)
{
    if(ticketType === "vip")
    {
        ticketprice = 500;
    }
    else if(ticketType == "regular")
    {
        ticketprice = 200;
    }
    else if(ticketType == "student")
    {
        ticketprice = 150;
    }
    else{
        console.log("unknown ticket type");
    }
}

let finalprice = ticketprice;
if(isMember)
{
    finalprice -= 50;
}
if(finalprice < 0)
{
    finalprice = 0;
}

console.log(`Age: ${age}
    Adult: ${isadult}
    Has ticket: ${hasTicket}
    Avaliable seats: ${availableSeats}
    Can enter: ${canenter}
    Ticket type: ${ticketType}
    Member: ${isMember}
    Final price: ${finalprice}`);

    const acceptedTerms = false; 
    if (acceptedTerms) 
        { 
            console.log("Terms accepted"); 
        } 
        else
             { 
                console.log("Terms not accepted");
             } 