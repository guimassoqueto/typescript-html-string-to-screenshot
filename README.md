# typescript-html-string-to-screenshot
HTML String To Screenshot is a program that gets any data and generate a template string and takes a screenshot from it.

- [typescript-html-string-to-screenshot](#typescript-html-string-to-screenshot)
  - [Installation](#installation)
  - [Usage](#usage)

## Installation
* Node v21.6.1

* Install the dependencies
    ```shell
    npm install
    ```

* Run
    ```shell
    make
    ```

## Usage
* Change the templateData type (located in `./src/ejs/render-ejs-template.ts`) for any format you want

* Be sure to update the file `./src/ejs/template.ejs` with the new data types. Also be free to style the template in any form you want.

* [Optional] Change the `./src/ejs/generate-screenshot.ts` to format the screenshot quality (and format), screen dimensions, etc