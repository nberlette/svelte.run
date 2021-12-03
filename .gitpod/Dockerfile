## ------------------------------ ##
##  SVELTE.RUN GITPOD DOCKERFILE  ##
## ------------------------------ ##
##  MIT © @nberlette, svelte.run  ##
## ------------------------------ ##

## building from the official gitpod image: workspace-full (~6GB full-featured)
FROM gitpod/workspace-full

## update the cache
RUN printf "\e[1;7;36m UPDATE \e[0m \e[1;2m caches for all packages...\e[0m" && sudo apt-get update 

## --> NOTE: the apt-get upgrade process can take LITERALLY FOREVER.
## if you want the most up-to-date software, and don't mind the build time... uncomment below.
# RUN printf "\e[1;7;35m UPGRADE \e[0m workspace packages, please wait ..." # && sudo apt-get -y upgrade 

## install some custom tooling: git-extras, nvim, ...
RUN printf "\e[1;7;32m INSTALL \e[0;1;2m git-extras, neovim, ... \e[0m" \
 && sudo apt-get install -y git-extras neovim  

## clone down our setup.sh script and execute
RUN printf "\e[1;7;31m EXECUTE \e[0m  \e[1;2;3;4;33m setup.sh \e[0m from repo \e[1;3;4;35m github.com/nberlette/dotfiles \e[0m" \
 && curl -sSL 'https://github.com/nberlette/dotfiles/raw/gitpod/.gitpod/setup.sh' | bash

## 
RUN printf "\n\n\e[1;4;7;32m SUCCESS! \e[0;1;3;32m Your new Gitpod Workspace is built and ready to code. Enjoy!\e[0m\
\n\n\e[1;2m ...\"Build today what will bring you pride tomorrow.\"\n\n\n\t\t— N. Berlette\e[0m\n\n"

## ------------------- ##
## ADD USER CODE BELOW ## 
## ------------------- ##
