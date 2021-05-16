<a href="https://github.com/kutifyhq">
    <img src="https://avatars.githubusercontent.com/u/84083798?s=200&v=4" alt="Kutifyhq logo" title="Kutify" align="right" height="80" />
</a>

# Autify Action
[![CI][CI]][CI-status]
[![CI-e2e][CI-e2e]][CI-e2e-status]
[![GitHub Marketplace][MarketPlace]][MarketPlace-status]
[![Mergify Status][mergify-status]][mergify]

A GitHub Action that runs [Autify](https://autify.com/) tests.

## Usage

```yml
on: pull_request
jobs:
  run-test:
    - name: Run Test
      uses: kutifyhq/autify-actions@v1
      with:
        token: ${{ secrets.AUTIFY_TOKEN }}
        id: 10000
```

### Action inputs

| Name | Description | Default |
| --- | --- | --- |
| `id` | ID of the test plan to run | - (Required) |
| `token` | Personal access token for Autify | - (Required) |

### Action outputs

| Name | Description | 
| --- | --- | 

## License

[MIT](LICENSE)

<!-- Badge links -->
[CI]: https://github.com/kutifyhq/autify-actions/actions/workflows/test.yml/badge.svg
[CI-status]: https://github.com/kutifyhq/autify-actions/actions/workflows/test.yml

[CI-e2e]: https://github.com/kutifyhq/autify-actions/actions/workflows/e2e.yml/badge.svg
[CI-e2e-status]: https://github.com/kutifyhq/autify-actions/actions/workflows/e2e.yml

[MarketPlace]: https://img.shields.io/badge/Marketplace-Autify%20Action-blue.svg?colorA=24292e&colorB=0366d6&style=flat&longCache=true&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAM6wAADOsB5dZE0gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAERSURBVCiRhZG/SsMxFEZPfsVJ61jbxaF0cRQRcRJ9hlYn30IHN/+9iquDCOIsblIrOjqKgy5aKoJQj4O3EEtbPwhJbr6Te28CmdSKeqzeqr0YbfVIrTBKakvtOl5dtTkK+v4HfA9PEyBFCY9AGVgCBLaBp1jPAyfAJ/AAdIEG0dNAiyP7+K1qIfMdonZic6+WJoBJvQlvuwDqcXadUuqPA1NKAlexbRTAIMvMOCjTbMwl1LtI/6KWJ5Q6rT6Ht1MA58AX8Apcqqt5r2qhrgAXQC3CZ6i1+KMd9TRu3MvA3aH/fFPnBodb6oe6HM8+lYHrGdRXW8M9bMZtPXUji69lmf5Cmamq7quNLFZXD9Rq7v0Bpc1o/tp0fisAAAAASUVORK5CYII=
[MarketPlace-status]: https://github.com/marketplace/actions/autify-action

[mergify]: https://mergify.io
[mergify-status]: https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/kutifyhq/autify-actions&style=flat
