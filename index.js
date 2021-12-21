
$(document).ready(function(){
    var submit = $('.submit'), 
        ooeInput = $('#ooe-input'), 
        ooeSubmit = $('.ooe-submit'), 
        ooeResult = $('.ooe-result'), 
        rsInput = $('#rs-input'), 
        rsSubmit = $('.rs-submit'), 
        rsResult = $('.rs-result'), 
        pldInput = $('#pld-input'), 
        pldSubmit = $('.pld-submit'), 
        pldResult = $('.pld-result'), 
        srInput = $('#sr-input'), 
        srSubmit = $('.sr-submit'), 
        srResult = $('.sr-result'), 
        fnInput = $('#fn-input'), 
        fnSubmit = $('.fn-submit'),
        fnResult = $('.fn-result');
    
    $('.link').on('click', function(){
        $(this).text("true");
        dropdownList.slideToggle(250);
    });
    
    submit.attr('disabled', 'true');
    
    /* Odd or Even */
    ooeInput.on('input', function(){
        if(ooeInput.val() !== ""){
            ooeSubmit.removeAttr('disabled');
        }else{
            ooeSubmit.attr('disabled', 'true');
        }
    });
    
    ooeSubmit.on('click', function(){
        if(ooeInput.val() % 2 === 0){
            ooeResult.text(""+ooeInput.val()+" is an EVEN number.")
            ooeResult.css({ opacity: '1' });
        }else{
            ooeResult.text(""+ooeInput.val()+" is an ODD number.")
            ooeResult.css({ opacity: '1' });
        }
    });
    
    /* Reverse a String */
    rsInput.on('input', function(){
        if(rsInput.val() !== ""){
            rsSubmit.removeAttr('disabled');
        }else{
            rsSubmit.attr('disabled', 'true');
        }
    });
    
    rsSubmit.on('click', function(){
        //split() - to separate each letters with comma separator
        //reverse() - to reverse the placement of letters
        //join() - to rejoin or merge the splitted letters
        rsResult.text(rsInput.val().split('').reverse().join(''));
        rsResult.css({ opacity: '1' });
    });
    
    /* Palindrome */
    pldInput.on('input', function(){
        if(pldInput.val() !== ""){
            pldSubmit.removeAttr('disabled');
        }else{
            pldSubmit.attr('disabled', 'true');
        }
    });
    
    pldSubmit.on('click', function(){
        var reversed = pldInput.val().split('').reverse().join('');
        var newReversed = reversed.toLowerCase().replace(/\s/g,'');
        //replace() is used with REGEX to remove spaces from a string
        if(pldInput.val().toLowerCase().replace(/\s/g,'') === newReversed){
            pldResult.text('Reversed string: '+ reversed);
            pldResult.append('<br />'+ pldInput.val() +' IS a palindrome string.');
            pldResult.css({ opacity: '1' });
        }else{
            pldResult.text('Reversed string: '+ reversed);
            pldResult.append('<br />'+pldInput.val()+' IS NOT a palindrome string.');
            pldResult.css({ opacity: '1' });
        }
    });
    
    /* String Rotation */
    srInput.on('input', function(){
        if(srInput.val() !== ""){
            srSubmit.removeAttr('disabled');
        }else{
            srSubmit.attr('disabled', 'true');
        }
    });
    
    srSubmit.on('click', function(){
        srResult.text("");
        var stringArr = [];
        for(var i = 0; i < srInput.val().length; i++){
            stringArr.push(srInput.val().charAt(i));
            if(i === srInput.val().length - 1){
                break;
            }
        }
        for(var s = 0; s < srInput.val().length; s++){
            stringArr.unshift(stringArr.pop());
            if(s === srInput.val().length - 1){
                srResult.append(stringArr.join(''));
            }else{
                srResult.append(stringArr.join('') +', ');
            }
        }
        srResult.css({ opacity: '1' });
    });
    
    
    /* Factorial Number */
    fnInput.on('input', function(){
        if(fnInput.val() !== ""){
            fnSubmit.removeAttr('disabled');
        }else{
            fnSubmit.attr('disabled', 'true');
        }
    });
    
    fnSubmit.on('click', function(){
        if((fnInput.val() > 0) && (fnInput.val() < 11)){
            fnResult.text("");
            
            //Print factorial of a number
            for(var n = fnInput.val(); n > 0; n--){
                
                if(n === 1){
                    fnResult.append(n);
                }else{
                    fnResult.append(n + ' &times; ');
                }
            }
            //Merge numbers from for loop into an array
            var arr = [], resultTable = "";
            for(var t = 1; t <= fnInput.val(); t++){
                //push() - to add multiplication operator in every number
                //join() - to merge all the strings into one
                arr.push(t); arr.push('*');
                resultTable = arr.join('');
            }
            //slice() - to remove the (*) multiplier operator at the last character
            var result = resultTable.slice(0, resultTable.length - 1);
            
            //I know, eval() is EVIL
            fnResult.append(' = '+eval(result)+'<br />Factorial Number of '+fnInput.val()+' is '+ eval(result) +'');
            fnResult.css({ opacity: '1' });
        }else{
            fnResult.text("Sorry, I only accept numbers ranged from 1 - 10 only.");
            fnResult.css({ opacity: '1' });
        }
    });
});
