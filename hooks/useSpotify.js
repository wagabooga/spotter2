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
        signIn();
      }
      // init once, then we have it
      spotifyApi.setAccessToken(session.user.setAccessToken);
    }
  }, [session])
  return spotifyApi
}


export default useSpotify
