
default: run

copy:
	rm -rf dist && mkdir -p dist/ejs && cp src/ejs/template.ejs dist/ejs/template.ejs

run: copy
	@npm run build && npm run start
