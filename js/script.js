
function adSetter(){
    alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3940256099942544/6300978111',
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    //admobid = { // for iOS
     //   banner: 'ca-app-pub-6869992474017983/4806197152',
    //};
} else {
    //admobid = { // for Windows Phone
   ///     banner: 'ca-app-pub-6869992474017983/8878394753',
    //};
}

if(AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );

   if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} ); 

}
  function onDeviceReady(){
  alert("device ready");
      adSetter();
  }

function backCall(e){
// pormt when back button is pressed on home screen
  e.preventDefault();
  var action=confirm("Do you want to Exit");
  if(action){
      if(AdMob) AdMob.showInterstitial();
      navigator.app.exitApp();
  }
}

window.onload=function(){
    document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener("backbutton", backCall, false);
}