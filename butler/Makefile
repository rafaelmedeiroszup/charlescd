REGISTRY = $(DOCKER_REGISTRY)
RELEASE = $(RELEASE_VERSION)

# Go parameters
NODECMD=npm
NODEINSTALL= ${NODECMD} install
NODEBUILD=$(NODECMD) run build
NODETEST=$(NODECMD) run test:cov
NODERUN=$(NODECMD) run start:prod
BINARY_NAME=darwin-deploy

# Commons commands
HOST=127.0.0.1

all: build test
build:
	${NODEINSTALL}
	${NODEBUILD}
	${NODETEST}
publish:

test:

run:
	${NODERUN}
