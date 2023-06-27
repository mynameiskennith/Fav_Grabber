function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };

function startIT(){
    var myUrl = document.getElementById("urlText").value;

    if(myUrl==""){
        alert("Please Enter URL !!!");
    }else if(myUrl!="" && isValidURL(myUrl)==true){
        grabFAV();
    }else{
        alert("Please Enter Valid URL !!!");
    }
}

function grabFAV(){
    var myUrl = document.getElementById("urlText").value;
    var myImg = document.getElementById("favimg");
    var mysize = document.getElementById("size").value;
    var duckapi = "https://icons.duckduckgo.com/ip3/";

    var h1 = "https://";
    var h2 = "http://";
    myUrl = myUrl.replace(h1,"");
    myUrl = myUrl.replace(h2,"");
    if(mysize=="default"){
        myImg.src = duckapi+myUrl+".ico";
    }else if(mysize==16){
        myImg.src = googapi+myUrl+"&sz="+16;
    }else if(mysize==32){
        myImg.src = googapi+myUrl+"&sz="+32;
    }else if(mysize==64){
        myImg.src = googapi+myUrl+"&sz="+64;
    }else if(mysize==128){
        myImg.src = googapi+myUrl+"&sz="+128;
    }
}
