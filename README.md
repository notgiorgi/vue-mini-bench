## Usage

To run the audit manually:

```
yarn install
yarn start
```

go to [https://localhost:8080](https://localhost:8080) and rund audit from devtools


## Findings

I created a component that renders:

- Normal `h1`
- Counter (using setInterval)
- And a list of 1000 random numbers

Tried rendering number of instances of them on page and measuring performance using google lighthouse tool

- [10 component instances](https://cl.ly/c4f561781846)
- [20 component instances](https://cl.ly/cceba55917d3)
- [50 component instances](https://cl.ly/9bafa057188e)

You can also view the audit output JSON in `audit_logs` directory. You can use this [viewer](https://googlechrome.github.io/lighthouse/viewer/)