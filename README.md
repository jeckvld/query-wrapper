# Query Wrapper &middot; [![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/query-wrapper.svg?style=flat)](https://www.npmjs.com/package/query-wrapper)

Spoiler alert: there is nothing similar/related to jQuery.

**Query Wrapper** is a JavaScript library based on [**React**](https://reactjs.org/) which can help you to handle request state: loading, error or ready data state in your application. The motivation has its roots in [react-apollo](https://github.com/apollographql/react-apollo) Query component. However, this library is oriented on RESTful web services. Browser will care itself about the caching your data. When a web cache has a requested resource in its store, it intercepts the request and returns its copy instead of re-downloading from the originating server. You can find more information about HTTP caching [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching).

## Installation

```js
// using npm
npm i query-wrapper
```

```js
// using yarn
yarn add query-wrapper
```

## Documentation

**`<QueryProvider />`**

Props:

- `axios` - optional configured axios instance **function**, which will be used as a base for the requests. If it is not provided every component will use native `fetch` for the requests.
  Default value: `null`.

- `options` - **object** with options, which will be used in every request, if they were are not overridden.
  Default value: `{}`.

---

**`<Query />`**

Props:

- `query` - **object** for specifying request options (url, method, body and other common request options).
  **Note:** At least _url_ property must be provided, if it is not - request won't be sent.
  Default value: `{}`.

## Examples

Wrapping all the application into `<QueryProvider />` only useful if you have `axios` instance or base options which should apply to all requests.

```jsx
import axios from 'axios';
import { QueryProvider } from 'query-wrapper';

const instance = axios.create({...});

const options = {
	credentials: "same-origin",
	headers: {
		"Content-Type": "application/json",
	}
};

const App = () => (
	<QueryProvider axios={instance} options={options}>
		... // your application
	</QueryProvider>
);

export default App;
```

And wrap your component which should deal with server data:

```jsx
import { Query } from 'query-wrapper';

const query = { url: '/api/user/info' };

const UserInfo = () => (
	<Query query={query}>
		{({ data, error, loading }) => {
			if (loading) {
				return ... // handle loading
			}

			if (error) {
				return ... // handle loading
			}

			return ... // handle response data
		}}
	</Query>
);

export default UserInfo;
```
