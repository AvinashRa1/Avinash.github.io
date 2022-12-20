let cost;
let durCost;
let slAdultNum;
let slChildNum;
let fAdultNum;
let fChildNum;
let infantNum;
let totTickets;
let totDuration;

let txtFullName = document.getElementById("fname");
let txtPhoneNum = document.getElementById("mnum");
let txtEmail = document.getElementById("email");
let txtConfirmEmail = document.getElementById("cemail");
let selectGender = document.querySelector('#gender');
let txtLoyalty = document.getElementById("loyalty")

const slAdultPrice = 1200;
const slChildPrice = 700;
const FAdultPrice = 5500;
const FChildPrice = 2700;

const ticketForm = document.getElementById("ticketForm");
const addFullName = document.getElementById("addName")
const addSlAdultTkts = document.getElementById("addSlAdultTickets");
const addSlChildTkts = document.getElementById("addSlChildTickets");
const addFAdultTkts = document.getElementById("addFAdultTickets");
const addFChildTkts = document.getElementById("addFChildTickets");
const addInfantTkts = document.getElementById("addInfantTickets");
let addTotPrice = document.getElementById("addTotalPrice");

const nmAlert = document.getElementById("nameAlert");
const numAlert = document.getElementById("numAlert");
const emAlert = document.getElementById("emailAlert");
const tktAlert = document.getElementById("ticketAlert");

const slAdult = document.getElementById("1");
const slChild = document.getElementById("2");
const fAdult = document.getElementById("3");
const fChild = document.getElementById("4")
const infant = document.getElementById("5");

const txtCost = document.getElementById("cost");

const btnAdd = document.getElementById("add");
const btnPlace = document.getElementById("place")
const btnRemove = document.getElementById("remove")
const btnAddToFavourites = document.getElementById("addToFavourite")
const btnOrderFavourites = document.getElementById("orderFavourite")
const btnCheckLoyalty = document.getElementById("checkLoyalty")

const optDur = document.getElementById("duration")

const plus = document.getElementsByClassName('plus');
const minus = document.getElementsByClassName('minus');

let favourite ={fullName : "", phoneNumber : 0, email : "", gender : "", slAdultTicket : 0, slChildTicket : 0, fAdultTicket : 0, fChildTicket : 0, infantTicket : 0, duration : "", totalPrice : 0}

datePicker.min = new Date().toLocaleDateString('en-ca')

function initial(){
    cost = 0;
    durCost = 0;
    slAdultNum = 0;
    slChildNum = 0;
    fAdultNum = 0;
    fChildNum = 0;
    infantNum = 0;
    totTickets = 0;
    totDuration = 0;
}

window.addEventListener("load", initial)

function Add(event){ //function to incremenet
    let buttonClicked = event.target;
    let input = buttonClicked.parentElement.children[1]; //converts the increment buttons into an array
    let inputValue = input.innerText;
    let newValue = parseInt(inputValue) + 1;
    input.innerText = newValue;

    infantNum = parseInt(infant.innerText);

    slAdultNum = parseInt(slAdult.innerText); //gets the cal properly for slAdult
    let slAdultCost = parseInt(slAdult.innerText) * slAdultPrice;

    slChildNum = parseInt(slChild.innerText); //gets the cal properly for slChild
    let slChildCost = parseInt(slChild.innerText) * slChildPrice;

    fAdultNum = parseInt(fAdult.innerText); //gets the cal properly for fAdult
    let fAdultCost = parseInt(fAdult.innerText) * FAdultPrice;

    fChildNum = parseInt(fChild.innerText); //gets the cal properly for fChild
    let fChildCost = parseInt(fChild.innerText) * FChildPrice;

    cost = (slAdultCost + slChildCost + fAdultCost + fChildCost); //prints the total
    txtCost.innerText = cost;

    totTickets = (slAdultNum + slChildNum + fAdultNum + fChildNum + infantNum)
}

for(let i = 0; i < plus.length; i++){ //click event for increment //uses a loop to listen to all 5 increment buttons
    let button = plus[i];
    button.addEventListener('click', Add)
}

function Minus(event){ //function to decrement
    let buttonClicked = event.target; 
    let input = buttonClicked.parentElement.children[1]; //converts the decrement buttons into an array
    let inputValue = input.innerText;
    let newValue = parseInt(inputValue) - 1;
    if(newValue >= 0){
        input.innerText = newValue;

        infantNum = parseInt(infant.innerText);

        slAdultNum = parseInt(slAdult.innerText); //gets the cal properly for slAdult
        let slAdultCost = slAdultNum * slAdultPrice;
    
        slChildNum = parseInt(slChild.innerText); //gets the cal properly for slChild
        let slChildCost = slChildNum * slChildPrice;
    
        fAdultNum = parseInt(fAdult.innerText); //gets the cal properly for fAdult
        let fAdultCost = fAdultNum * FAdultPrice;
    
        fChildNum = parseInt(fChild.innerText); //gets the cal properly for fChild
        let fChildCost = fChildNum * FChildPrice;
    
        cost = (slAdultCost + slChildCost + fAdultCost + fChildCost); //prints the total
        txtCost.innerText = cost;

        totTickets = (slAdultNum + slChildNum + fAdultNum + fChildNum + infantNum)
    }
    else{
        //add stuff later
    }
}

for(let i = 0; i < minus.length; i++){ //click event for decrement //uses a loop to listen to all 5 decrement buttons
    let button = minus[i]; //loops through the buttons in the array
    button.addEventListener('click', Minus)
}

function durPrice(){ //uses if condition to check the select duration value
    let totDue = 0;
    if(slAdultNum > 0 ){
        if(optDur.value == "3"){
            durCost = 0;
        }
        else if(optDur.value == "12"){
            durCost = slAdultNum * 350;
            totDue += durCost;
        }
        else if(optDur.value == "24"){
            durCost = slAdultNum * 600;
            totDue += durCost;
        }
    }
    if(slChildNum > 0){
        if(optDur.value == "3"){
            durCost = 0;
        }
        else if(optDur.value == "12"){
            durCost = slChildNum * 350;
            totDue += durCost;
        }
        else if(optDur.value == "24"){
            durCost = slChildNum * 600;
            totDue += durCost;
        }
    }
    if(fAdultNum > 0){
        if(optDur.value == "3"){
            durCost = 0;
        }
        else if(optDur.value == "12"){
            durCost = fAdultNum * 450;
            totDue += durCost;
        }
        else if(optDur.value == "24"){
            durCost = fAdultNum * 800;
            totDue += durCost;
        }
    }
    if(fChildNum > 0){
        if(optDur.value =="3"){
            durCost = 0;
        }
        else if(optDur.value == "12"){
            durCost = fChildNum * 450;
            totDue += durCost;
        }
        else if(optDur.value == "24"){
            durCost = fChildNum * 800;
            totDue += durCost;
        }
    }
    totDuration = totDue;
    txtCost.innerText = (cost + totDue);
}

optDur.addEventListener("change", durPrice);

let temp = 0;
let tempSlAdultTickets = 0;
let tempSlChildTickets = 0;
let tempFAdultTickets = 0;
let tempFChildTickets = 0;
let tempInfantTickets = 0;
let tempTicketTotal = 0;

function addToOrder(evt){
    if(ticketForm.checkValidity()){
        evt.preventDefault(); //important
        if(txtFullName.value.length > 10 && txtFullName.value != ""){ //name validation
            nmAlert.innerText = "";
            if(txtPhoneNum.value.length == 9 && txtPhoneNum != ""){ //phone number validation
                numAlert.innerText = "";
                if(txtConfirmEmail.value === txtEmail.value && txtEmail.value != ""){ //email validation
                    emAlert.innerText = "";       
                    if(totTickets > 0){ //ticket validation
                        tktAlert.innerText = ""

                        addFullName.innerText = txtFullName.value;

                        tempSlAdultTickets += slAdultNum;
                        addSlAdultTkts.innerText = tempSlAdultTickets;
                        tempSlChildTickets += slChildNum;
                        addSlChildTkts.innerText = tempSlChildTickets;
                        tempFAdultTickets += fAdultNum;
                        addFAdultTkts.innerText = tempFAdultTickets;
                        tempFChildTickets += fChildNum;
                        addFChildTkts.innerText = tempFChildTickets;
                        tempInfantTickets += infantNum;
                        addInfantTkts.innerText = tempInfantTickets;

                        tempTicketTotal = tempSlAdultTickets + tempSlChildTickets + tempFAdultTickets + tempFChildTickets + tempInfantTickets; //temporary ticket total
            
                        temp += (cost + totDuration)
                        addTotPrice.innerText = temp
                        
                        slAdult.innerText = 0; //resets the value after adding it to the order to prevent value looping
                        slChild.innerText = 0;
                        fAdult.innerText = 0;
                        fChild.innerText = 0;
                        infant.innerText = 0; 

                        tempSlAdultTickets = 0;
                        tempSlChildTickets = 0;
                        tempFAdultTickets = 0;
                        tempFChildTickets = 0;
                        tempInfantTickets = 0
                        tempTicketTotal = 0;
                        txtLoyalty.value = 0;

                        slAdultNum = 0
                        slChildNum = 0 
                        fAdultNum = 0;
                        fChildNum = 0;
                        infantNum = 0;
                        cost = 0
                        totDuration = 0
                        txtCost.innerText = 0.00;
                    }
                    else{
                        tktAlert.innerText = "*Please select atleast one ticket"
                    }
                }
                else{
                    txtConfirmEmail.focus();
                    emAlert.innerText = "*Please Enter the Correct Email"
                }
            }
            else{
                txtPhoneNum.focus();
                numAlert.innerText = "*Please Enter a Valid Number"
            }
        }     
        else{
            txtFullName.focus();
            nmAlert.innerText = "*Please Enter a Valid Name"
        }
    }
}

btnAdd.addEventListener("click", addToOrder);

function placeOrder(evt){
    if(ticketForm.checkValidity()){
        evt.preventDefault();
        if(tempTicketTotal > 0)
        {
            addFullName.innerText = "" //once placing order all the values and text inputs are reset
            addSlAdultTkts.innerText = 0;
            addSlChildTkts.innerText = 0;
            addFAdultTkts.innerText = 0;
            addFChildTkts.innerText = 0
            addInfantTkts.innerText = 0
            addTotPrice.innerText = 0;

            slAdult.innerText = 0;
            slChild.innerText = 0;
            fAdult.innerText = 0;
            fChild.innerText = 0;
            infant.innerText = 0; 

            tempSlAdultTickets = 0;
            tempSlChildTickets = 0;
            tempFAdultTickets = 0;
            tempFChildTickets = 0;
            tempInfantTickets = 0
            tempTicketTotal = 0;
            txtLoyalty.value = 0;

            slAdultNum = 0
            slChildNum = 0 
            fAdultNum = 0;
            fChildNum = 0;
            infantNum = 0;
            txtCost.innerText = 0.00;

            alert("Thank you for your purchase"); //placeholder for popup message
        }
    }
}

btnPlace.addEventListener("click", placeOrder)

function removeOrder(evt){
    if(ticketForm.checkValidity()){
        evt.preventDefault();
        slAdultNum = 0; //to reset the values and remove the order
        slChildNum = 0;
        fAdultNum = 0;
        fChildNum = 0;
        infantNum = 0;
        addSlAdultTkts.innerText = 0;
        addSlChildTkts.innerText = 0;
        addFAdultTkts.innerText = 0;
        addFChildTkts.innerText = 0;
        addInfantTkts.innerText = 0;
        tempSlAdultTickets = 0;
        tempSlChildTickets = 0;
        tempFAdultTickets = 0;
        tempFChildTickets = 0;
        tempInfantTickets = 0
        tempTicketTotal = 0;
        txtLoyalty.value = 0;
        addTotPrice.innerText = 0.00;
        temp = 0;
    }
}

btnRemove.addEventListener("click", removeOrder);

let JSONfavourite;

function addToFavourites(evt){
    if(ticketForm.checkValidity()){
        evt.preventDefault();
        if(txtFullName.value.length > 10 && txtFullName.value != ""){ //name validation
            nmAlert.innerText = "";
            if(txtPhoneNum.value.length == 9 && txtPhoneNum != ""){ //number validation
                numAlert.innerText = "";
                if(txtConfirmEmail.value === txtEmail.value && txtEmail.value != ""){ //email validation
                    emAlert.innerText = "";       
                    if(totTickets > 0){ //ticket valdidation in case the user has selected 0 tickets
                        tktAlert.innerText = ""
                        favourite = {fullName : txtFullName.value, phoneNumber : txtPhoneNum.value, email : txtEmail.value, gender : selectGender.value, slAdultTicket : slAdultNum, slChildTicket : slChildNum, fAdultTicket : fAdultNum, fChildTicket : fChildNum, infantTicket : infantNum, duration : optDur.value, totalPrice : parseInt(txtCost.innerText)};
                        JSONfavourite = JSON.stringify(favourite) //to store the values
                        localStorage.setItem("favourite", JSONfavourite)
                    }
                    else{
                        tktAlert.innerText = "*Please select atleast one ticket"
                    }
                }
                else{
                    txtConfirmEmail.focus();
                    emAlert.innerText = "*Please Enter the Correct Email"
                }
            }
            else{
                txtPhoneNum.focus();
                numAlert.innerText = "*Please Enter a Valid Number"
            }
        }     
        else{
            txtFullName.focus();
            nmAlert.innerText = "*Please Enter a Valid Name"
        } 
    }
}

btnAddToFavourites.addEventListener("click", addToFavourites)

function orderFavourites(evt){
    if(ticketForm.checkValidity()){
        evt.preventDefault();
        let getFav = localStorage.getItem("favourite", JSONfavourite) //to retrieve the values
        let getFavourite = JSON.parse(getFav)

        addFullName.innerText = getFavourite["fullName"] //to set the retrieve values to the relevant fields
        getFavourite["slAdultTicket"] += tempSlAdultTickets; //the temp values the add the existing order to the favourites
        addSlAdultTkts.innerText = getFavourite["slAdultTicket"]
        getFavourite["slChildTicket"] += tempSlChildTickets;
        addSlChildTkts.innerText = getFavourite["slChildTicket"]
        getFavourite["fAdultTicket"] += tempFAdultTickets
        addFAdultTkts.innerText = getFavourite["fAdultTicket"]
        getFavourite["fChildTicket"] += tempFChildTickets
        addFChildTkts.innerText = getFavourite["fChildTicket"]
        getFavourite["infantTicket"] += tempInfantTickets
        addInfantTkts.innerText = getFavourite["infantTicket"]
        getFavourite["totalPrice"] += temp;
        addTotPrice.innerText = getFavourite["totalPrice"]
    }
}

btnOrderFavourites.addEventListener("click", orderFavourites)

let loyaltyTemp = 0;

function checkLoyalty(){
    let tktLoyalty = (tempSlAdultTickets + tempSlChildTickets + tempFAdultTickets + tempFChildTickets + tempInfantTickets)
    if(tktLoyalty > 3){
        for(let x = 0; x < tktLoyalty; x++)
        {
            loyaltyTemp += 15 //loyalty variable
        }

        let loyalty = {loyaltyPoints : loyaltyTemp};  
        let JSONloyalty = JSON.stringify(loyalty);
        localStorage.setItem("loyalties", JSONloyalty); //to store the loyalty points

        let getLoyal = localStorage.getItem("loyalties", JSONloyalty) //to retrieve the loyalty points
        let getLoyalty = JSON.parse(getLoyal);

        txtLoyalty.value = getLoyalty["loyaltyPoints"]; //to display the loyalty points
        loyaltyTemp = 0; //resets the values to prevent adding it over and over again
    }
    else{
        txtLoyalty.value = 0;
    }
}

btnCheckLoyalty.addEventListener("click", checkLoyalty)