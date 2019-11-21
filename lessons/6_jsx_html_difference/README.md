## src/Progress.js

Реализуйте компонент `Progress`, который принимает свойство `percentage` и рисует статический прогресс бар.

Использование:

```jsx harmony
<Progress percentage={40} />;
```

Результат:

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" aria-label="progressbar" style="width: 40%;">
  </div>
</div>
```

* Стиль `width` - вычисляется динамически
* Аттрибут `aria-valuenow` - вычисляется динамически

## Подсказки

* [Progress](https://getbootstrap.com/docs/4.0/components/progress/)
