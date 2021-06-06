default: dev

clean:
	rm -rf build

install:
	yarn install

dev:
	yarn start

build:
	yarn build

gh-pages-deploy:
	yarn deploy

prod-deploy: clean build
	yarn aws-deploy
