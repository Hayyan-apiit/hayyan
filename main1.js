
/*----------------------------------------MAIN.JS DONATION FORM-------------------------------------------------*/




// inputs
const f_name = document.getElementById("f_name");
const address = document.getElementById("address");
const email = document.getElementById("email");
const telphone = document.getElementById("telphone");
const c_number = document.getElementById("c_number");
const cvc = document.getElementById("cvc");
const detail = document.querySelector("#detail");
const amount = document.querySelector("#amount");

// buttons
const button = document.getElementById("button");

// outputs
const output = document.getElementById("output");

const result = {
    f_name: "",
    address: "",
    email: "",
    telphone: 0,
    c_number: 0,
    cvc: 0,
    detail: "",
    amount: ""
}


let fav = document.getElementById("button");
fav.addEventListener("click", function(don){
    don.preventDefault();

    if(f_name.value == "" || address.value == "" || telphone.value == 0 || c_number.value == 0 || cvc.value == 0){
        alert("Please fill out the fields")
    }else{
        result.f_name = f_name.value;
        result.address = address.value;
        result.email = email.value;
        result.telphone = telphone.value;
        result.c_number = c_number.value;
        result.cvc = cvc.value;
        result.detail = detail.value;
        result.amount = amount.value;

        output.innerText = 
        "Name: " + result.f_name + "\n" +
        "Address: " + result.address+ "\n" +
        "E-mail: " + result.email + "\n" +
        "Telephone: " + result.telphone + "\n" +
        "Credit Card Number: " + result.c_number + "\n" +
        "CVC: " + result.cvc + "\n" +
        "Donation Type: " + result.detail + "\n" +
        "Donation Amount: " + result.amount;
        /*
        
       
        
        result.detail = detail.value;
        result.amount = amount.value;*/

        
    }
});
