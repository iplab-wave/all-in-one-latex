FROM paperist/texlive-ja:latest

RUN apt-get update && apt-get install -y curl software-properties-common git

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

WORKDIR /workdir
