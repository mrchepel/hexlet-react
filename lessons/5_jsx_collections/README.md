```html
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```

`dl` тег, используется при создании списков определений, в которых `dt` тег содержит название, а `dd` описание определения.

## src/Definitions.js

Реализуйте компонент `Definitions`, который принимает свойство `data` следующей структуры:

```jsx harmony
const definitions = [
  { dt: 'one', dd: 'two' },
  { dt: 'another term', dd: 'another description' },
];

<Definitions data={definitions} />
```

Результатом должен быть следующий вывод:

```html
<dl>
  <dt>one</dt>
  <dd>two</dd>
  <dt>another term</dt>
  <dd>another description</dd>
</dl>
```

Если `data` это пустой массив, то ничего не должно рендерится
