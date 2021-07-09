# robofriends

React + Redux

To run the project:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

# Testing

## w/ Jest

jest - running this test is built into CRA via react-scripts

**shallow**

- useful bc it just renders the card component in this case
- it won't render child components as well, just the current one
- constrains you to unit testing, 1 component at a time 90% of the time you want to use shallow

**shallow**

- offers us a bunch of methods we can run on this component
- expect(shallow(<Card />).length).toEqual(1)

**mount**

- does a FULL DOM rendering of the card - it MOUNTS
- tests can affect eachother if they're all using the same DOM
  it's rare that you want to use this bc it complicates things and you want to keep your tests simple, clean and contained as possible
- ideal for when you have compononents that interact w/ the DOM API
- you want to test a lifecycle method
- needs to run in an env that at least looks like the browser env
  - good to run in a headless browser - headless dom

**render**

- render react Cs to a static HTML
- like the others, but this uses a library called cheerio under the hood
  it's like an inbetween between shallow and mount
- renders its children if you need to test those

## Shapshot Testing

**Goes great with stateless components because then all we have to do is write a one-liner to run a snapshot test. Bases covered.**

If a developer comes in a messes up the component, the output won't match the snapshot and will automatically fail.

```js
expect(shallow(<Card />)).toMatchSnapshot()
```

The first time around there is no reference snapshot so the snapshot will be written to the test suite

We will see this snapshot in the "**snapshot**" folder

### Error: No snapshot details

[Source](https://backbencher.dev/blog/empty-shallowwrapper-snapshot-jest-enzyme)

If this happens install this package:

```terminal
yarn add --dev enzyme-to-json
```

Then add the following to the package.json file:

```json
"jest": {
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ]
},
```

To update your snapshot press 'u'
