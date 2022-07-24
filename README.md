# Pricelab Cli

A script that takes any address (say "500 W Madison St Chicago IL 60607" or "969 1st Ave., New York, NY 10022") and a pageSize as input and provides listingid, name of the listing, rent for each day in a CSV file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Clone the repository and follow the steps:

```sh
git clone git@github.com:manwindersingh1712/CLI.git
cd CLI
npm install or yarn add
```

## Usage

To use this cli you can run this script:
- blackops ( default address: "chicago-illinois-united-states-of-america", pageSize: 50 )

To add custom address, use:
- blackops -a "YOUR ADDRESS" ( address: "YOUR ADDRESS" , pageSize: 50 )

To add custom page size, use:
- blackops --pg x ( address: "chicago-illinois-united-states-of-america" , pageSize: x )

To add custom address and page size, use:
- blackops -a "YOUR ADDRESS" --pg x ( address: "YOUR ADDRESS" , pageSize: x )
