# RITSEC 2021
## Unnecessary Intro

RITSEC. After good experiences with RITx cybersec classes on Edx, I was excited to try the CTF, and was right to be, I had an absolute blast. The questions were of varying difficulty and there were some interesting and creative ones, some of the challenges that I solved are below. I finished in the 200+somethingidk place which isn’t amazing but above average since there were about 700 participants and I was playing as an individual against teams. Anyway, enough with the unnecessary intro, and let’s GO FORTH AND CONQUER the questions through writeups.

### Lorem Ipsum

We are given cipher.txt which contains:

```
Incompraehensibilis Conseruator.
Redemptor optimus
Iudex omnipotens
Sapientissimus omnipotens
Redemptor fabricator
Iudex redemptor
Optimus magnus
Aeternus iudex
Auctor omnipotens.
```

I couldn’t find the name of the cipher through googling so I downloaded the image from the challenge description, ran it through tineye to find out what it was. Turns out the image was Ave Maria, so I searched ‘ave maria cipher’ and found [dcode/trithemius-ave-maria](https://www.dcode.fr/trithemius-ave-maria)

After putting the cipher through dcode (w/bruteforce), I got `RSTHISISTRITHEMIUS`

Since the description mentioned the flag was case-sensitive, I only capitalised RS and every other letter (since that’s how the original cipher was capitalised), then wrapped it in brackets to get `RS{ThIsIsTrItHeMiUs}`

### BIRDTHIEF: FYSA

We are given a pdf of a powerpoint. After a cursory glance, I noticed a line was blacked out, so I screen-snipped the blacked out text and dragged it into GIMP, increasing contrast, because people apparently highlight text in black instead of using the somewhat more secure built-in censorship tool.

After that didn’t yeild results, I opened the document in a pdf editor and just click+deleted the black box, and underneath was the flag: `RS{make_sure_t0_read_the_briefing`.
Finding Geno

Given the name Geno and the firm Bridgewater, finding Geno was a simple matter of shoving “bridgewater” “geno” into duckduckgo. The first hit was <https://www.linkedin.com/in/geno-ikonomov>, giving us the last name and therefore flag of `RS{ikonomov}`

### Robots

This challenge was an absolute pain to do since I entirely overthought it. How? The story of hours of my life wasted follows.

So, the website contained a ton of pages with `Robots are taking over ~You need to hide. They have become smarter than us~`, and the phrase ‘hide’ automatically brings to mind the robots.txt page. A robots.txt page is a text file that usually contains pages not to be scraped by google or anyone else’s bots, and I thought it would contain the flag, or a link to the flag’s page, and the challenge would be over, since it was, after all, a simple 100 point chall.

I thought wrong. The page consisted of 50+ links that were designated the status of allowed or disallowed. After looking through the list and finding a `/[random-string-of-characters-presumably-here-to-stop-dirbusteresque-tools]/flag` page which didn’t turn up anything ("page does not exist"), I came to the conclusion that the flag was contained in one of the links in robots.txt.

I cleaned up the text file a bit and made a python script with requests that checked for the presence of “RS” in the webpages, but it turned out most of the pages gave 404 errors so I had to add a conditional to ensure the status_code of the request was valid. That narrowed down my search to exactly 6 links which looked like php pages so I tried to exploit those and got nowhere.

I then started doing the obvious stuff like checking for `/flag` or `/FLAG` or `/robots` pages, to no avail. At the top of the robots.txt page, a User-Agent was specified, so I tried resending requests to all of the links with the user-agent header changed. No success.

I then looked at the html and realized that there was ‘flag.txt’ in invisible black on every page. I accessed /flag.txt and found the string VW05aWIzUnpJR0Z5WlNCMFlXdHBibWNnYjNabGNpQXVMaTQ9. I base64decode-ed that (twice) and got “Robots are taking over …” mocking me on the screen.

Luckily for me, the string reminded me of the random string of letters before the /[here]/flag, so I face-palmed and b64 -d’d that string (“UlN7UjBib3RzX2FyM19iNGR9”) and received RS{R0bots_ar3_b4d}

### Sessions

When visiting the challenge website, you are greeted with a basic login page. 

Me: proceeds to try to SQLi the login page even though there is no indication that the challenge is geared toward that particular exploit. 

Also me: fails (predictably). 

I check the HTML out of habit and find a comment `<!--#remove comment later: login iroh:iroh-->`

Well that was easy. I login with the “leaked” creds and find a homepage, a ‘tribute to Iroh and all things him’. I didn’t who or what Iroh is. I still don’t know, actually… The page had 2 links, a bio and a family tree. I spent way too long looking for info on those two links. I nearly read Iroh’s entire 5000 character (1000 word) biography until I realised it was boring and useless (a few sentences in), resigning myself to just ctrl-f-ing and hoping there werent any clues buried in the wall of text. There was a rickroll at the bottom labelled ‘flag here’ that I may or may not have fallen for but that’s irrelevant.

As for the family tree, that was very close to being subjected to stegseek but at that moment I realised that I really should be focusing on potential exploits related to the challenge title and opened up the network manager web-dev tool, aka “Right-Click&Inspect”. I find nothing and am frustrated then decide allow cookies on the site hahahahhahahhaaaaaaaaa…

Now a session token is visible, but of what use could it possibly be to me? It just looks like a regular jumbled-letter cookie. Fortunately I had learned my lesson from Robots and allowed myself to think that it just might be base64, and found `RS{0nly_One_s3ssion_tok3n}`
