 document.addEventListener('scroll',navbarposition);
        window.addEventListener('resize',menubar2);





        // *************************************************  set navbar position when scroll *******************************************************************
        function navbarposition(){
        openorclose=1;    
        if(window.scrollY<=79){
                document.getElementById('navbar').setAttribute('style',`top:${121-window.scrollY}px !important;color:black;background:rgb(214, 212, 212);`);
                document.getElementById('homepage_body_header').setAttribute('style','position:static;');
        }
        else{
                document.getElementById('navbar').setAttribute('style',`top:${121-79}px !important;color:black;background:rgb(214, 212, 212);`);
                document.getElementById('homepage_body_header').setAttribute('style','position:fixed;');
        }
        }






        //******************************************    open navbar onclick   ********************************************************** */
        var openorclose=0;
        function menubar(){
        if(openorclose==0){
            if(window.scrollY<79){
                document.getElementById('navbar').setAttribute('style',`display:block !important;top:${121-window.scrollY}px !important;color:black;background:rgb(214, 212, 212);`);
                document.getElementById('homepage_body_header').setAttribute('style','position:static;');
            }
            else{
                document.getElementById('navbar').setAttribute('style',`display:block !important;top:${121-79}px !important;color:black;background:rgb(214, 212, 212);`);
                document.getElementById('homepage_body_header').setAttribute('style','position:fixed;');
            }
            // document.getElementById("tutorial_body").setAttribute('style','margin-left:230px !important;max-width:90% !important;min-width:50%; !important')
            openorclose=1;
        }
        else{
            document.getElementById("navbar").setAttribute('style','display:none !important;');
            // document.getElementById("tutorial_body").setAttribute('style','margin-left:0px !important;max-width:100% !important;')
            openorclose=0;
        }
        }






        // *************************************       set navbar on resize      ********************************************
        function menubar2(){
        if(window.innerWidth>991){
            if(window.scrollY<79){
                document.getElementById('navbar').setAttribute('style',`display:block !important;top:${121-window.scrollY}px !important;color:black;background:rgb(214, 212, 212);`);
                document.getElementById('homepage_body_header').setAttribute('style','position:static;');
            }
            else{
                document.getElementById('navbar').setAttribute('style',`display:block !important;top:${121-79}px !important;color:black;background:rgb(214, 212, 212);`);
                document.getElementById('homepage_body_header').setAttribute('style','position:fixed;');
            }
            // document.getElementById("tutorial_body").setAttribute('style','margin-left:230px !important;max-width:90% !important;')
        }
        else{
            document.getElementById("navbar").setAttribute('style','display:none !important;');
        }
        }







        // ****************************************  dark and light mode  ******************************************
        var ab=0;
        function mode(){
            console.log("hhh");
            document.querySelector('#navbar').style.color="black";
            document.querySelector('#navbar').style.background="rgb(214, 212, 212)";
            if(ab==0){
            document.querySelector("#header").setAttribute('style','background: black !important;color:white !important ;'); 
            document.querySelector("#header a img").setAttribute('src','w3logoo.png');
            // document.querySelector('#header').setAttribute('style','color:black !important;');
            document.querySelector("body").setAttribute('style','background: black !important;color:white !important ;'); 
            document.querySelector('#footer_end_buttons').setAttribute('style','color:black !important ;');
            document.querySelector('#tutorial_body_left_codecontainer').setAttribute('style','color:black !important;background:gray !important');
            document.querySelector('#tutorial_body_left_codecontainer_in').setAttribute('style','color:black !important;background:whitesmoke !important');
            document.querySelector('#footer_logo img').setAttribute('src','w3logoo.png');
            ab=1;
            }
            else{
            document.querySelector("#header").setAttribute('style','background: white!important;color:black !important ;'); 
            document.querySelector("#header a img").setAttribute('src','w3logo.png');
            document.querySelector("body").setAttribute('style','background: white !important;color:black !important ;');
            document.querySelector('#tutorial_body_left_codecontainer').setAttribute('style','color:black !important;background:whitesmoke !important');
            document.querySelector('#tutorial_body_left_codecontainer_in').setAttribute('style','color:black !important;background:white !important');
            document.querySelector('#footer_logo img').setAttribute('src','w3logo.png');
            ab=0;
            }
        }
