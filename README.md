# marketplace-stats-as-a-service
A little micro service to cache and expose Envato Marketplace stats(total items and total users)

Insipred by Zeit [github-projects](https://github.com/zeit/github-projects).

## Usage

Simply install the dependencies:

```bash
npm install
```

And run the server:

```bash
npm start
```

## API

### GET /

**200**: Returns total items and total users stats from marketplace

```json
{
  "total_items": "5623356",
  "total_users": "8393788"
}
```

## Contributing

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Follow the [usage section](#usage)
3. Start making changes and open a pull request once they're ready!

You can use `npm test` to run the tests and see if your changes have broken anything.

## License

MIT
