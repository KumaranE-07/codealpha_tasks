var display=document.getElementById("display")
function displayvalue(input)
{
    display.value+=input
}
function wholedel()
{
    display.value=""
}
function singledel()
{
    display.value=display.value.slice(0,-1)
}
function displayresult()
{
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value="Error"
    }
}