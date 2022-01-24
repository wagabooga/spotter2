import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import spotifyApi from "../lib/spotify";


// Custom hooks baby!! we got those
function useSpotify() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // if refresh access token attempt fails, diret user to login
      if (session.error === 'RefreshAccessTokenError') {
        console.log("error in hook refresh access token expire")
        signIn();
      }
      // init once, then we have it
      console.log("useffect 1", session)
      spotifyApi.setAccessToken(session.user.setAccessToken);
    }
  }, [session])
  return spotifyApi
}


export default useSpotify
