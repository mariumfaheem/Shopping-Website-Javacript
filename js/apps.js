//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });



/*

function showachor(){
    console.log("Inside")
    

    let anchor=document.createElement('a');

     let html=` <a href="#" class="btn btn-primary">ADD TO CART</a>`
     anchor.innerHTML=html;
     product_card_id.append(anchor)
     console.log("created") 

     Array.from(anchor).forEach((element,index)=> {
         console.log(element)
         html+=`<a id="${index}" class="anchor" href="#" >ADD TO CART"</a>`
                  
     });
     element.innerHTML=html;
  

     
     
}

product_card_id.addEventListener("mouseout",removeachor)

function removeachor(e){
    console.log("Outside")

    
     
    }
    
/*

let product_card_id = document.getElementById("product-card-id");
product_card_id.addEventListener("mouseover", func, false);
product_card_id.addEventListener("mouseout", func1, false);
let anchor=document.createElement('a');
let html=`<a id="index" onclick="func(this.index)"  href="#" class="btn btn-primary">ADD TO CART</a>`


function func(index)
{  // not needed since item is already global, 
   // I am assuming this is here just because it's sample code?
   // var item = document.getElementById("button"); 
  
   anchor.innerHTML=html;
   product_card_id.style.display=html
   product_card_id.append(anchor)
}

function func1(index)
{     let anchor=document.getElementById("anchor-id(index)")
let html=""
let anchorreplace=document.createElement("a");
anchorreplace.innerHTML=html;
      product_card_id.replaceChild(anchor,html)
    
}

*/

