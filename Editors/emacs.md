---
title: Emacs
---

# Emacs

Resources
- [](https://shortcutworld.com/Emacs/linux/Emacs_23.2.1_Shortcuts#Search)
- [](https://www.digitalocean.com/community/tutorials/how-to-use-the-emacs-editor-in-linux)

Replace
Select region
	C-Space
Replace text
	M-x replace-string

(un-)comment line
	M-;		# (un)comments the selected lines
➡️ https://www.gnu.org/software/emacs/manual/html_node/emacs/Comment-Commands.html

Moving
	C-p		# line forward
	C-n		# line backward
	C-f		# character forward
	C-b		# character backward
	M-f		# word forward
	M-b		# word backward
	C-a		# beginning of line
	C-e		# end of line
	M-<		# beginning of buffer (document)
	M->		# end of buffer (document)

Enable (Disable) transient mark mode
	M-x transient-mark-mode

Swap mark and point
	C-x C-x

Go to line
	M-g g



Ctrl-A	an den Anfang springen
Ctrl-E	ans Ende springen
Ctrl-D	vorwärtslöschen
Ctrl-K	vorwärts löschen bis ans Ende der Zeile
Ctrl-G	rückgängig

Ctrl-S	suchen (emacs); nochmal zum weitersuchen
Ctrl-S 2x	zu letzt gesucht



Missing commands:
- [ ] search + replace
- [ ] (un)comment selected line(s)
- [ ] insert at the end/beginning of the line
- [ ] middle wheel copy with keyboard?
- [x] select á la Mac [C+Space]
- [x] replace
- [x] delete line forward 
- [x] jump to next word/sentence etc.
- [x] jump forward/backward

- [ ] Look at the same commands for terminal
- [ ] Terminal: copy and insert into current command line with one key?


emacs inline-Editor schließen
Ctrl-x -> Ctrl-c

Emacs weitersuchen
Ctrl-S	

Run without X-forwarding
emacs -nw ...


Keyboard shortcuts
	C-v	Move forward one screenful
	M-v	Move backward one screenful
	C-l	Clear screen and redisplay all the text,
		 moving the text around the cursor
		 to the center of the screen.
		 (That's CONTROL-L, not CONTROL-1.)

	C-f	Move forward a character
	C-b	Move backward a character

    M-f		Move forward a word
    M-b		Move backward a word

	C-n	Move to next line
	C-p	Move to previous line

    C-a		Move to beginning of line
    C-e		Move to end of line

	M-a	Move back to beginning of sentence
	M-e	Move forward to end of sentence
    ESC <	go to the beginning of the file
    ESC >	go to the end of the file


C-k		Kill line
C-x u	Undo
C-x h	Select all



	C-x C-f		Find file
	C-x C-s		Save file
	C-x s		Save some buffers
	C-x C-b		List buffers
	C-x b		Switch buffer
C-x C-c	Quit Emacs
	C-x 1		Delete all but one window

