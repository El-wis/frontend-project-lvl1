install:
	npm ci


brain-games:
	node bin/brain-even.js


publish:
	npm publish --dry-run

lint:
	npx eslint  .

brain-calc:
	node bin/brain-calc.js
