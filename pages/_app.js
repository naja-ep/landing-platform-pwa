import { useEffect } from 'react';
import '../styles/globals.css'



//external user id 난수화
function randomDigitCharacterslength(lenth){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < lenth; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}





function MyApp({ Component, pageProps }) {

  
  
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
      OneSignal.SERVICE_WORKER_PARAM = { scope: '/onesignal/' };
      OneSignal.SERVICE_WORKER_PATH = '/OneSignalSDKWorker.js';
      OneSignal.SERVICE_WORKER_UPDATER_PATH = '/OneSignalSDKUpdaterWorker.js';
      OneSignal.init({
        appId: "03c2259c-7a26-47e7-b52e-42aa1a947070", //실서버
        //appId: "ed203017-82b0-43f9-ac75-e39079746cb5", //개발서버
        safari_web_id: "web.onesignal.auto.2510e921-2066-4b3b-be25-8e0e09bd836c",
        subdomainName: "당신의 서브도메인 여기에",
        welcomeNotification : {
          disable:true,
          title:"웰컴알림의 제목",
          message:"웰컴알림의 내용입니다. 구독해주셔서 감사합니다."
        },
        notifyButton: {
          enable: true,
          size: "medium", //버튼사이즈 : large, medium(기본값), small(활성화되었을 경우의 기본값)
          position: "bottom-right", //버튼 위치 : bottom-left, bottom-right(기본값)
        },
        allowLocalhostAsSecureOrigin: true,
      });


      OneSignal.getExternalUserId().then(function(externalUserId){
        //setExternalUserId(externalUserId);
        //SendPushHello(externalUserId);
        if(externalUserId == null || externalUserId == undefined ){
          console.log('없을때: '+externalUserId);
          const ramdonText = randomDigitCharacterslength(5);
          const newExternalUserId = ramdonText;
          console.log('new:' + newExternalUserId)
          OneSignal.setExternalUserId(newExternalUserId);
        } else {
          console.log('있을때: '+externalUserId);
        }
      });

    });

    return () => {
        window.OneSignal = undefined;
    };
  }, []); // <-- run this effect once on mount





  return <Component {...pageProps} />
}

export default MyApp
