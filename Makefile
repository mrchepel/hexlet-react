install:
	npm install

publish:
	rm -rf dist
	npm publish --dry-run

build:
	npm run build

lint:
	npx eslint **/*.{js,jsx}

test:
	npm run test -s

test-coverage:
	npx jest --coverage
