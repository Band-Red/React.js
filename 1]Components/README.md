# Functional Components in React - المكونات الوظيفية في React

مشروع تعليمي أساسي لتعلم **المكونات الوظيفية (Functional Components)** وأساسيات React 19

## نبذة عن المشروع

هذا المشروع التعليمي يركز على أساسيات **البرمجة الوظيفية في React** و **المكونات الوظيفية**. يوضح المشروع كيفية:

- بناء **مكون وظيفي بسيط**
- استخدام **البيانات والحسابات** في المكون
- تطبيق **CSS والتصميم الديناميكي**
- استخدام **الشروط والتعبيرات** في JSX
- التعامل مع **الأحداث والدوال**

## الأهداف التعليمية

✅ فهم مفهوم **المكونات الوظيفية (Functional Components)**
✅ استخدام **البيانات والمتغيرات** في المكون
✅ التعامل مع **الكائنات (Objects)** والبيانات المعقدة
✅ تطبيق **CSS Inline** و **CSS Classes** ديناميكياً
✅ استخدام **التعابير الشرطية** (Ternary Operator)
✅ التعامل مع **الأحداث والدوال**
✅ فهم **JSX والـ Curly Braces {}**

## بنية المشروع

```
src/
├── App.js                      # المكون الرئيسي
├── App.css                     # أنماط المكون الرئيسي
├── frist-Component.js          # المكون الوظيفي الأول
├── FirstComponentStyle.css     # أنماط المكون
├── index.js                    # نقطة الدخول
└── index.css                   # الأنماط العامة
```

## المكونات الرئيسية

### 1️⃣ **App - المكون الرئيسي**

```javascript
import FristComponent from "./frist-Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to refresh.
        </p>

        <FristComponent />
      </header>
    </div>
  );
}

export default App;
```

**الوصف:**

- المكون الرئيسي الذي يعرض واجهة التطبيق
- يستورد ويعرض **FristComponent**
- يستخدم **CSS Classes** للتصميم
- يتبع نمط **الدوال الوظيفية**

---

### 2️⃣ **FristComponent - مكون وظيفي**

```javascript
import "./FirstComponentStyle.css";

export default function FristComponent() {
  // البيانات (الحالة الثابتة)
  const x = 10;

  const person = {
    name: "ali",
    email: "mohammed@gmail.com",
    city: "Riyadh",
  };

  // التصميم الديناميكي
  const elStyle = {
    backgroundColor: "black",
    fontSize: "2.5em",
  };

  return <div>{/* JSX Elements */}</div>;
}

// دالة منفصلة
function sayHello() {
  alert("Hello");
}
```

---

## المفاهيم الأساسية المستخدمة

### 🔹 1. البيانات والمتغيرات

```javascript
const x = 10;
const person = {
  name: "ali",
  email: "mohammed@gmail.com",
  city: "Riyadh",
};
```

**الوصف:**

- متغيرات ثابتة في الدالة
- يمكن استخدامها في JSX
- قيم ثابتة (لا تتغير مع الزمن)

---

### 🔹 2. التعبيرات الحسابية

```javascript
<h1>{x + 10 * 30}</h1>  {/* النتيجة: 310 */}
```

**الحساب:**

- 10 × 30 = 300
- 10 + 300 = 310

**الأهمية:**

- يمكن إجراء حسابات مباشرة في JSX
- استخدام **Curly Braces {}** للتعبيرات

---

### 🔹 3. CSS Inline (التصميم المضمن)

```javascript
const elStyle = {
    backgroundColor: "black",
    fontSize: "2.5em",
};

// الاستخدام
<h1 style={elStyle}>Hello</h1>

// أو مباشرة
<h1 style={{
    backgroundColor: "white",
    fontSize: "2em",
    color: "black",
    boxShadow: "0px 0px 15px 2px white",
}}>
    Title
</h1>
```

**ملاحظات:**

- القيم الرقمية لا تحتاج إلى علامات اقتباس
- خصائص CSS تكون بصيغة **camelCase** (ليس kebab-case)
  - `backgroundColor` وليس `background-color`
  - `fontSize` وليس `font-size`

---

### 🔹 4. CSS Classes الديناميكية

```javascript
<h3 className={"active rosbrownBg"}>{person.email}</h3>;

{
  /* أو بشكل ديناميكي */
}
<h1 className={person.name == "Mohammed" ? "rosbrownBg" : "greenBg"}>
  check Name
</h1>;
```

**الطريقة الأولى - Multiple Classes:**

```javascript
className={"active rosbrownBg"}  // عدة فئات
```

**الطريقة الثانية - Conditional Rendering:**

```javascript
className={condition ? "classA" : "classB"}  // فئة مشروطة
```

---

### 🔹 5. الوصول إلى خصائص الكائن

```javascript
const person = {
    name: "ali",
    email: "mohammed@gmail.com",
    city: "Riyadh"
};

<h1>Hello {person.name}</h1>        {/* ali */}
<h3>{person.email}</h3>            {/* mohammed@gmail.com */}
<h2>{person.city}</h2>             {/* Riyadh */}
```

---

### 🔹 6. التعابير الشرطية (Ternary Operator)

```javascript
<h1 className={person.name == "Mohammed" ? "rosbrownBg" : "greenBg"}>
  check Name
</h1>
```

**الصيغة:**

```javascript
condition ? valueIfTrue : valueIfFalse;
```

**مثال عملي:**

```javascript
const age = 25;
<h1>{age >= 18 ? "Adult" : "Minor"}</h1>;
```

---

### 🔹 7. التعامل مع الأحداث والدوال

```javascript
function sayHello() {
  alert("Hello");
}

<button onClick={sayHello}>Click here</button>;
```

**ملاحظات:**

- الدالة تُمرر **بدون قوسين** `onClick={sayHello}`
- ليس `onClick={sayHello()}`
- الكلمة الأولى من الحدث بحرف صغير: `onClick` وليس `onclick`

---

## CSS Classes المستخدمة

```css
.rosbrownBg {
  background-color: rosybrown; /* لون بني وردي */
}

.active {
  border: solid 10px silver; /* حد فضي */
}

.greenBg {
  background: green; /* خلفية خضراء */
}
```

---

## أمثلة عملية

### مثال 1: عرض البيانات

```javascript
export default function Component() {
  const user = {
    name: "Ahmed",
    age: 25,
    email: "ahmed@example.com",
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

---

### مثال 2: التصميم الديناميكي

```javascript
export default function Component() {
  const isActive = true;

  const boxStyle = {
    padding: "20px",
    backgroundColor: isActive ? "green" : "red",
    color: "white",
    fontSize: "18px",
  };

  return <div style={boxStyle}>{isActive ? "Active" : "Inactive"}</div>;
}
```

---

### مثال 3: الحسابات والشروط

```javascript
export default function Component() {
  const price = 100;
  const quantity = 5;
  const total = price * quantity;

  return (
    <div>
      <h1>Total: ${total}</h1>
      <p>{total > 300 ? "You get 10% discount!" : "No discount"}</p>
    </div>
  );
}
```

---

### مثال 4: الأحداث والدوال

```javascript
export default function Component() {
  function handleClick() {
    alert("Button Clicked!");
  }

  function handleHover() {
    console.log("Mouse entered!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <div onMouseEnter={handleHover}>Hover Me</div>
    </div>
  );
}
```

---

## الممارسات الجيدة

✅ **استخدم const بدلاً من let:**

```javascript
// ❌
let x = 10;

// ✅
const x = 10;
```

✅ **استخدم camelCase لخصائص CSS:**

```javascript
// ❌
{
  backgroundColor: "red";
}

// ✅
{
  backgroundColor: "red";
}
```

✅ **مرر الدوال بدون قوسين:**

```javascript
// ❌
<button onClick={handleClick()}>Click</button>

// ✅
<button onClick={handleClick}>Click</button>
```

✅ **استخدم Ternary للشروط البسيطة:**

```javascript
// ✅
<h1>{isActive ? "Active" : "Inactive"}</h1>

// استخدم && للشرط الواحد
<h1>{isActive && "Active"}</h1>
```

---

## متطلبات التشغيل

- Node.js (v14 أو أحدث)
- npm أو yarn

## التثبيت والتشغيل

### 1. تثبيت المتعلقات

```bash
npm install
```

### 2. تشغيل التطبيق

```bash
npm start
```

يفتح التطبيق على [http://localhost:3000](http://localhost:3000)

### 3. بناء نسخة الإنتاج

```bash
npm run build
```

### 4. تشغيل الاختبارات

```bash
npm test
```

## تكنولوجيا المستخدمة

| التكنولوجيا     | الإصدار | الاستخدام            |
| --------------- | ------- | -------------------- |
| React           | 19.2.3  | مكتبة واجهة المستخدم |
| React DOM       | 19.2.3  | عرض المكونات         |
| CSS3            | -       | التصميم              |
| JavaScript ES6+ | -       | البرمجة              |

---

## البرمجة الوظيفية في React

### 🔹 مبادئ البرمجة الوظيفية:

1. **Pure Functions** - دوال نقية

```javascript
// ✅ دالة نقية - نفس الـ Input تعطي نفس الـ Output
function add(a, b) {
  return a + b;
}
```

2. **Immutability** - عدم تعديل البيانات الأصلية

```javascript
// ❌ تعديل مباشر
const arr = [1, 2, 3];
arr.push(4); // خطأ

// ✅ إنشاء نسخة جديدة
const newArr = [...arr, 4];
```

3. **First-class Functions** - الدوال كقيم

```javascript
// ✅ تمرير دالة كـ argument
function doSomething(callback) {
  callback();
}

doSomething(() => console.log("Done"));
```

---

## التمارين المقترحة

1. ✏️ **أضف بيانات جديدة**

   ```javascript
   const product = {
     name: "Laptop",
     price: 999,
     inStock: true,
   };
   ```

2. ✏️ **أضف حسابات**

   ```javascript
   const total = product.price * 2;
   <h1>Total: {total}</h1>;
   ```

3. ✏️ **استخدم التصميم الديناميكي**

   ```javascript
   const style = {
     color: product.inStock ? "green" : "red",
   };
   ```

4. ✏️ **أضف المزيد من الأحداث**

   ```javascript
   <button onClick={handleDelete}>Delete</button>
   <input onChange={handleChange} />
   ```

5. ✏️ **أنشئ مكون جديد**
   ```javascript
   function UserCard() {
     const user = { name: "...", email: "..." };
     return <div>...</div>;
   }
   ```

---

## أخطاء شائعة وحلولها

⚠️ **نسيان Curly Braces {}:**

```javascript
// ❌ خطأ
<h1>Hello {name</h1>

// ✅ صحيح
<h1>Hello {name}</h1>
```

⚠️ **استخدام kebab-case بدلاً من camelCase:**

```javascript
// ❌ خطأ
{background-color: "red"}

// ✅ صحيح
{backgroundColor: "red"}
```

⚠️ **استدعاء الدالة مباشرة:**

```javascript
// ❌ خطأ - سيتم استدعاء الدالة فوراً
<button onClick={handleClick()}>Click</button>

// ✅ صحيح - تمرير الدالة كمرجع
<button onClick={handleClick}>Click</button>
```

⚠️ **نسيان علامات اقتباس في className:**

```javascript
// ❌ قد لا يعمل
<div className=active></div>

// ✅ صحيح
<div className="active"></div>
```

---

## المراجع والموارس

- 📖 [React Functional Components](https://react.dev/learn/your-first-component)
- 📖 [JavaScript Expressions in JSX](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- 📖 [Inline Styles in React](https://react.dev/learn/styling-with-css)
- 📖 [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- 📖 [CSS Basics](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## الدرس الرئيسي

### ✅ ما تعلمته:

1. **المكونات الوظيفية**

   - بناء مكون بسيط باستخدام دالة
   - إعادة تصدير المكون

2. **البيانات والمتغيرات**

   - استخدام البيانات في JSX
   - الوصول إلى خصائص الكائنات

3. **التصميم الديناميكي**

   - CSS Inline
   - CSS Classes الشرطية

4. **التعابير والحسابات**

   - إجراء حسابات مباشرة في JSX
   - استخدام Ternary Operator

5. **الأحداث والدوال**
   - التعامل مع الأحداث
   - تمرير الدوال كـ Callbacks

### 🎯 الخطوة التالية:

بعد إتقان هذه الأساسيات، انتقل إلى:

- ✅ **Props** - تمرير البيانات للمكونات
- ✅ **State** - إدارة البيانات المتغيرة
- ✅ **Hooks** - useState, useEffect, وغيرها
- ✅ **Events** - التعامل مع الأحداث المتقدمة

---

## الملاحظات المهمة

⚠️ **المكونات الحالية بسيطة:**

- لا توجد حالة ديناميكية (State)
- جميع البيانات ثابتة
- لا يمكن التفاعل مع المستخدم

⚠️ **البرمجة الوظيفية تعني:**

- استخدام الدوال بدلاً من الأصناف (Classes)
- عدم تعديل البيانات الأصلية (Immutability)
- دوال نقية بدون تأثيرات جانبية (Pure Functions)

⚠️ **JSX هو syntactic sugar:**

```javascript
// JSX
<h1>Hello</h1>;

// يتحول إلى
React.createElement("h1", null, "Hello");
```

---

## الخلاصة

هذا المشروع يغطي أساسيات **البرمجة الوظيفية في React**:

✅ **المكونات الوظيفية البسيطة**
✅ **البيانات والمتغيرات**
✅ **التصميم الديناميكي**
✅ **التعابير الشرطية**
✅ **الأحداث والدوال**

🎓 **مشروع تعليمي أساسي قوي لفهم React بأسلوب وظيفي!**

---

تم إنشاؤه باستخدام [Create React App](https://github.com/facebook/create-react-app)
