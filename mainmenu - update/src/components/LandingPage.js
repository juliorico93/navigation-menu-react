import React, { Component } from 'react';

import { Report } from 'powerbi-report-component';

export default class extends Component {


  state = {
    posts: []
        }
        
       async componentDidMount() {
           const url = "https://icuhelperfunctions.azurewebsites.net/api/getTokenPowerBi?code=vvanYgV6CrStwWIn0nyjAT73dOkGDa/duSDTm8bDOXPcOaYBpJ0aaw==";
           const response = await fetch(url);
           const data = await response.json();
           this.setState({posts: data})
           console.log(data)
       }


  onEmbedded(embed) {
    console.log(`Report embedded: `, embed, this);
  }

  render() {
    const Style = {
      height: 1008,
      
    }
  
    return (
      <div>
 <Report
   tokenType="Embed"
   accessToken= "H4sIAAAAAAAEACWWxQ70iBGE3-W_OpKZIu3BTGOGsX0zM7OjvHsmu_eSWv2pq6v-88dKnn5K8j___pO2cm9zZWaj-umOukB9ngAhXW0feQ2P15m3bBf1MJ2AB2sIUPZZh6QNBPxzb6i71-SaGpzmBHGL0FcA5T6SlK8fErDQzDmxuzufM7xfPt-mMZydNij38Cl-lVRtpdUYoauT4xgEh7UWMg0RpFYaCJqTpbIVoqeJoS6lpmTodXJMVcf2k4yBPxmVR3MFdXRwT1r3wdvcOZOtbcR34p-q9SH9sIK3ja8GivB04JSNIMfAbcty35kTBB6eJCacmmrXjHBx7PMlN9w0tsvMJeu7N6DMi-a5s6--pnCSFBzhAarEiYMH2CFoVxNlGLkdcPhJ8rjhA5exI0jnouGovIoVymvf7CGN1DvfyYK-z_1NLL3EfSY_LTImXUmi9E4twK5c0lyMd8APJcbdlsdtLxTW6TallBfGLG6BpQNNElsjH-HfvPwKYhhRa8-GH42D7WZQZsvGnUT56lJM9pTonED7Rs4DGgiOdwZL6W-GSzjWSHbYLIRdIrEiz1wr9udLl5PKYieEbuPLE7flUjX7vKieO7SpjEGUJYHLv9IUfclHkvyxp9uq8tcBd_gkgSYWhdooAnovfgMISZUPXvZXWru3l0bHPLqC5hV9EKBmr8IGc-ZWXLEPdLuf3Mg00KSC2BcWb1TsgZcvTu3UlHMQVeDtz55nVtek7THp34c2S6YmzZhQUEQSvvkwj3ncqbvJ72LTjHtCxHorCZr5YVw9vTJVd2c-YRKeSN_iHhXIaRSgebaYXmyGVDxcCOBXOwb9vrkJPD8A7FQAqu-av-Gq1KE-ToLEAcemFxyCHAjOhEJinDmOyO7iVwUVl3Ifh79xS1AmoM2xmX-V3pbUIIUyjrKJUbmbyYJXMEiljs825RmusmAohHvnb5vOskG72T7_eIKpCQgu-ZYbptUHCCmuxgiAONyliBFVcvtTiW-uZoSiudwHlM8FzxghmnlLjok2sx2FGFngoJWb8L7fvJ80imU3yJokieGChdmojY3J84qr2XjZ_VlFSz9y3JGccuqGQ6np9eujj2BpxJC3UJQfBUpnI3VZKPatoQHIqWPZHkc_W46gGLBgXR2SgMDAmKSAuyDuNXiBv8OLxImk8-blMPYUwc8zf7gK0dlg_eBvMVWo4HACWMdqZ8OGitmagb6Vmu3IEJN43aISA1Ldwik82hJ2RrBVXNeLWH1l-7Jjq9l2fA0Iz2hdCqiJxn1mKN7p8iVXT4oV2l6bZpM-lVBmYopjlGsg8tzigu92-15T_QqoDfaWWZ1M4O2NUNkYDLfPSECQT4Lu3AmdguKgLjWiUdtRPoAIltzVxkqbaPTpqJXHy915w6mIBteFskjXO7ik5gFW9AezVi1UcVcDZ56kMMDiP-Ei8vJtV0hFKioBhHOtspPKPcMysPNMzfEP2fWm2_PKqDGity6aMPRypSnuZDR24hGH6jiooRGO7Pbp5MVg46D4-ciyIae-tTsv5_FWrJuFh6TpCWmAXnSdFhPRTVCkBznhWFeuMmyMYM1XyAHi0o06hK9j9Ud0nLgsb6TEIyBf5N94AbVbX5rHKMeIr-_NCSFSh1EWSg17ARgRr8nHrLF8YGvdZSV7DUI-KGRMTZyRNjshgT-eHd_Rfe-jvdjhmH8DNmoPQ2Zs_D3OZVPhQt6joKmLY2fk5KpzKJjJazWEevE4--TZlcoAY7MVKW0_Owkezrbw8RJuH6WrAxOx9iBegt6VvW7HeJ9Fxdb7LY1UOuhDfgxA6LOpOjRctxUrUIjdVFxQScHU99qZlS3UXgTSWwvaAC06r9N7oaKHzFJm5PYBmyzdg8KSWuXn1WZlcVZ9SsZj7DDykVX0QpBjNIsjMeb-MNVZkCNL9PB1PyfY8pjM9SMULh09DYXsnNF3C_jFACE4igaLSU1pYvTfdHFbVrc3KPWXa5nZmoAH8tJyQ5IPwClIEKRmFH1etunyxmiwPaCoDZAQJpxvaK6l2Upgxvg5VdRzxj8lAk1tfJlnWpZ6pXzhi4U5uAnkuESfSyUFUzTbeGc5Yqpylf9ZEu2oS355NBg6PhT9dr4AGhzlGyeUViwG7YFh5DcyV3f_PKXx4FJyvf7668-__nDrM--TVjy_mmAjrlf5YMFch5qNWSJ8Nyq1lqZWwv0uc4T6RWvJaSkwk6AsZoU_DhsqpIZ4kIL_S9OZLpunmyV9hDfFmOOzGz8M8eHktmyBfHcwmGgDi2DnKHZ16h64BhY7dMaGoDOB3YbHLx4Y7TB8yaHQlNZusACpq9ykFFnGEBDmeh7QgPQ9k84UWMUDppsf2ALLGWP1K5VGmgOaSHKUnOTtIMuORgkn2vsYuXZsWsWMQXQkuHbzNbUqJw0Q0klVHMZdO0gGlW-vlubc97TiNa8CFbNT_u6WyFftpu6z-30eguGPAAO66N1EGecHm0sZFHi6AJWdAT2U8EDbAQw7I6yjOTlotstQ3_4H8zPXxaoEP8qGZV1DattM1TZqv4H4WYUe87fKbaox2Y-1-MmqhBMvpwc4H-6VdUL0FehiFLUg8DNANMGmDx5qgnQTsBTHMtzEh6VW5FFPeAtxwNtVJWM0ZsLplYf9yhQ86GTcSM7xNZvRl3qSCkMDYHfGLwfqOq8qW66qZjab7SQi46CHceHXVmBwWr_j66PwHoFsdH2O8fev3xWtec9-XfXiA8TiCudb0xVKg1-7fMcej8fALjYFWQpPHShXomlKkC3kUtAPPCXfGOtsY3VoyOQAPKkpdDtCcvmsRlv57mB5SAXPEDM_4CEIie1cT5Jqhlk_72dU2kZaIps8Nf68yxIImRoLBgh81Q4dXU_9AmYd7Zy7ptUAY9C-ERYYFaInMinslNr_Mf_3fxgjxP4aCwAA"
   embedUrl="https://app.powerbi.com/reportEmbed?reportId=76f54b65-1f36-4cf8-a06b-4a740bd53607&groupId=a56c2313-db90-45fc-8ce7-ee74acb95f5d&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6ZmFsc2V9fQ%3d%3d"
   embedId="76f54b65-1f36-4cf8-a06b-4a740bd53607"
   pageView="fitToWidth" // 'fitToWidth' (default) , 'oneColumn', 'actualSize'
   style={Style}
   onLoad={(dashboard) => {
     console.log('Dashboard Loaded!');
     this.dashboard = dashboard; // get the dashboard object from callback and store it.(optional)
   }}
   onTileClicked={(data) => {
     console.log('Data from tile', data);
   }}
 />
      </div>
    );
  }
}