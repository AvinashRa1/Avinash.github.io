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
    let input = buttonClicked.parentElement.children[1];
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

for(let i = 0; i < plus.length; i++){ //click event for increment
    let button = plus[i];
    button.addEventListener('click', Add)
}

function Minus(event){ //function to decrement
    let buttonClicked = event.target;
    let input = buttonClicked.parentElement.children[1];
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

for(let i = 0; i < minus.length; i++){ //click event for decrement
    let button = minus[i];
    button.addEventListener('click', Minus)
}

function durPrice(){
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

function addToOrder(evt){
    if(ticketForm.checkValidity()){
        evt.preventDefault(); //important
        if(txtFullName.value.length > 10 && txtFullName.value != ""){ //name validation
            nmAlert.innerText = "";
            if(txtPhoneNum.value.length == 13 && txtPhoneNum != ""){ //phone number validation
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
            
                        temp += (cost + totDuration)
                        addTotPrice.innerText = temp
                        
                        slAdult.innerText = 0;
                        slChild.innerText = 0;
                        fAdult.innerText = 0;
                        fChild.innerText = 0;
                        infant.innerText = 0; 

                        slAdultNum = 0
                        slChildNum = 0 
                        fAdultNum = 0;
                        fChildNum = 0;
                        infantNum = 0;
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

function removeOrder(evt){
    if(ticketForm.checkValidity()){
        evt.preventDefault();
        slAdultNum = 0;
        slChildNum = 0;
        fAdultNum = 0;
        fChildNum = 0;
        infantNum = 0;
        addSlAdultTkts.innerText = slAdultNum;
        addSlChildTkts.innerText = slChildNum;
        addFAdultTkts.innerText = fAdultNum;
        addFChildTkts.innerText = fChildNum;
        addInfantTkts.innerText = infantNum;
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
        if(txtFullName.value.length > 10 && txtFullName.value != ""){
            nmAlert.innerText = "";
            if(txtPhoneNum.value.length == 13 && txtPhoneNum != ""){
                numAlert.innerText = "";
                if(txtConfirmEmail.value === txtEmail.value && txtEmail.value != ""){
                    emAlert.innerText = "";       
                    if(totTickets > 0){
                        tktAlert.innerText = ""
                        favourite = {fullName : txtFullName.value, phoneNumber : txtPhoneNum.value, email : txtEmail.value, gender : selectGender.value, slAdultTicket : slAdultNum, slChildTicket : slChildNum, fAdultTicket : fAdultNum, fChildTicket : fChildNum, infantTicket : infantNum, duration : optDur.value, totalPrice : parseInt(txtCost.innerText)};
                        JSONfavourite = JSON.stringify(favourite)
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
        let getFav = localStorage.getItem("favourite", JSONfavourite)
        let getFavourite = JSON.parse(getFav)
        addFullName.innerText = getFavourite["fullName"]
        getFavourite["slAdultTicket"] += tempSlAdultTickets;
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
            loyaltyTemp += 15
        }
        txtLoyalty.value = loyaltyTemp; //to display the loaylty points

        let loyalty = {loyaltyPoints : loyaltyTemp};  
        let JSONloyalty = JSON.stringify(loyalty);
        localStorage.setItem("loyalties", JSONloyalty); //to store the loyalty points
        loyaltyTemp = 0;
    }
    else{
        txtLoyalty.value = 0;
    }
}

btnCheckLoyalty.addEventListener("click", checkLoyalty)