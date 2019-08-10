
## Using Create React App

Webpack을 이용하여 처음부터 React 프로젝트를 진행할수도 있지만, 이는 시간이 많이 걸린다. 하지만 다행히 Facebook에서 이를 도와줄 공식 도구를 Realese하였다.

Create React App은 React의 작업환경을 쉽게 설정하고 만들어주는 멋진 도구이다. Create React App을 설치하고 React프로젝트를 생성하는 것은 매우 간단하다. Terminal에서 각각의 명령어를 입력한다.

````
- yarn global add create-react-app
- create-react-app project
- cd project
- yarn start
````

## Yarn Command Line

Yarn은 프로젝트의 새로운 프로젝트 생성 부터 의존성 관리와 더 많은 것들까지 다양한 측면을 관리 할 수 있는데 도움이 되는 많은 커맨드 라인 명령어들을 제공한다. 가장 인기 있는 명령어는 아래 설명 되어 있지만, 고급 명령에 대한 것은 Yarn의 공식 문서를 참조하기 바란다.


yarn init 명령으로 package.json이 아래와 같이 만들어진다:

````
$ yarn init

{
  "name": "mynewproject",
  "version": "1.0.0",
  "description": "My new Yarn project",
  "main": "index.js",
  "repository": {
    "url": "https://github.com/gdangelo/my-new-yarn-project",
    "type": "git"
  },
  "author": "Grégory D'Angelo",
  "license": "MIT"
}
````

## Delete unnecessary files && folders
Create React App으로 Project를 만들게 되면 나의 Project를 진행할 때 필요가 없는 몇가지 폴더들과 파일들이 있다.
필요 없으니 삭제하는게 좋지만, 하지 않아도 진행하는데 큰 문제는 없다.
또한, Directory 전체 구조가 변경되었으므로 import 부분의 수정이 필요하다.

````
- docs/
- node_modules/
- public/
    - favicon.ico
	- index.html
	- manifest.json
- src
    - components/ ##component들이 위치할 폴더
	    -app/ App폴더 생성
		    - App.js
		    - App.css
		    - App.test
        - assets/ image파일 등이 위치할 폴더
        - index.css
        - index.js
    - .gitignore
    - package.json
    - README.md
    - yarn.lock
    - .env
````

## NODE PATH 적용
위에 index.js파일을 살펴보자. App파일을 불러오는데, 상대경로를 사용하여 파일을 불러오는 중이다. Director구조가 조금만 복잡해지면 다른 파일들을 import할 때 굉장히 번거로워진다. 이를 해결하기 위해 Node Path를 적용시켜 절대경로를 사용하면, 프로젝트를 진행하기 수월해진다. 이를 적용하는 것은 간단하다.

이렇게 되면, 이후 파일을 import할 때 src폴더가 기준이 된다. 전체 프로젝트에서 import를 한 부분을 수정해보도록 하자.

````
- root폴더에 .env 파일 생성(확장자 X)
- .env 파일
  NODE_PATH=src 
````

## 필요한 라이브러리 설치
초기 프로덕션 의존성(production dependencies) 과 개발 의존성(development dependencies)을 설치한다. 개발 의존성은 개발 단계에서만 사용되는 의존 라이브러리이며, 프로덕션 의존성은 배포 단계에서 사용되는 라이브러리를 말한다.

````
$ yarn add react react-dom react-prop-types react-router-dom semantic-ui-react
$ yarn add babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-1 css-loader style-loader html-webpack-plugin webpack webpack-dev-server webpack-cli -D
````
- <b>react</b>: 리액트
- <b>rreact-dom</b>: 브라우저 DOM 메서드를 제공한다.
- <b>rreact-prop-types</b>: React props 타입을 체크한다.
- <b>rreact-router-dom</b>: Provides routing capabilities to React for the browser
- <b>rsemantic-ui-react</b>: CSS 프레임워크
- <b>rbabel-core</b>: Babel 핵심 의존성 라이브러리이다. Babel(바벨)은 자바스크립트 ES6를 ES5로 컴파일하여 현재 브라우저가 이해할 수 있도록 변환하는 도구다.
- <b>rbabel-loader</b>: babel과 webpack을 사용해 자바스크립트 파일을 컴파일한다.
- <b>rbabel-preset-env</b>: ES2015, ES2016, ES2017 버전을 지정하지 않아도 바벨이 자동으로 탐지해 컴파일한다.
- <b>rbabel-preset-react</b>: 리액트를 사용한다는 것을 바벨에게 말해준다.
- <b>rbabel-preset-stage-1</b>: TC39에서 검토 중인 Stage 1 스펙을 사용한다. (stage-0부터 3까지는 EcmaScript 스펙 중에서 비공식 실험적인 기술들을 사용할 수 있게 해주는 프리셋으로 Stage 2와 Stage 3도 사용 가능하다.)
- <b>rcss-loader</b>: import/require()처럼 @import와 url() 해석한다.
- <b>rhtml-webpack-plugin</b>: 애플리케이션을위한 HTML 파일을 생성하거나 템플릿을 제공한다.
- <b>rstyle-loader</b>: <style> 태그를 삽입하여 CSS에 DOM을 추가한다.
- <b>rwebpack</b>: 모듈 번들러(Module bundler)
- <b>rwebpack-cli</b>: Webpack 4.0.1 이상에서 필요한 커맨드라인 인터페이스다.
- <b>rwebpack-dev-server</b>: 애플리케이션 개발 서버를 제공한다.


## Babel 설정
최상위 디렉터리 webpack-for-react에 바벨 설정 파일을 만든다.
````
touch .babelrcBabel 설정
.babelrc 파일을 열어 아래 코드를 추가한다.

{
  "presets": ["env", "react", "stage-1"]
}
````

바벨이 프리셋(preset) 플러그인을 사용할 수 있게 됐다. 나중에 Webpack에서 babel-loader를 호출할 때 어떤 역할을 하는지 이해하게 될 것이다.

## Webpack 설정
지금부터 본격적으로 시작해보자. Webpack 설정 파일을 만들어보자.
터미널에서 아래 명령어를 입력해 webpack.config.js을 만든다.

````
touch webpack.config.js
webpack.config.js 파일을 열고 아래 코드를 작성한다.

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  // webpack 설정 부분
};
````

웹팩 기본 설정을 마쳤다. 다음으로 webpack과 html-webpack-plugin이 필요하다. 환경 변수 PORT가 없으면 기본 포트를 제공하고 모듈을 내보내는 일을 한다.

webpack.config.js 파일을 다시 열어 아래 코드를 추가한다.

````
...
module.exports = {
  mode: 'development',
};

````
설정 사항이 개발 환경(development)인지 프로덕션(production)인지를 알려줬다.



## React Router 적용

React Router는 Web, React Native, 심지어 VR에서도 사용 가능한 멋진 routing 라이브러리이다. React는 기본적으로 SPA(Single Page Application)을 위한 라이브러리인데, SPA의 문제점은 프로젝트의 규모가 커진다면 Javascript file이 커지므로 렌더링시간이 오래 걸린다는 것이다. 이를 해결하기 위해 React에 Routing기능을 적용시키는 것이다. 설치 방법은 간단하다.

````
$ yarn add react-router-dom
````

그 후, src폴더에 있는 index.js를 다음과 같이 수정한다.

````
import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));
````
설치한 react-router-dom에서 BrowserRouter을 불러와 우리 App에 적용시켰다. 이제 Routing 기능을 사용할 수 있다. 차후 Redux를 사용할 경우 BrowserRoter대신, import { Provider } from ‘react-redux’ 같은 기능을 설치하고 사용하면 된다.


## Redux

Redux(https://deminoth.github.io/redux/)는 리액트 앱의 효과적인 상태관리를 위한 라이브러리입니다. 
package.json을 확인하면 추가된 것을 확인할 수 있다.

````
$ yarn add redux react-redux
````



## UI-Component Shards-React

````
$ yarn add shareds-react
$ yarn add @fortawesome/fontawesome-svg-core
$ yarn add @fortawesome/free-solid-svg-icons
$ yarn add @fortawesome/react-native-fontawesome
````

