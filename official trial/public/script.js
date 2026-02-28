const clientId = "YOUR_CLIENT_ID";
const redirectUri = "http://localhost:3000/auth/callback";

document.getElementById("loginBtn").onclick = () => {
    const url = `https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize?
        client_id=${clientId}
        &response_type=code
        &redirect_uri=${encodeURIComponent(redirectUri)}
        &scope=XboxLive.signin offline_access`
        .replace(/\s/g, '');

    window.location.href = url;
};