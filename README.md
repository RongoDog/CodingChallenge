# MediaJel Engineering Coding Challenge

## Context
Image a situation where we would like have a form that allows us to create tagged data elements. Image further that these tagged elements have some sort of grouping or necessary ordering. The purpose of this coding challenge is to demonstrate ability in both structuring a data model and building front-end components.

Given a situation where a group of well-known wine tasters and their experience regarding a specific wine are tagged. How can we store this data in our database in a way where we can devise interesting inferences. 

Some initial code, which demonstates how the datamodel is developed, can be found at `./database/datamodel.graphql`. By the end of the challenge, there should be a GraphQL type depicting a tasting session, which may have several tasters, wines, and reviews. The Review type should have some interesting tags that we could perhaps use to draw correlations. 

The front-end should be built in such a way that tasting session data can be inserted into the database by a user. This may mean that new tasters or wines need to be created. Some drop-downs should be used to facilitate interaction with the form. Modularity and functionality is emphasized here, rather than visual appeal (basic HTML styling should be fine). Boilerplate is provided, that demonstrates how to connect to the Prisma instance from the client using React Apollo. The existing code should not be considered complete or a good representation of the final solution. It exists purely to demonstrate the ncessary React/Apollo/GraphQL functionality.

## Technologies
There is some code provided that will allow you to get started quickly, without worrying too much about setup. There are, however, a few dependencies that you might have to install on your system.

### Installing Yarn (OSX)
To install Yarn, make sure that you use use the --without-node flag to use nvm's version.

```
brew install yarn --without-node
```

To access Yarn's executables globally, add the folowing to your profile.

```
export PATH="$PATH:`yarn global bin`"
```

### Installing NodeJS with NVM
Use either curl or wget to install NVM

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

The script will clone the NVM repository to a .nvm folder in your home directory. It will also add the source
line to your profile (e.g. `~/.bash_profile`). Note that you might want to add it yourself.
Enesure that the following is in your profile.

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

If everything is correctly configured, reload your shell: `source ~\.bash_profile`

The proper version of NodeJS can now be installing using NVM. As of writing this, we are using v10.0.0

```
nvm install v10.0.0
```

You might also want to set it as the default.

```
nvm alias default v10.0.0
```

### Installing GraphQL and Prisma CLIs
You need to have the [GraphQL CLI](https://github.com/graphql-cli/graphql-cli) installed to bootstrap your GraphQL server using `graphql create`. The [Prisma CLI](https://github.com/prismagraphql/prisma/) allows you to deploy your code.

```sh
yarn global add graphql-cli
yarn global add prisma
yarn global add prisma-binding
```

### Installing Docker
Installing Docker will depend on your system.  The instructions for OSX can be found here: https://docs.docker.com/docker-for-mac/install/

It's important to make sure that docker-compose is also installed, as it will be used to run the backend. 

## Setup

Once all your dependencies are installed, you can begin deploying your backend, which will consist of a [Prisma](https://www.prisma.io/) server connected to a local [MySQL](https://www.mysql.com/) instance. 

- The following will start the backend: 
```sh
docker-compose up -d
```
- We can deploy the datamodel (found at `./database/datamodel.graphql`) using the following command. You will need to make changes to this file to develop an adequate datamodel.
```sh
prisma deploy
```
- The front-end can be started by simply running
```sh
yarn start
```

