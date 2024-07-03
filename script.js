// to grap the input
const input1  = document.querySelector("#filteritem")
input1.addEventListener("keyup",search)

function search(e)
{
   const inputvalue  = document.querySelector("#filteritem").value.toUpperCase()

//    console.log(inputvalue)



   const ul  = document.querySelector(".list") 

   //another for list
   const li = ul.querySelectorAll("li.A")  // here this gives alll the class with A inside tehe ul


// after this this will amke the array
   for(let i=0;i<li.length;i++)
    {
        let a =  li[i].getElementsByTagName("li")[0]  // this get the first

        if (li[i].innerHTML.toUpperCase().indexOf(inputvalue) > -1)
            {
                // 
                li[i].style.display = ""

            }
            else{
                li[i].style.display = "none"

            }

    }



}