<?php
    require_once('navbar.php');
    header('Access-Control-Allow-Origin: *');
?>
    <link rel="stylesheet" type="text/css" href="assets/css/home.css" />
    <body class="antialiased">
        <main>
            <h1>EcoSort, apprenez à trier en quelques secondes!</h1>
            <p>Ici, nous explorons les enjeux environnementaux qui façonnent notre planète et les solutions qui contribuent à sa préservation. Que vous soyez passionné par la biodiversité, le changement climatique, la conservation des écosystèmes ou encore les modes de vie durables, vous trouverez ici une source d'inspiration et d'information.</p>
            <img src="assets/img/home_poubelle.png">
            <img src="assets/img/home_eco.png">
            <img src="assets/img/home_tri.png">
            <h2>Essayez vous meme</h2>
            <form id="imageUploadForm" enctype="multipart/form-data">
                <input type="file" name="image" id="imageInput" accept="image/*" required>
                <button type="submit">Upload Image</button>
            </form>
            <div id="response" hidden> </div>
        </main>
    </body>
</html>
<script>

    document.getElementById('imageUploadForm').addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('response').setAttribute('hidden', true);
        document.getElementById('response').innerHTML = 'Poubelle '

        const formData = new FormData();
        formData.append('file', document.getElementById('imageInput').files[0]);
        formData.append('name', document.getElementById('imageInput').files[0].name);
        formData.append('from', 'web');

        axios.post('http://193.203.191.151:5000/api/predict', formData)
            .then(function (response) {
                document.getElementById('response').removeAttribute('hidden');
                document.getElementById('response').innerHTML += response.data;
                
            })
            .catch(function (error) {
                console.error(error);
            });
    });
</script>
