---
title: VIM
---

# VIM

<section>

## Overview


### Opening VIM

```
vi -u NONE -O *		
```
* `-u NONE` – no VIM settings
* `-O *` – open all and split into two windows

### Resources
* [Getting started with VIM](https://www.openvim.com/sandbox.html)	
* [Relative line numbers](https://jeffkreeftmeijer.com/vim-number/)
* [Substituting visual selection](https://vim.fandom.com/wiki/Search_and_replace_in_a_visual_selection)
* [Cut, copy, paste](https://vim.fandom.com/wiki/Copy,_cut_and_paste)


</section>

---

<section>

## VIM's Modes

### Normal Mode
* normal mode `Esc`

### Insert Mode				
* insert `i`
* append `a`
* change `c`

### Visual Mode				
* visual character mode `v`
* visual line mode `V`
* visual block mode `Ctrl`+`v`

### Command-line Mode		
* command-line `:`
* search `/`

</section>

---

<section>

## VIM Language

```
[count] [operator] [text objects / motions]
```

**Further useful commands**
* `.` = repeat the previous command

**Nomenclature**
* `()` = parentheses
* `[]` = brackets
* `{}` = (curly)braces

**Examples**
* `6+` = go down to line start 6 times
* `gUaW` = capitalize a WORD
* `3ce` = change to word end 3 times
* `4$` = go to end of line 4 times
* `d]m` = delete to start of next method
* `%` = jump to match of next parenthesis or bracket



### Motion

Move cursor
* `h` = left
* `j` = up
* `k` = down
* `l` = right

Move words
* `w`, `W` = moves forward one word (to the right)
* `e`, `E` = moves through ends of words (to the right)
* `b`, `B` = back one word (to the left; put cursor at the beginning of the word)
* `ge` = back one word (put cursor at the end)

Move to start/end of line
* `0` = begining of line
* `$` = end of line

Find previous/next occurrence of character
* `f{char}`	= move to next occurence of `{char}` in line
* `F{char}`	= move to previous occurence of `{char}` in line
* `;` = repeat last `f`
* `,` = repeat last `F`

* `%`   jumps to the matching symbol in `()`, `[]`, `{}`, `<>` structured text
* `+` jumps down to first non-blank character in the next line
* `]m` go to beginning of next method

Next/previous occurrence of a word
* `*` = next
* `#` = previous

**Combined Examples**
* `3f`	jumps to the third character of its kind
* `3w`
* `f{`	finds next curly brace
* `217G`	jumps to line 217



### Operators

* `c` = change
* `d` = delete
* `y` = yank into register
* `~` = swap case
* `gu` = make lowercase
* `gU` = make uppercase
* `!` = filter to external program
* `<` = shift left
* `>` = shift right
* `=` = indent



### Text objects
* `aw` = a word
* `iw` = inner word
* `aW` = a WORD
* `iW` = inner WORD
* `ap` = a paragraph
* `ip` = inner paragraph
* `ab` = a bracket
* `ib` = inner bracket
* `at` = a tag block (e.g. HTML)
* `it` = inner tab block



### Searching (using RegExp pattern)
* `/{pattern}[/]<CR>` = search for `{pattern}`
* `/<CR>` = search for last used pattern
* `?{pattern}[?]<CR>` = search back for `{pattern}`
* `?<CR>` = search back for last used pattern
* `n` = next occurrence
* `N` = previous occurrence
* `*` = search forward for word under cursor
* `#` = search backward for word under cursor
* `gd` = go to local declaration
* `:hls!` = toggle search highlighting

**Examples**
* `3n` = 3rd next occurence



### Cursor motions

Move to start / end of buffer (e.g. file)
* `gg` = beginning
* `G` = end

Move cursor on the screen
* `zt` = top
* `zz` = middle
* `zb` = bottom

Move page
* `H` = high
* `M` = middle
* `L` = low

Scroll up
* `Ctrl`+`B` = one line
* `Ctrl`+`U` = half a screen
* `Ctrl`+`Y` = full screen

Scroll down
* `Ctrl`+`E` = one line
* `Ctrl`+`D` = half a screen
* `Ctrl`+`F` = full screen




### Tabs
for window containers

* `gt` = go to next tab 
* `gT` = go to previous tab
* `2gt` = go to tab number `2`
* `:tabc` = close tab
* `:tabe` = open tab
* `:tabo` = close all other tabs
* `:tabedit <filename>` = Open a new tab


### Windows
for buffer viewports

* `Ctrl`+`w` `s` = split window
* `Ctrl`+`w` `v` = split window vertically
* `Ctrl`+`w` `q` = close window
* `Ctrl`+`w` `w` = alternate between split windows
* `Ctrl`+`w` `r` = rotate windows
* `:windo {cmd}` = execute `{cmd}` for all windows
* `:sf {FILE}` = split window and `:find {FILE}`
* `:vert {cmd}` = make any split `{cmd}` be vertical



### Buffers
* for file proxies (and the arglist)


### Marks
* `m{a-zA-Z}`
* `"`
* `` ` ``
* `:marks`
* `` `. `` = last change
* `` `_ `` = ?


### Tags
* `Ctrl`+`]` = move through projects
* `Ctrl`+`t`


### Jumplist / Changelist
* `Ctrl`+`o` = cycle back through `:jumps`
* `Ctrl`+`i` = = cycle forward through `:jumps`

* `g;` = cycle back through `:changes`
* `g,` = cycle forward through `:changes`

</section>

---

<section>

## Editing in VIM

**Tip**: First select text via
* `v`
* `V`
* `Ctrl`+`V`

### Deleting

* `d[movement]` = delete by giving movement
* `D` = delete to end of line
* `x` = remove a character (or selection) under the cursor
* `X` = to the left of the cursor
* `dd` = delete entire line
* `S` = clear current line; to insert mode


### Changing

* `r[char]` = replaces character below cursor
* `ci[movement]` = change inside of given movement
* `a` = append after
* `A` = append before
* `r` = replace character by the thing you type in
* `ct{` = deletes stuff between now and next `{`
* `cf{` = deletes stuff between but includes `{`


### Insert lines
* `o` = new line after
* `O` = new line before


### Undo / Redo

* `u` = undo
* `Ctrl`+`R` = redo


### Other commands

* `:e`
* `:fin`
* `gf`
* `Ctrl`+`^`


### Copy & Paste

* `yy` = copy current line
* `p` = Paste copied text after cursor.


### Cut & Paste

1. delete: `d`, `dw`, ...
2. paste: `p`


**Examples**
* `30i-` = insert `-` 30 times
* `-16,-14co.` = copy lines -16 to -14 to here
* `d2e` = deletes 2 words (forward)
* `7dd` = deletes 7 lines
* `d7j` = deletes 7 lines down
* `d7k` = deletes 7 lines up
* `df.` = delete find . (deletes from here to next dot)

</section>

---

<section>

## VIM's Command line

* `:windo difft` = do a diff on every window
* `:e!` = reverts all changes since last save
* `:q` = quit
* `:q!` = quit without saving
* `:w` = save
* `:w {fileName}` = write to file with `{fileName}`
* `:w! {fileName}` = write to file with `{fileName}` forcefully
* `:wq` = save and quit
* `:x` = save and quit
* `ZZ` = save and quit
* `:r {fileName}` = read from file `{fileName}`
* `:e!` = revert changes (?)
* `:help` = help

</section>

---

<section>

## VIM Configuration

* File: `~/.vimrc`
* Note: This is a bash comment:
```bash
" Comment
```

### Basic configuration file

```bash
" General Options
" ----------------------------
" Require certain number of lines to be shown below/above cursor
set scrolloff=2


" Colour Themes
" ----------------------------
"colorscheme lightblue
syntax enable


" Movement
" ----------------------------
" Map keys
map! ^? <backspace>
imap ^? <backspace>


" Formatting
" ----------------------------
set tabstop=4
set shiftwidth=4
set expandtab
set noautoindent

"map!  <Left>
"imap  <Left>
"map!  <Right>
"imap  <Right>
"map <A-Right> <C-w>l
"map <A-Left> <C-w>h

" Hybrid line numbers
set nu rnu


" Search
" ----------------------------
"Search as characters are entered
set incsearch

" Ignore case
set ignorecase

" RegEx search: always be very magic
nnoremap / /\v
vnoremap / /\v

" Remove highlighting from search
" <Ctrl-l> redraws the screen and removes any search highlighting.
nnoremap <silent> <C-l> :nohl<CR><C-l>


" Other
" ----------------------------

"set encoding=UTF-8

set wrap
set pastetoggle=<F2>
set smartcase

filetype plugin indent on "Enabling Plugin & Indent
set autoread
"set spelllang=en_uk ",de_de
set spell
set backspace=indent,eol,start "Making sure backspace works
set noruler
set confirm
```


### Other Configuration Options

1. General Options
2. Colour Themes
3. Mouse and clipboard settings
4. Movement
5. Formatting
6. Search
7. Statusline modifications
8. Plugins
9. Functions

#### 1. General

```bash
"Prevent multiple calls to syntax on (can mess up highlighting)
if !exists("g:syntax_on")
    syntax enable
endif

"Detect filetype
filetype on


"Require certain number of lines to be shown below/above cursor
set scrolloff=4

"Do not redraw screen whilst executing macros
"set lazyredraw

"Dictate location of new windows after splits
"set splitright
"set splitbelow

"Enable simple copy/pasting from visual mode (when using vim GUI)
"set guioptions+=Autoselect

"Folding method based on indent of code
"set foldmethod=indent
"set foldlevel=99

"Do not require save before switching buffers
"set hidden
```


#### 2. Colour Themes

```bash
"Use dracula color theme
"syntax on
"color dracula
```

```bash
"Use lightblue color theme
"syntax enable
"colorscheme lightblue
```


#### 3. Mouse and clipboard settings

```bash
"Enable mouse usage
set mouse=a

"Enable simple copy/pasting from visual mode (when using vim GUI)
set guioptions+=Autoselect

"Folding method based on indent of code
set foldmethod=indent
set foldlevel=99

"Do not require save before switching buffers
set hidden
```



#### 4. Movement

```bash
"Allow single j and k movements to treat wrapped lines separately.
""Strict linewise movement resumed when preceeded with a count.
"nnoremap <expr> j v:count ? 'j' : 'gj'
"nnoremap <expr> k v:count ? 'k' : 'gk'

"Remap H and L to SOF and EOL
"nnoremap H ^
"nnoremap L $

" ------- Prevent use of arrow keys  --------
"Normal mode arrow keys
nnoremap <Left> :echo "h"<CR>
nnoremap <Right> :echo "l"<CR>
nnoremap <Up> :echo "k"<CR>
nnoremap <Down> :echo "j"<CR>

"Visual mode arrow keys
vnoremap <Left> :<C-u>echo "h"<CR>
vnoremap <Right> :<C-u>echo "l"<CR>
vnoremap <Up> :<C-u>echo "k"<CR>
vnoremap <Down> :<C-u>echo "j"<CR>

"Insert mode arrow keys
inoremap <Left> <nop>
inoremap <Right> <nop>
inoremap <Up> <nop>
inoremap <Down> <nop>

"Map keys
"map! ^? <backspace>
"imap ^? <backspace>

"Map arrow keys
"map! ^[f <Left>
"imap ^[f <Left>
"map! ^[b <Right>
"imap ^[b <Right>
"map <A-Right> <C-w>l
"map <A-Left> <C-w>h

" ---------------------------

"Shortcuts to switch through buffers with ctrl
"noremap <C-J> :bnext<CR>
"noremap <C-K> :bprev<CR>

"Shortcuts to switch through errors (displayed by Syntastic)
"nnoremap <C-PageDown> :lnext<CR>
"nnoremap <C-PageUp> :lprev<CR>

""Switch between open windows
"noremap <C-h> <C-W><C-h>
"noremap <C-l> <C-W><C-l>
```


#### 5. Formatting

Setting line numbers
* `rnu` Number current line, and use relative number lines elsewhere
```bash
set nu
set rnu
set number
set number relativenumber
```

**Absolute line numbers**
Turn absolute line numbers on
```
:set number
:set nu
```

Turn absolute line numbers off
```
:set nonumber
:set nonu
```

Toggle absolute line numbers
```
:set number!
:set nu!
```

**Relative line numbers**
Turn relative line numbers on
```
:set relativenumber
:set rnu
```

Turn relative line numbers off
```
:set norelativenumber
:set nornu
```

Toggle relative line numbers
```
:set relativenumber!
:set rnu!
```

**Hybrid line numbers**
Turn hybrid line numbers on
```
:set number relativenumber
:set nu rnu
```

Turn hybrid line numbers off
```
:set nonumber norelativenumber
:set nonu nornu
```

Toggle hybrid line numbers
```
:set number! relativenumber!
:set nu! rnu!
```

Tabs
```bash
"Show existing tab with 4 spaces width
set tabstop=4

"When indenting with '>', use 4 spaces width
set shiftwidth=4

"How many spaces are used in insert mode
set softtabstop=4

"Maintain indent from current line to next line
set autoindent
set noautoindent

"Smart indent
set smartindent

"Wrapped lines follow indentation
set breakindent

"Show linewrapping by indicating \\ for wrapped line
set showbreak=\\\\\

set textwidth=80

"Show vertical indicator at a textwidth of 80
set colorcolumn=88

set fileformat=unix

"Underline the current line
set cursorline

"Disable comment autowrapping, auto insertion of comment leader
autocmd FileType * set formatoptions -=cro

" ???
set expandtab
```


#### 6. Search

```bash
"Set ignore case
set ignorecase
set ic

"Highlight all matches when searching
set hlsearch
nnoremap <leader><space> :nohlsearch<CR>

"Search as characters are entered
set incsearch

"Enable autocompletion
"longest inserts the longest common text
"menu ensures a menu still pops up, even if only one selection is shown
set completeopt=longest,menuone

"Enables possible files to be listed when using tab completion with :e <filename-partial>< <TAB> >
set wildmenu
set wildmode=full

"Allow fuzzy searching down through folders
set path+=**

"Recursively search for ctags file up to root folder until one is found
set tags+=./tags,tags;

"Easy acces to Explore and Sexplore
noremap <leader>e :Explore<cr>
noremap <leader>s :Lexplore<cr>

" -------------- Netrw options --------------
"Restrict window size
let g:netrw_winsize = -28

"Remove netrw banner
let g:netrw_banner = 0

"Use tree style listing for files
let g:netrw_liststyle = 3

"Directories on top and files below
let g:netrw_sort_sequence = '[\/]$,*'
```

`Ctrl`+`l` redraws the screen and removes any search highlighting.
```bash
nnoremap <silent> <C-l> :nohl<CR><C-l>
```


#### 7. Statusline modifications                           

```bash
set laststatus=2 "Always show statusline (deafault: only shown when files open > 1)
set statusline=
set statusline+=%7*\[%n]
set statusline+=%#PmenuSel#
set statusline+=\%F
set statusline+=\%{fugitive#statusline()}
set statusline+=%=
set statusline+=%#CursorColumn#
set statusline+=\%y
set statusline+=\%{&fileencoding?&fileencoding:&encoding}
set statusline+=\[%{&fileformat}\]
set statusline+=\%p%%
set statusline+=\%l:%c
```


#### 8. Plugins                                            

```bash
call plug#begin('~/.vim/plugged/')
    Plug 'luochen1990/rainbow'
    " Plug 'Valloric/YouCompleteMe' "needs to be compiled!
    Plug 'shime/vim-livedown'
    Plug 'easymotion/vim-easymotion'
    Plug 'scrooloose/syntastic'
    Plug 'Yggdroot/indentLine'
    Plug 'machakann/vim-highlightedyank'

    
    Plug 'airblade/vim-gitgutter'       "Shows changes when working with git
    Plug 'junegunn/goyo.vim'            "Simple Markdown theme
    Plug 'junegunn/gv.vim'

    "Syntax
    Plug 'tpope/vim-fugitive'
    Plug 'tpope/vim-markdown'
    Plug 'tpope/vim-commentary'
    Plug 'ap/vim-css-color'             "Previews CSS colours
    Plug 'vim-scripts/fountain.vim'

    "Colour-schemes
    Plug 'dracula/vim', { 'as': 'dracula' }
    Plug 'morhetz/gruvbox'              "
    Plug 'jacoborus/tender.vim'
    Plug 'joshdick/onedark.vim'
call plug#end()


""" rainbow
let g:rainbow_active = 1

""" GitGutter
"Decrease time between updates (done for GitGutter) (default 4000, i.e. 4 seconds)
set updatetime=1000
let g:gitgutter_highlight_lines=1
let g:gitgutter_max_signs=9999

""" Livedown
" should markdown preview get shown automatically upon opening markdown buffer
let g:livedown_autorun = 0
" should the browser window pop-up upon previewing
let g:livedown_open = 1
" the port on which Livedown server will run
let g:livedown_port = 1337
" the browser to use
let g:livedown_browser = "firefox"

""" EasyMotion
let g:EasyMotion_do_mapping = 0
map <SPACE>w <Plug>(easymotion-w)
map <SPACE>b <Plug>(easymotion-b)
map <SPACE>s <Plug>(easymotion-s2)
map <SPACE>j <Plug>(easymotion-j)
map <SPACE>k <Plug>(easymotion-k)

""" Syntastic
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0

""" IndentLine
let g:indentLine_setColors = 0

""" highlightedyank
if !exists('##TextYankPost')
	map y <Plug>(highlightedyank)
endif
let g:highlightedyank_highlight_duration = 1500
```


#### 9. Functions

Function to remove trailing whitespaces
```bash
function! TrimWhitespace()
	let l:save = winsaveview()
	%s/\s\+$//e
	call winrestview(l:save)
endfunction

command! TrimWhitespace call TrimWhitespace()
```