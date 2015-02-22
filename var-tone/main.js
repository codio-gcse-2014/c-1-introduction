
function main() {

  var sine1 = T("sin", {freq:522});
  var sine2 = T("sin", {freq:588});

  T("perc", {r:1000}, sine1, sine2).on("ended", function() {
    this.pause();
  }).bang().play();  
  
}


