# 🧠 MultiSelect Component Refactoring & Feature Challenge

Welcome to the **MultiSelect Refactor & Enhancement Challenge**!  
Your task is to improve and refactor an existing React component by applying best practices, fixing issues, and adding features.


## 🚀 Getting Started

1. **Clone this repository:**

   ```bash
   git clone https://github.com/fzdev-01/Multi-Select-React.git

```

---
## 🚀 Challenge Tasks

### 1. Refactor Large Functions
**Hint:** Functions like `getValueOnClick`, `removeValueFromHolder`, and `handleClickOnDom` do too much. Split them into smaller, focused functions.

---

### 2. Fix Variable Naming
**Hint:** Check for typos such as `slectedValues`. Use clear and consistent naming.

---

### 3. Extract Logic into a Custom Hook
**Hint:** Create a custom hook like `useMultiSelectLogic()` to separate logic from UI rendering.

---

### 4. Use `useReducer` for State Management
**Hint:** Combine related state variables (`openDropDown`, `data`, `selectedValues`, `animationLoading`) using a reducer.

---

### 5. Implement Search Filtering
**Hint:** Use the input field to filter the dropdown list in real-time based on user input.

---

### 6. Fix Animation Timing
**Hint:** Avoid hardcoded `setTimeout(500)`. Use animation end events or a library like `Framer Motion`.

---

### 7. Add “Remove All” Button
**Hint:** Add a button to clear all selected values and return them to the options list.

---

### 8. Add Keyboard Navigation
**Hint:** Support keyboard navigation (Arrow keys, Enter, Escape) for dropdown interaction.

---

### 9. Improve Accessibility (ARIA)
**Hint:** Add `role="listbox"` and `role="option"` with relevant `aria-*` attributes for accessibility support.

---

### 10. Make the Component Controlled
**Hint:** Convert the component to accept `value` and `onChange` props, making it compatible with external state management.

---

### 11. Use TypeScript Strictly
**Hint:** Avoid `any`. Use proper typing for props, state, and DOM events. Enforce `strict` mode.

---

### 12. Optimize Performance
**Hint:** Use `useMemo` and `useCallback` to avoid unnecessary renders and calculations.

---

## 🧪 Bonus (Optional)
- Replace CSS-based animations with `Framer Motion` or `React Transition Group`.
- Add unit tests for the logic and interaction.

---

## 📝 Submission Guidelines
- Fork the repo, create a new branch, and push your changes.
- Document your improvements in a `CHANGES.md` file.

---

Good luck and happy coding! 🚀
