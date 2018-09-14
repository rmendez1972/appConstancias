export default (html) => `
    <!doctype html public="storage">
    <html lang="en">
        <head>
            <base href="/">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8, shrink-to-fit=no" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="description" content="">
            <meta name="author" content="">
            <link rel="shortcut icon" href="./constancias.ico">




            <title>Sistema de Constancias</title>



            <link href="/assets/css/bootstrap/bootstrap.min.css" rel="stylesheet">


            <link href="/assets/css/font-awesome.min.css" rel="stylesheet">


            <link href="/assets/css/fonts.css" rel="stylesheet">

            <link href="/assets/css/iconmoon.css" rel="stylesheet">

            <script src="/assets/js/modernizr-custom.js"></script>
            <link href="/assets/css/constancias.css" rel="stylesheet">
        </head>
        <body>
            <header>
              <div class="container" style="border-bottom-width: 5px;border-bottom: solid;border-bottom-color: #00A6CA;padding-bottom: 3px;margin-bottom: 10px;background-color:#ffffff;">
                <img src="/assets/img/header.png"  alt="" class="img-responsive">
              </div>
            </header>



            <div class="container show">

                <div class="row">
                  <!--<div class="col-lg-10  col-md-10 col-md-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-0 col-xs-offset-0">-->
                      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-blue" style="width:100%;">

                          <div id="app" style="margin-left: -10px;">${html}</div>
                      </nav>
                  <!--</div>-->
                </div><!-- /row -->
            </div>

             <footer class="fotter">
                <div class="container footter21">
                  <div class="row">

                      <div  class="col-xs-12 col-sm-12 col-md-2 col-lg-2" >
                          <img src="/assets/img/ceiba_blanca_pequeña.png"  alt="">
                      </div>
                    <div  class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      Secretaría de Desarrollo Territorial Urbano Sustentable.<br>
                      Gobierno del Estado de Quintana Roo.<br>
                      Administración 2016-2022.<br>
                      Av.Alvaro Obregón #474. Col. Centro C.P.7700<br>
                      <a href="http://qroo.gob.mx/sedetus" target="_blank" style="text-decoration:none;color:#384452">http://qroo.gob.mx/sedetus</a>
                    </div>
                    <div  class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <p style="text-align:center;padding-top:30px;font-size:2em;">
                            <a href="https://www.facebook.com/SEDUVI" target="_blank"><i class="fa fa-facebook" style="color:#ffffff;"></i></a>
                            <i>  </i>
                            <a href="https://twitter.com/SEDUVIQROO" target="_blank"><i class="fa fa-twitter" style="color:#ffffff;"></i></a>
                          </p>

                    </div>
                  </div>
                  </div>
            </footer>

            <script src="/assets/js/jquery.min.js"></script>
            <script src="/assets/js/bootstrap.min.js"></script>
            <script src="/bundle.js"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        </body>
    </html>
`;