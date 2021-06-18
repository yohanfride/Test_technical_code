
<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
  header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token")
?>
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  </head>
<body>
    <div class="wrap">
      <form method="post">
        <input type="number" name="angka" id="angka">
        <br/>
        <br/>
        <button class="btn" type="button" onclick="segitiga()" >Generate Segitiga</button>
      </form>
      <h1>Result</h1>
      <div id="result"></div>

      <script type="text/javascript">
          
      function segitiga(){
        console.log("test");
        var data = {
          angka:$("#angka").val()
        }
        var link = "http://localhost:3001/segitiga/";
        $.ajax({
          url:link,
          data:data,
          type:"post",
          dataType: "json",
          crossDomain: true,
          format: "json",
          success:function(hasil) {
            console.log(hasil);
          }
        })
      }
      </script>
      </div>
<!-- Data Status Akan Ditampilkan disini -->
    </div>
  </body>