# Sending custom verification emails with NHost

## Install

1. clone this repo
2. Install dependencies cd functions && yarn install`
3. Run the projet on debug mode `nhost dev -d`
4. Post an email+password on http://localhost:1337/v1/auth/signup/email-password
5. After the ticket is generated by Hasura-Auth, the `functions/send-email-verification.ts` script will be executed

## How it works

A Hasura event triggers the function when a user is created or updated, and its ticket changed.

The function gets the user in the request header (email and ticket)
