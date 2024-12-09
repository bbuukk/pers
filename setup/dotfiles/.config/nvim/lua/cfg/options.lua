local global = vim.g
local o = vim.opt

-- Editor options
-- vim.o.timeoutlen = 150 -- Default is 1000ms, you can try reducing it to 300ms or less

-- Set persistent undo
o.undofile = true -- Enable undo files
o.undodir = vim.fn.expand("~/.config/nvim/undo")

o.backup = true -- Enable backup files
o.backupdir = vim.fn.expand("~/.config/nvim/backup/") -- Set backup directory
o.writebackup = true -- Make a backup before overwriting a file

o.number = true -- Print the line number in front of each line
o.relativenumber = true -- Show the line number relative to the line with the cursor in front of each line.
o.clipboard = "unnamedplus" -- uses the clipboard register for all operations except yank.
o.syntax = "on" -- When this option is set, the syntax with this name is loaded.
o.autoindent = true -- Copy indent from current line when starting a new line.
o.cursorline = true -- Highlight the screen line of the cursor with CursorLine.
o.expandtab = true -- In Insert mode: Use the appropriate number of spaces to insert a <Tab>.
o.shiftwidth = 2 -- Number of spaces to use for each step of (auto)indent.
o.tabstop = 2 -- Number of spaces that a <Tab> in the file counts for.
o.encoding = "UTF-8" -- Sets the character encoding used inside Vim.
o.ruler = true -- Show the line and column number of the cursor position, separated by a comma.
o.mouse = "a" -- Enable the use of the mouse. "a" you can use on all modes
o.title = true -- When on, the title of the window will be set to the value of 'titlestring'
o.hidden = true -- When on a buffer becomes hidden when it is |abandon|ed
o.ttimeoutlen = 0 -- The time in milliseconds that is waited for a key code or mapped key sequence to complete.
o.wildmenu = true -- When 'wildmenu' is on, command-line completion operates in an enhanced mode.
o.showcmd = true -- Show (partial) command in the last line of the screen. Set this option off if your terminal is slow.
o.showmatch = true -- When a bracket is inserted, briefly jump to the matching one.
o.inccommand = "split" -- When nonempty, shows the effects of :substitute, :smagic, :snomagic and user commands with the :command-preview flag as you type.
o.splitright = true
o.splitbelow = true -- When on, splitting a window will put the new window below the current one
o.termguicolors = true
o.wrap = true
o.linebreak = true
o.scrolloff = 999
o.virtualedit = "block"
o.inccommand = "split"
o.ignorecase = true

-- Save all buffers on exit
vim.cmd([[
  autocmd BufLeave,FocusLost * silent! wa
]])

-- Disable Netrw banner
global.netrw_banner = 0

-- Set Netrw to use a tree-style listing
global.netrw_liststyle = 3

-- Default values
vim.o.timeout = true
vim.o.timeoutlen = 150
vim.o.ttimeout = true
vim.o.ttimeoutlen = 50
