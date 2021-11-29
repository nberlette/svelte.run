## ------------------------- ##
## SAVE.JS GITPOD DOCKERFILE ##
##     © 2021 @nberlette     ##
## ------------------------- ##
FROM gitpod/workspace-full

# update the cache and upgrade all runtime tools
RUN echo "\e[1;36mUpdating cache...\e[0m" \
    && sudo apt-get update ;
RUN echo "\e[1;35mUpgrading all dependencies...\e[0m" \
    && sudo apt-get -y upgrade ;

# install custom tools like git-extras, neovim etc.
RUN echo "\e[1;32mInstalling git-extras and nvim...\e[0m" \
    && sudo apt-get install -y git-extras neovim ;

## ----------------------------------------- ##
## user-specific settings and installs below ##
## ----------------------------------------- ##

## ------------ ##
## START PROMPT ##
## ------------ ##

# set env
RUN echo "\e[1;33mSetting GIT_PS1 ENV defaults...\e[0m"
ENV GIT_PS1_SHOWUPSTREAM='auto verbose name legacy git' \
    GIT_PS1_SHOWCOLORHINTS='1' \
    GIT_PS1_SHOWDIRTYSTATE='1' \
    GIT_PS1_SHOWUNTRACKEDFILES='1' \
    GIT_PS1_DESCRIBE_STYLE='branch' \
    GIT_PS1_OMITSPARSESTATE='1'

# pull git-prompt.sh from git repo, copy to /home/gitpod/.bashrc.d/
RUN echo "\e[1;36mDownloading git-prompt.sh from github:git/git#master...\e[0m" \
    && curl -sSL "https://github.com/git/git/raw/master/contrib/completion/git-prompt.sh" \
              -o "$HOME/.bashrc.d/10-git-ps1";

# add to .bashrc
RUN echo "\e[1;32mAppending code to .bashrc...\e[0m" \
    && echo '\n\n## git-prompt.sh\n[ -f "$HOME/.bashrc.d/10-git-ps1" ] && . "$HOME/.bashrc.d/10-git-ps1";\n\n' >> "$HOME/.bashrc";

# add PROMPT_COMMAND to .bashrc
RUN echo "\e[1;35mSetting PROMPT_COMMAND...\e[0m" \
    && echo "export PROMPT_COMMAND='__git_ps1 \"\[]0;\u \w\]\[[01;32m\]\u\[[00m\] \[[01;34m\]\w\[[00m\]\" \" \$ \" \" git:(%s)\"';\n\n" >> "$HOME/.bashrc";

# fin

## ---------- ##
## END PROMPT ##
## ---------- ##

# install pnpm package manager, lint tools, etc.
RUN echo "\e[1;36mInstalling pnpm, standard, ts-standard, and degit suite...\e[0m" \
    && which yarn > /dev/null && yarn global add pnpm standard ts-standard degit ;

# add pnpm and yarn stuff to PATH
RUN echo "\e[1;35mAdding yarn/pnpm/npm global bin dirs to PATH...\e[0m" \
    && echo "\n\nexport PATH=\"$(yarn global bin):$(npm -g bin):$PATH\";" >> "$HOME/.bashrc"

# good to go!
RUN echo "\e[1;4;32mYou're all good to go! Happy coding! :)\e[0m"

## ------------------- ##
## ADD USER CODE BELOW ##
## ------------------- ##
