    function AddTodo()
    {
        var matter=document.getElementById("clicks");
        var book=matter.value;
        if(book){
        var d= new Date();
        var date=d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();
        var Table=document.getElementById("tablename");
        
        var tr=document.createElement("tr");

        var para = document.createElement("td");
        var para1= document.createElement("td");
        var para2=document.createElement("td");
        var para3=document.createElement("td");

        var node = document.createTextNode(date);
        var node1=document.createTextNode(book);

        var Button=document.createElement("button");
        var Edit=document.createTextNode("Edit");

        var del=document.createElement("button");
        var delet=document.createTextNode("Delete");

        del.classList.add("delete-color");
        del.setAttribute("onclick","remove(this)");
        
        Button.setAttribute("onclick","EDIT(this)");
        Button.classList.add("edit-color");

        del.appendChild(delet);
        Button.appendChild(Edit);

        para.appendChild(node);
        para1.appendChild(node1);
        para2.appendChild(Button); 
        para3.appendChild(del);

        tr.appendChild(para);
        tr.appendChild(para1);
        tr.appendChild(para2);
        tr.appendChild(para3);

        Table.appendChild(tr);
        }
    }
              
    
function remove(name)
{ 
    name.parentElement.parentElement.remove();   
}

function EDIT(name)
{
    var edit=name.parentElement;
    var book= name.parentElement.previousElementSibling;
    var date=book.previousElementSibling;
    var input_book=document.createElement("input");
    input_book.setAttribute("type","text");
    input_book.setAttribute("value",book.textContent);
    book.replaceChild(input_book,book.childNodes[0]);

    var input_date=document.createElement("input");
    input_date.setAttribute("type","text");
    input_date.setAttribute("value",date.textContent);
    date.replaceChild(input_date,date.childNodes[0]);

    var save_button=document.createElement("button");
    var save=document.createTextNode("save");
    save_button.appendChild(save);
    edit.replaceChild(save_button,edit.childNodes[0]);
    save_button.setAttribute("onclick","Change(this)");
    


}
function Change(x)
{
    var save=x.parentElement;
    
    var book= x.parentElement.previousElementSibling;
    var booktext=x.parentElement.previousElementSibling.childNodes[0].value;
    book.innerHTML=booktext;
    var date=x.parentElement.previousElementSibling.previousElementSibling;
    var datetext=x.parentElement.previousElementSibling.previousElementSibling.childNodes[0].value;
    date.innerHTML=datetext;
    var edit_button=document.createElement("button");
    var edit=document.createTextNode("Edit");
    edit_button.appendChild(edit);
    edit_button.setAttribute("onclick","EDIT(this)");
    save.replaceChild(edit_button,save.childNodes[0]);
    
}
function Validate(element)
{
    var username=element.parentElement.previousElementSibling.previousElementSibling.childNodes[1].value;
    var password=element.parentElement.previousElementSibling.childNodes[1].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(!username.match(mailformat)|| !password.match(passw))
        window.alert("Invalid format for credentials");
    else
        window.alert("success");

}