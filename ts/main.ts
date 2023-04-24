window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main(): void{
    resetErrorMessages();
    isTextPresent("first-name","First name is required");
    isTextPresent("last-name","Last name is required");
}
/**
 * Reset all the spans back to the default text
 */
function resetErrorMessages(): void{
    let allSpans = document.querySelectorAll("form span");
    for(let i = 0; i < allSpans.length; i++){
        let currentSpan = <HTMLElement>allSpans[i];
        if(currentSpan.hasAttribute("data-required")){
            currentSpan.innerHTML = "*";
        }
        else{
            currentSpan.innerHTML = "";
        }
    }
}

/**
 * Returns true if the text box with the given 
 * id has some text inside of it
 * @param id  the id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span of
 * the text box
 * @returns boolean
 */

function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errorSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errorSpan.innerText = errMsg;
        return false;
    }
    return true;
}

