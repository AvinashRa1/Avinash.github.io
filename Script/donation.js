const donationForm = document.getElementById("donationForm");
const btnSubmit = document.getElementById("submit");
const donationChoices = document.getElementsByName("check") 
const dnAlert = document.getElementById("alertDonations")
const nameAlert = document.getElementById("alertFullName")
const addressAlert = document.getElementById("alertAddress")
const cardNumAlert = document.getElementById("alertCardNum")
const expMonthAlert = document.getElementById("alertMM")
const expYearAlert = document.getElementById("alertYY")
const cvcAlert = document.getElementById("alertCVC")

let count = 0;
let txtFullName = document.getElementById("fname");
let txtAddress = document.getElementById("address");
let cardNum = document.getElementById("cardNum");
let expDateMonth = document.getElementById("MM");
let expDateYear = document.getElementById("YY");
let cvcNum = document.getElementById("cvc"); 

function checkDonation(){
    if(this.value == "100"){
        if(this.checked){
            count++;
        }
        else{
            count--;
        }
    }
    else if(this.value == "500"){
        if(this.checked){
            count++
        }
        else{
            count--
        }
    }
    else if(this.value == "1000"){
        if(this.checked){
            count++
        }
        else{
            count--
        }
    }
    else if(this.value == "2000"){
        if(this.checked){
            count++
        }
        else{
            count--
        }
    }
    else if(this.value == "5000"){
        if(this.checked){
            count++
        }
        else{
            count--
        }
    }
    else if(this.value == "10000"){
        if(this.checked){
            count++
        }
        else{
            count--
        }
    }
}

function submit(evt){
    if(donationForm.checkValidity()){
        evt.preventDefault();
        if(count > 0){
            dnAlert.innerText = "";
            if(txtFullName.value != "" && txtFullName.value.length > 5){
                nameAlert.innerText = ""
                if(txtAddress.value != "" && txtAddress.value.length > 10){
                    addressAlert.innerText = ""
                    if(cardNum.value != "" && cardNum.value.length == 16){
                        cardNumAlert.innerText = ""
                        if(expDateMonth.value > 0 && expDateMonth.value < 13 && expDateMonth != ""){
                            expMonthAlert.innerText = ""
                            if(expDateYear.value >= 2022 && expDateYear.value != ""){
                                expYearAlert.innerText = "";
                                if(cvcNum.value != ""){
                                    cvcAlert.innerText = "";
                                    alert("Thank you for your donation!")

                                }
                                else{
                                    cvcNum.focus();
                                    cvcAlert.innerText = "*Please Enter a Valid CVC/CVV"
                                }
                            }   
                            else{
                                expDateYear.focus();
                                expYearAlert.innerText = "*Please Enter a Valid Year"
                            }
                        }
                        else{
                            expDateMonth.focus();
                            expMonthAlert.innerText = "*Please Enter a Valid Month"
                        }
                    }
                    else{
                        cardNum.focus();
                        cardNumAlert.innerText = "*Please Enter a Valid Card Number"
                    }
                }
                else{
                    txtAddress.focus();
                    addressAlert.innerText = "*Please Enter a Valid Address"
                }
            }
            else{
                txtFullName.focus();
                nameAlert.innerText = "*Please Enter a Valid Name"
            }
        }
        else{
            dnAlert.focus();
            dnAlert.innerText ="*Please select atleast one choice";
        }
    }
}

donationChoices.forEach(dchoice => dchoice.addEventListener("change", checkDonation))

btnSubmit.addEventListener("click", submit);