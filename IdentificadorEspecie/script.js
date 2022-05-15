window.addEventListener("load",function(){
    document.getElementById('capture').onchange = function (evt) {
        var tgt = evt.target || window.event,
            files = tgt.files;

        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById('PredictedPicture').src = fr.result;
            }
            fr.readAsDataURL(files[0]);
        }
    }
        
    button.addEventListener("click", function(){
        const file = document.getElementById('capture').files[0];
        console.log(file);

        var URL = "https://eastus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/f3bfcd31-a17d-46ff-9250-e2d531479bf1/classify/iterations/Iteration2/image";
        var prueba = new XMLHttpRequest();

        prueba.open('POST', URL, true);
        prueba.setRequestHeader('Prediction-Key','987014cfa11b4bb199427d1aed0f4b7a');
        prueba.setRequestHeader('Content-Type','application/octet-stream')

        prueba.send(file); 

        prueba.onreadystatechange = processRequest;

        function processRequest(e){
            if(prueba.readyState == 4 && prueba.status == 200){
                console.log(typeof(prueba.responseText));
                var json = JSON.parse(prueba.responseText);
                console.log(json);
                console.log(json.predictions[0]['probability']);
                console.log(typeof(json));  

                document.getElementById("Especie").textContent = json.predictions[0]['tagName'];
                document.getElementById("Probabilidad").textContent = json.predictions[0]['probability'] * 100 + '%';
            }
        }
    },false);

},false);   
