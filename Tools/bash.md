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

## Searching files

### Grep
Search files (in this case python scripts) for specific text
```bash
grep "FIXME" *.py
```

Search
```bash
grep -rn "z.B." --include="*.html" .
```
* `-r` recursively
* `-n` show line numbers
* `--include="*.html"` only include html files in search
* `.` everywhere starting in the current directory
* `-l` show list of files


Search all text files for string and replace that string
* [Stack Overflow thread](https://stackoverflow.com/questions/15402770/how-to-grep-and-replace)

```bash
find /path/to/files -type f -exec sed -i 's/oldstring/new string/g' {} \;
```

### sed – Stream editor

```bash
sed 's#foo#bar#g'
```
The 2nd character after the `s` can be anything and `sed` will use that character as a separator.
* `-e` – regex expression
* `-i` – input


### grep + xargs + sed

Replace all occurences of `z.B.` with `<nbr>z. B.</nbr>`
```bash
sed -e "s#z\.B\.#<nbr>z. B.</nbr>#g" -i "" *.html

# Linux
grep -rl "d\.h\." * | xargs sed -e 's#d\.h\.#<nbr>d. h.</nbr>#g' -i

# Mac
grep -rl "z\.B\." * | xargs sed -e 's#z\.B\.#<nbr>z. B.</nbr>#g' -i ""
```



### Count number of lines

```bash
wc -l
```

```bash
grep "something" * | wc -l
```


</section>

---

<section>

## Piping

```bash
command > output.txt
command >& output.txt # std-O and std-R	(Fehler und Output)
```

### Piping and Stream Editor (with RegExp)

#### Example

Given a text file:
```
*0*1*49251*4925001*
*1*1*49251*4925002*
*2*1*49251*4925003*
*3*1*49251*4925004*
*4*1*49251*4925005*
```

```bash
#!/bin/sh
yes q|python test.py |sed "s/ *//g"|sed "s/^\*//g"|sed "s/[0-9]*\*\(.*\)/\1/g"|sed "s/\*$//g"|sed "s/\*/:/g" | grep "^[0-9]">& output_$1.txt
```

Explanation:
```bash
|sed "s/ *//g"				# remove all whitespace
|sed "s/^\*//g"				# remove * at the beginning
|sed "s/[0-9]*\*\(.*\)/\1/g"		# remove all numbers in first column (including *)
|sed "s/\*$//g"				# remove * at the end
|sed "s/\*/:/g"				# replace * with :
|grep "^[0-9]"				# take only lines with numbers (at the beginning!)
```

RegExp
* `*`	all
* `^`	beginning
* `[0-9]`	any number
* `$`	end
* `\*`	the actual symbol `*`

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

## Linux Basics

### Change password
```bash
passwd
```

### directory I am in
```bash
pwd
```


### List files

```bash
ls          			# directory listing 
ls -l        			# long version directory listing 
```
* `-l` — long
* `-lt` — sorted with time  
* `-ltr` — sorted with reverse time 
* `-a` — hidden files

Changing directories
cd dirwxyz 		— change directory 
cd ..        			— go to origin 
cd ~        			— go to origin 

```bash
ls /directory/ -al --reverse --sort=time
```



### Creating and Deleting Directories (Folders)

make directory
```bash
mkdir newFolder
```

remove directory
```bash
rmdir folder
```

Delete folder with contents
```bash
rm -r folder/* folder/.*	# only deletes contents of folder
rmdir folder
```

or simply
```bash
rm -r folder
```



### (Re)moving Files

Renaming/Moving files 
```bash
mv oldName newName 

mv file folder/file
```


remove file
```bash
rm file.txt
```

remove several files
```bash
rm file1 file2

rm -r dat*
rm -r su2gauge/* su2gauge/.*

rm -rf folder/*
```
* `r` recursivly (i.e. folder contents)
* `f` force


### Copying files / directories

```bash
cp file ./newdirectory
```

--> end characters
```
server:
file
folder/
```

Copy directory in a new directory
1.	`mkdir test`
2.	`cp -rp su2 test`

Copy folder (with contents)
```bash
cp -avr folder/ ./copiedfolder/
```

```bash
cp -rp mySU2Gauge/ gauge
```
* `a` 
* `v` 
* `r` recursivly (i.e. folder contents)
* `p` 


### Manual
```bash
man ...
```

Search in manual
```
/searchText *Enter*
n	# weitersuchen
N	# zurücksuchen
```

</section>

---

<section>

## File Permissions

`ls -la`
```
drwxr-xr-x    # directory
-rw-r-xr-x    # file
```

```
 d   rwx   rwx   rwx
 d    u     g     o
```

* `d` – directory
* `r` – read
* `w` – write
* `x` – execute
* `u` – user
* `g` – group
* `o` – others
* `a` – all (user, group and others)


Change permissions
```bash
chmod 755 myfile.dat
chmod u+x myfile.dat

chmod a+r myfile.dat
```

Change owner
```bash
chown
```
</section>

---

<section>

## Useful commands

Free Memory / free space
```bash
du -sh
df
du -hs		# human-readable form, sorted
du -hs ..

fs listquota -human
```

```bash
yes q|python test.py		# types "q" for you
```


### Looking at files

Locate
```bash
locate creutz.f		# locates a file on the computer
```

Diff
```bash
diff creutz.f creutz2.f	# Compare 2 files (their difference)
```

Cat
```bash
cat		# show contents of file (text file) 
```

More
```bash
more 
```

Less
```bash
less
q		# (quit) to exit
```	

Tail
```bash
tail -f control		# useful for showing progress as a file is being written to, e.g. log files
```

Reroute
```
>       	# Reroute the output of the last process (e.g. to a file)
```

Grep
```bash
grep		# Search files for specific text 
```

```bash
squeue|grep dop
```

```bash
grep IOPEN *.f		# Search for "IOPEN" in all `.f` (Fortran) files
```


</section>

---

<section>

## Useful Programs

### Text Editors
* VIM
* Emacs
* Nano

```bash
emacs logfile.txt &
```

* Note: `&` at the end - terminal stays active while editing


### PDF Viewer
```bash
evince test.pdf		# opens the document 
evince test.pdf &		# opens the document, but terminal stays active 
```

### Ent"zippen"
```bash
tar tzvf		# test 
tar tzf		
tar xzf		# access
```

</section>

---

<section>

## SSH — Secure Shell

Secure shell
1) VPN (e.g. vpn2tu)
2) SSH (e.g. ssh -Y server3.physprak.tuwien.ac.at)
3) Xserver

```bash
ssh doppler@128.130.38.203		pc3
ssh doppler@128.130.38.208		pc8
ssh -X edv1mi07@128.130.49.15
exit
```

### SSH ohne Passwort
* mit public key
* ohne Kennwort
* kein login

```bash
chmod -R 700  .ssh
```
ist Voraussetzung dafür, dass Login ohne Kennwort funktoniert

Schritte zum Einrichten:
newServer = pc1
1) Public key auf newServer schon erzeugt, das geschieht mit 
```bash
ssh-keygen -t rsa
```

Generate a private and public key
```bash
ssh-keygen -t rsa -b 4096 -C 'comment-markus' -N 'safeP@ssword' -f 'key-filename-markus'
```


2) openssh läuft auf newServer 
am newServer ausführen: 
```bash
cat id_rsa.pub | ssh newServer 'cat - >> .ssh/authorized_keys'
```
  oder
```bash
cat .ssh/id_rsa.pub | ssh newServer 'cat - >> .ssh/authorized_keys'
```
3) config-Datei in .ssh ergänzen mit
Host newServer
```
Hostname newServer.kph.tuwien.ac.at
User doppler
ForwardAgent yes
ForwardX11 yes
```


Um beim Login am newServer eine Passphrase abzufragen, statt bei jedem Befehl:
(`ssh-agent`)

falls beim Login Passphrase nicht gespeichert wurde, führe aus:
```bash
ssh-add .ssh/id_rsa
```

dann fragt er nach der Passphrase, die dann für diese Sitzung gespeichert wird
```bash
ssh-add -l	listet die gespeichterten privaten keys

ssh-add 		// in .ssh aufrufen
```



### Secure Copying via SSH

SecureCopy folder to other server
```bash
scp -r folder doppler@pc8:
```

secure copy
```bash
scp [options] username1@source_host:directory1/filename1 username2@destination_host:directory2/filename2

scp -rp someFile doppler@pc8

scp -r file doppler@pc3:
```

copy file
`scp user@serverurl:.vimrc`


Secure copy from server to Mac (from Mac Terminal)
```bash
scp doppler@pc8:~/su2.pm Desktop/
```

Copy from ssh to my Mac
```bash
???
```

get IP Address
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
#	193.171.198.131
```

```bash
scp pickevents.root markusdoppler@193.171.198.131:/Users/markusdoppler/Desktop
```

</section>

---

<section>

## Compiling and executing programs

### Compile

Compiling (see below for Fortran, C, and C++)

```bash
gfortran
gcc
```

Makefile
```bash
make
```

#### Execute a program

within the directory of the executable
```bash
./executablefile
```

from somewhere else
```bash
/somePath/executableFile
```
Note: the **input files** need to be present in the directory that command is run, also the **output files** will be put in the current directory!


Timing (how long a program takes to execute)
```bash
time ./su2.exe
```

* Pause execution: `Ctrl` + `Z`
* Stop execution: `Ctrl` + `C`

#### No hangup

```bash
nohup
```

Move jobs to background
```bash
bg
bg %1
```

Move jobs to foreground
```bash
fg
```

see current running jobs
```bash
jobs
```

#### Task Manager

See what kernels are doing

```bash
top
```

kill a process

```bash
k #PID
15
```

Debugging fortran with "DDD"-Debugger
```bash
gfortran -g -x f77-cpp-input -o creutz.exe creutz.f
ddd creutz.exe
```


### FORTRAN

Compile FORTRAN
```bash
gfortran
gfortran dateiName (-o runName) 
gfortran -o3 name.f95 -lmathlib 
	      -O3 ----- Faktor 3 an Geschwindigkeit 
lib mathlib.a -L ...path... 
```

Execute FORTRAN
```bash
./a.out 
./runName 
./su2.exe
```

### C

* edit
* compile
* link


Compile C
```bash
gcc
```

`gcc` — Compiler
```bash
which gcc          # Shows the compiles being used 
whereis gcc        
```


```bash
gcc -o testApp test.c 
```

* `gcc` — ruft Compiler (und Linker) auf 
* `-o` —  Output-Namen für Ausgabedatei
* `-O` —  optimiere 
* `-Wall` — alle Warnungen
* `testApp` — Ort, worin das Programm ausgeführt wird 
* `test.c` — Datei, die ich compilieren will 

```bash
./testApp         # Run program 
```

```bash
gcc -Wall -O -o outputfile inputfile.c 
```bash

Using modules
Only use compiler but doesn’t use linker => modules have to be compiled to be used 
```bash
gcc -c -Wall -O -o modul1.o modul1.c 

gcc -Wall -O -o mycalc modul1.o mycalc.c 
```

Creating Modules

```bash
gcc -O -Wall -o prog prog.c modul.c -lm     // modul.c in prog.c einbinden und in prog ausführen 
```


### Gnuplot

```bash
gnuplot

...

exit
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
