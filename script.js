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

    if(mysize=="default"){
        var h1 = "https://";
        var h2 = "http://";
        myUrl = myUrl.replace(h1,"");
        myUrl = myUrl.replace(h2,"");
        myImg.src = duckapi+myUrl+".ico";
    }
}