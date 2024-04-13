---
title: Bash
---

# Bash

<section>

## Overview 

Resources
* [bin-bash.de](http://bin-bash.de)
* [selflinux.org](www.selflinux.org/selflinux/) 

</section>

---

<section>

## Bash script

Simple Bash script with arguments
```bash
./myScript.sh arg1 arg2 arg3
```

`myScript.sh`
```bash
echo $1		# prints: arg1
echo $2		# prints: arg2
echo $3		# prints: arg3
echo ${@:1}	# prints: arg1 arg2 arg3
```

</section>

---

<section>

## Configuration

Login shell reads the first of these files:
* `~/.bash_profile`
* `~/.bash_login`
* `~/.profile`

Configuration files (user specific)
* `.bash_rc`

### My Bash Profile

`.bash_profile`

```bash
###########
# Aliases #
###########
alias workdir='cd path/to/workdir'
alias .='cd ..'
alias ..='cd ../..'
alias ...='cd ../../..'
alias ....='cd ../../../..'

alias ll="ls -alF"

# cd and pwd in one
#alias cd='cd | pwd' 
#function cd () { cd $1; pwd}

# mkdir + cd in one
#function mcdir () { mkdir -p "$@" && eval cd "\"\$$#\""; }

# more history
export HISTSIZE=100000

PROMPT_DIRTRIM=5
PS1='\[\e[1;34m\]\h \j \W>\[\e[0m\] '

## arrow up
bind '"\e[A":history-search-backward'
## arrow down
bind '"\e[B":history-search-forward'
```

</section>

---
