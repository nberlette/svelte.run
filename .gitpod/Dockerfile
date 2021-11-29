## ---------------------------- ##
## SVELTE.RUN GITPOD DOCKERFILE ##
##                              ##
##      © 2021 @nberlette       ##
## ---------------------------- ##
# 'workspace-full' base-image (full-featured)
FROM gitpod/workspace-full

# uncomment for the base image, with less features
# FROM gitpod/workspace-base

# update the cache
RUN echo "\e[1;36m[UPDATE]: workspace cache (not UPGRADE) ...\e[0m" && sudo apt-get update 

# now, upgrade all pkgs. -> NOTE: this step can take LITERAL FCKING FOREVER.
# if you want to trade speed for potentially out-of-date software...
# then comment the next line out to disable the upgrade.

# RUN echo "\e[1;35m[UPGRADE]: workspace packages, please wait ...\e[0m" && sudo apt-get -y upgrade 

# install custom tools like git-extras, neovim etc.
RUN echo "\e[1;32m[INSTALL]:  git-extras ,  nvim , ...\e[0m" && sudo apt-get install -y git-extras neovim 

## ------------------------------ ##
## START PROMPT SECTION (GIT-PS1) ##
## ------------------------------ ##

RUN echo "\e[1;33m[SET ENV]: GIT_PS1_*...\e[0m"

ENV GIT_PS1_ORIGIN='https://github.com/git/git/raw/master/contrib/completion/git-prompt.sh' GIT_PS1_SOURCE="$HOME/.bashrc.d/10-git-ps1"
ENV GIT_PS1_SHOWUPSTREAM='auto verbose name git' GIT_PS1_DESCRIBE_STYLE='branch'
ENV GIT_PS1_SHOWCOLORHINTS='1' GIT_PS1_SHOWDIRTYSTATE='1' GIT_PS1_SHOWUNTRACKEDFILES='1' GIT_PS1_OMITSPARSESTATE='1'

# pull git-prompt.sh from git repo (GIT_PS1_ORIGIN), copy to GIT_PS1_SOURCE
RUN echo "\e[1;36m[INSTALL]:  git-prompt.sh  from  GitHub...\e[0m" \
    && curl -sSL "$GIT_PS1_ORIGIN" -o "$GIT_PS1_SOURCE"

# add to .bashrc
RUN echo "\e[1;32m[APPEND]:  ~/.bashrc  with  \$GIT_PS1_SOURCE...\e[0m" \
    && echo '\n\n## git-prompt.sh\n[ -f "${GIT_PS1_SOURCE:-$HOME/.bashrc.d/*-git-ps1}" ] && . "$GIT_PS1_SOURCE";\n\n' >> "$HOME/.bashrc"

# add PROMPT_COMMAND to .bashrc
RUN echo "\e[1;35m[INSTALL]:  __git_ps1  to  PROMPT_COMMAND ...\e[0m" \
    && echo "export PROMPT_COMMAND='__git_ps1 \"\[]0;\u \w\]\[[1;3;36m\]nb\[[0;1;2m\]@\[\e[0m\e[1;2;33m\]\u\[0m\]: \[[01;34m\]\w\[[00m\]\" \" \$ \" \" git:(%s)\"';\n\n" >> "$HOME/.bashrc"

# fin

## ------------------------------ ##
##  END PROMPT SECTION (GIT-PS1)  ##
## ------------------------------ ##

# install pnpm package manager, lint tools, etc.
RUN echo "\e[1;36m[INSTALL]:  pnpm ,  standard ,  ts-standard ,  degit ...\e[0m" \
    && which yarn > /dev/null && yarn global add pnpm standard ts-standard degit ;

# add pnpm and yarn stuff to PATH
RUN echo "\e[1;35m[PREPEND]:  yarn global bin  to  \$PATH ...\e[0m" \
    && echo "\n\nexport PATH=$(yarn global bin):$PATH" >> "$HOME/.bashrc"

# good to go!
RUN echo "\e[1;4;32m[COMPLETE]:  happy coding, have a great day! :)\e[0m"

## ------------------- ##
## ADD USER CODE BELOW ##
## ------------------- ##
