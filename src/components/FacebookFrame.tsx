'use client'

import Script from "next/script";
import React, { useEffect } from "react";

function FacebookFrame() {
  useEffect(() => {
    // @ts-ignore
    if (typeof FB !== 'undefined') {
      // @ts-ignore
      FB.XFBML.parse();
    }
  }, []);

  return (
    <>
      <Script
        id="facebook-jssdk"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0"
      />
      <div
        className="fb-page"
        data-href="https://www.facebook.com/VietnamBikeTours"
        data-tabs="timeline"
        data-width="500"
        data-height="550"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </>
  );
}

export default FacebookFrame;
