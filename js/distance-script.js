
$(function () {
    $("[name = selection]").click(function () {
        $('.desc').hide();
        $("#w-" + $(this).val()).show('slow');
    });
});

var inputs = ['kmsInput', 'ctsInput', 'mtsInput', 'mlsInput', 'ftsInput', 'insInput', 'yrsInput'];
var exec = ['kms', 'cts', 'mts', 'mls', 'fts', 'ins', 'yrs']
var n = 7;

    for(var i = 0 ; i < n ; i++)
    {
         if(document.getElementById(inputs[i]))
           converter(exec[i]);
    }

//================================ Function Converter =================================
//=====================================================================================
function converter(distance) {
    //If user enters weight (either in kms, mts, cts, mls, fts, or ins)
    if (distance === 'kms'){
        document.getElementById('kmsInput').addEventListener('input', function (e) 
        {
            let kms = e.target.value; 
           
          //  if(isNaN(kms)) alert("error, you must a number!");

                document.getElementById('mtsOutput-1').innerHTML = (kms * 453.59237).toFixed(3);
                document.getElementById('ctsOutput-1').innerHTML = (kms * 0.45359237).toFixed(3);
                document.getElementById('insOutput-1').innerHTML = (kms * 16.0).toFixed(1);
                document.getElementById('ftsOutput-1').innerHTML = (kms * 16.0).toFixed(1);
                document.getElementById('mlsOutput-1').innerHTML = (kms * 16.0).toFixed(1);
                document.getElementById('yrsOutput-1').innerHTML = (kms * 1094.0).toFixed(1);
                check(); 
                color_transition();
            
        });
    } else if (distance === 'cts'){
        document.getElementById('ctsInput').addEventListener('input', function (e) 
        {
            let cts = e.target.value;
            
            //if(isNaN(mts)) alert("error, you must a number!");

                document.getElementById('kmsOutput-2').innerHTML = (cts * 1000.00).toFixed(1);
                document.getElementById('mtsOutput-2').innerHTML = (cts * 2.20462262185).toFixed(3);
                document.getElementById('insOutput-2').innerHTML = (cts * 35.27396195).toFixed(3);
                document.getElementById('ftsOutput-2').innerHTML = (cts * 16.0).toFixed(1);
                document.getElementById('mlsOutput-2').innerHTML = (cts * 16.0).toFixed(1);
                document.getElementById('yrsOutput-2').innerHTML = (cts * 109.0).toFixed(1);
                color_transition();

        });
    } else if (distance === 'mts'){
        document.getElementById('mtsInput').addEventListener('input', function (e) 
        {
            let mts = e.target.value;
            
           // if(isNaN(cts)) alert("error, you must a number!");
  
                document.getElementById('kmsOutput-3').innerHTML = (mts * 28.34952).toFixed(3);
                document.getElementById('ctsOutput-3').innerHTML = (mts * 0.0625).toFixed(3);
                document.getElementById('mlsOutput-3').innerHTML = (mts * 0.02834952).toFixed(3);
                document.getElementById('ftsOutput-3').innerHTML = (mts * 0.0625).toFixed(3);
                document.getElementById('insOutput-3').innerHTML = (mts * 0.02834952).toFixed(3);
                document.getElementById('yrsOutput-3').innerHTML = (mts * 1.09).toFixed(1);
                color_transition();  
        });
    } else if (distance === 'mls'){
        document.getElementById('mlsInput').addEventListener('input', function (e) {
            let mls = e.target.value;
            
          //  if(isNaN(grs)) alert("error, you must a number!");

                document.getElementById('ftsOutput-4').innerHTML = (mls / 1000.00).toFixed(3);
                document.getElementById('insOutput-4').innerHTML = (mls * 0.00220462).toFixed(3);
                document.getElementById('kmsOutput-4').innerHTML = (mls * 0.03527396).toFixed(3);
                document.getElementById('mtsOutput-4').innerHTML = (mls * 0.00220462).toFixed(3);
                document.getElementById('ctsOutput-4').innerHTML = (mls * 0.03527396).toFixed(3);
                document.getElementById('yrsOutput-4').innerHTML = (mls * 1760.0).toFixed(3);
                color_transition();

        });
    }else if(distance === 'fts'){
        document.getElementById('ftsInput').addEventListener('input', function(e){
            let fts = e.target.value;

          //  if(isNaN(fts)) alert("error, you must a number!");

            document.getElementById('kmsOutput-5').innerHTML = (fts / 1000.0).toFixed(3);
            document.getElementById('ctsOutput-5').innerHTML = (fts * 0.00220462).toFixed(3);
            document.getElementById('mtsOutput-5').innerHTML = (fts * 0.03527396).toFixed(3);
            document.getElementById('mlsOutput-5').innerHTML = (fts * 0.00220462).toFixed(3);
            document.getElementById('insOutput-5').innerHTML = (fts * 0.03527396).toFixed(3);
            document.getElementById('yrsOutput-5').innerHTML = (fts * 0.033).toFixed(3);
            color_transition();
        });

    }else if(distance === 'ins'){
        document.getElementById('insInput').addEventListener('input', function(e){
            let ins = e.target.value;

           // if(isNaN(ins)) alert("error, you must a number!");

            document.getElementById('ftsOutput-6').innerHTML = (ins / 1000.0).toFixed(3);
            document.getElementById('mlsOutput-6').innerHTML = (ins * 0.00220462).toFixed(3);
            document.getElementById('kmsOutput-6').innerHTML = (ins * 0.03527396).toFixed(3);
            document.getElementById('ctsOutput-6').innerHTML = (ins * 0.00220462).toFixed(3);
            document.getElementById('mtsOutput-6').innerHTML = (ins * 0.03527396).toFixed(3);
            document.getElementById('yrsOutput-6').innerHTML = (ins * 0.028).toFixed(3);
            color_transition();
        });

    }else if(distance === 'yrs'){
        document.getElementById('yrsInput').addEventListener('input', function(e){
            let yrs = e.target.value;

           // if(isNaN(ins)) alert("error, you must a number!");

            document.getElementById('ftsOutput-7').innerHTML = (yrs * 3.0).toFixed(3);
            document.getElementById('mlsOutput-7').innerHTML = (yrs * 0.00057).toFixed(3);
            document.getElementById('kmsOutput-7').innerHTML = (yrs * 0.00091).toFixed(3);
            document.getElementById('ctsOutput-7').innerHTML = (yrs * 91.0).toFixed(3);
            document.getElementById('mtsOutput-7').innerHTML = (yrs * 0.91).toFixed(3);
            document.getElementById('insOutput-7').innerHTML = (yrs * 36.0).toFixed(3);
            color_transition();
        });

    }
}//end converter()

function color_transition()
{
    $("#app-container").css({
        transition : 'background-color 1500ms ease-in-out',
        "background-color": "rgba(1, 12, 19, 0.6)"
    });
}

function check() {
    if(document.getElementById("one").checked){
        $("#app-container").css({
            transition : 'background-color 1500ms ease-in-out',
            "background-color": "#333"
        });
    }
}
