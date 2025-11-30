Project Role: Expert Mobile App Developer & UI/UX Designer. Goal: Build a comprehensive Personal Finance & Asset Management Application from scratch. Design System: Minimalist, Clean. Strict Rule: Use ONLY icons from the Lucide React library for all visual elements. Do not use colorful emojis or generic image icons.

## 1. Global Requirements
Iconography: Every icon must be from lucide-react.
Navigation: Bottom Tab Bar containing: Home, Reports, Assets, Loan Finder.

### Data Structure:
Income/Expense Categories (User editable).
Transactions.
Assets (Live price items + User holdings).
Reminders (Installments, Checks, Notes).

## 2. Screen: Home (Dashboard)
### Header:
Remove standard titles.
Display: Large text showing "Total Balance" of all accounts.
Action: A "Search" icon (Lucide) on the right.

### Section 1: My Accounts:
List of user bank accounts/wallets.
Add Button: Opens a Modal (See "Add Account Modal" below).

### Section 2: Daily Obligations (The "Today" List):

Located below Accounts.
Format: A clean List view.
Logic: Show ONLY items (Installments, Check Due Dates, Notes) scheduled for the current date.
Actions: Ability to add a new Installment, Check, or Note directly.
Note: Do NOT show "My Assets" on this screen.

## 3. Feature: Add Account Modal
### Tabs:
Bank Account: (Standard fields).
Other Source (New):
Fields: Name, Initial Amount.
Icon Picker: User selects an icon from the Lucide library.

## 4. Screen: Assets (Dedicated Page)
Layout: Split into two distinct sections.

### Section A: Live Market Prices:
Layout: Grid View of cards.
Header: Title "Live Prices" + Filter Button.
Filter Logic: Clicking filter opens a Popup listing all available market items (Gold, Silver, Crypto, Dollar, etc.). User selects which ones to track. The Grid ONLY shows selected items.
UI Constraints: NO "Update" button, NO "Last updated" text visible.

### Section B: My Assets:
List of assets the user owns (linked to the types in Section A).
Calculation: (User's Quantity) * (Current Live Price from Section A).

## 5. Screen: Reports
Timeframes: Tabs for Weekly, Monthly, Yearly.
Data View: Ability to navigate between specific months/periods individually.

- Visualization:
Column Chart: displaying Income vs. Expense side-by-side for the selected period.

- Categories:
Strict separation between Expense Categories and Income Categories.
CRUD: User can Add, Edit, or Delete categories.
Icons: User assigns a Lucide icon to each category.

## 6. Screen: Loan Finder (New Page)
Purpose: Information hub for active bank loans.
Content: List of available loans from various banks/institutions.

### Card Details:
Bank Name / Icon.
Loan Amount.
Conditions (interest rate, repayment period, requirements).
Detailed description text.

## 7. Technical Logic Needed
State Management: Handle global state for Total Balance (Accounts + Assets?).
Date Handling: For the "Daily Obligations" section, ensure strict date matching for today's view.
Categorization: Ensure Income categories cannot be used for Expenses and vice-versa.