default: dev

clean:
	rm -rf build

dev:
	npm start

build:
	npm run build

gh-pages-deploy:
	npm run deploy

prod-deploy: clean build
	npm run aws-deploy
