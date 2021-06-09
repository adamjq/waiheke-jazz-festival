default: dev

clean:
	rm -rf build

install:
	yarn install

dev:
	yarn start

build:
	yarn build

gh-pages-deploy: clean build
	@echo "deploying to GitHub pages..."
	yarn deploy

prod-deploy: clean build
	@echo "deploying to production AWS account..."
	yarn aws-deploy
