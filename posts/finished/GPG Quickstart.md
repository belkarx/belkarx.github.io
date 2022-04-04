# GPG Quickstart
GPG (technically GNU Privacy Guard but no one calls it that; previously PGP or Pretty Good Privacy) is an asymmetric public-private key encryption scheme, used for encryption and also verification (signing of documents).

1. Acquire the `gpg` binary. Most Linux distros have this installed by default, otherwise install it with your package manager or from [the website](https://gnupg.org/download/). You may also have `gpg2`; that's the newer version, and it may be what your package manager aliases `gpg` to. Both versions have virtually the external interface so it doesn't really matter. just `pacman -Syu gnupg` or `apt-get install gpg` or whatever.

2. `gpg --full-gen-key`. This command will ask you some questions; answer them. [Here](https://wiki.archlinux.org/title/GnuPG#Create_a_key_pair) are the suggested settings of the \*Arch Wiki\*.

3. `gpg --export -a "<User Name email@whatever.com>" | tee public.key`. Export your key so you can share it. This is contacts can encrypt messages to you, so it should be accessible. For example, here's my key:
```
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
5y/LhVuc
=XDPR
-----END PGP PUBLIC KEY BLOCK-----
```

4. Technically you're done setting up now (you can add your key to public keyservers instead of just sharing it around with `gpg --send-keys <key-id>`). You can now use it to sign things: `gpg --output <file>.sig --clearsign <file>`. To encrypt: `gpg --recipient <recipient-user-id> --encrypt <file>`. Anyway, now that you have a keypair, you can load it into Thunderbird and sign or encrypt all your emails, sign your github commits, or just have encrypted conversations with people. Enjoy. 
