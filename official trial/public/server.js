const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const clientId = "YOUR_CLIENT_ID";
const clientSecret = "YOUR_CLIENT_SECRET";
const redirectUri = "http://localhost:3000/auth/callback";

app.get("/auth/callback", async (req, res) => {
    const code = req.query.code;

    try {
        // Exchange code for token
        const tokenRes = await axios.post(
            "https://login.microsoftonline.com/consumers/oauth2/v2.0/token",
            new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                code: code,
                grant_type: "authorization_code",
                redirect_uri: redirectUri
            })
        );

        const accessToken = tokenRes.data.access_token;

        // Check Minecraft ownership
        const mcRes = await axios.get(
            "https://api.minecraftservices.com/entitlements/mcstore",
            {
                headers: { Authorization: `Bearer ${accessToken}` }
            }
        );

        if (mcRes.data.items && mcRes.data.items.length > 0) {
            res.send("<h1>Access Granted ✅</h1>");
        } else {
            res.send("<h1>You do not own Minecraft ❌</h1>");
        }

    } catch (err) {
        console.error(err.response?.data || err.message);
        res.send("Authentication Failed");
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));