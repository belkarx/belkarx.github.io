# Bash Aliases
## Disclaimer
I use `zsh`, however these should be compatible with `bash`. Also, not all of these are technically useful or productive, but enjoyable nonetheless. 

This is not an exhaustive list of my aliases, however it is curated to include the ones I actually use consistently.

## Onward
```bash
###for entertainment
export SUDO_PROMPT="enter the password, dumbass: " #because apparently you can change this
alias 'make\ love'='echo "lmao u wish linux user"' #make being a buildsystem
alias bat="cat /sys/class/power_supply/BAT0/capacity &&\ 
ffplay /home/uk000/Documents/battery.m4a -nodisp &>/dev/null &" 
#^gets battery and plays battery; pkill ffplay to stop

#if you type 'fsck you' (fsck is a file-system-checking binary), the system will fsck you back
fsck() { 
    if [ "$1" = "you" ]; then 
        echo "Aww fsck you too lmao <3"; 
    else; command fsck "$@"; fi;
}

###the rest should be actually useful

#Add an alias | syntax: aa 'cd="rm -rf"'
aa() {
	if [ $#-eq 0 ]; then
		echo "aa 'cd=\"rm -rf\"'"
		return 1
	fi
	sed -i '40 a alias '$1'' /home/uk000/.zshrc \
	&& source /home/uk000/.zshrc
#note, the 40 in the sed statement is a line number because I like to keep my aliases together
}

#sysadmin things
alias up="sudo ip link set wlp61s0 up" #haxor commands - wifi up
alias down="sudo ip link set wlp61s0 down" #wifi down
alias rb="systemctl reboot" #shutdown
alias sd="shutdown -h 0" #reboot
alias logout="sudo pkill -u uk000" #logout - the way linux does this is weird

#shortening long and annoying yet useful commands
alias disk="du -aBM 2>/dev/null | sort -nr | head -n 50 | more" #sort folders by disk use
alias xbind="nvim .xbindkeysrc && xbindkeys --poll-rc" #macros(!)
alias nv="nvim $(ls -t | head -n 1)" #edit most recently modified file - experimental
alias recent="find . -maxdepth 1 -cmin" #finds recently modified files 
#^syntax for the above: recent [# of minutes in the past], recent -1, recent -5, etc

#when command syntax is hard to remember
alias symlink="echo 'ln -s [file] [link]'" #can't seem to remember arg order
alias notgrep="grep -v" #can't seem to remember that the v flag is not

#convenience aliases for basic system binaries
alias rm="rm -rf" #convenience > safety; yes i'm certain of what i'm doing
alias cp="cp -r"
alias ls='ls --color=auto'
alias ll='ls -la'
alias md="mkdir"
alias py="python3" #for quick repls and interpretations
alias umnt="sudo umount /mnt" #i type unmount too often
alias ...="cd .. && cd .."
alias fire="firefox-developer-edition"
alias cx="chmod +x" #when you mess with .sh scrips too much
alias tree2="tree -L 2" #list with 2 levels of recursion

#miscellaneous 
alias killfire="sudo kill -9 $(ps -x | grep fire)" #when firefox-dev crashes->hangs
alias nzsh="nvim /home/uk000/.zshrc && source /home/uk000/.zshrc" #edit .zshrc
not() {nvim -c "startinsert" ~/notes/$1} #make a note (txt documents are spectacular btw)

#screen utils
alias dup="xrandr --output HDMI2 --auto" #duplicate screen
alias ex="xrandr --output HDMI2 --auto --output eDP1 --auto --right-of HDMI2" #extend screen

#install/uninstall
alias psyu="sudo pacman -Syu" #install
alias pr="sudo pacman -Rns" #uninstall
alias ys="yay -S" #install
alias yr="yay --remove" #uninstall

#map caps lock to backspace
setxkbmap -option caps:backspace -option shift:both_capslock #maps caps lock to backspace
alias CAP="setxkbmap -option" #the previous command breaks sometimes, this is a reset

```
