import create from 'zustand'
import { nanoid } from 'nanoid'

type Account = { id: string; name: string; balance: number }
type LivePrice = { id: string; symbol: string; price: number }
type Asset = { id: string; name: string; quantity: number; livePrice?: number }
type Loan = { id: string; bankName: string; amount: string; conditions: string }

type AppState = {
  accounts: Account[]
  livePrices: LivePrice[]
  assets: Asset[]
  loans: Loan[]
  addAccount: (name: string, balance: number) => void
}

const useAppStore = create<AppState>((set) => ({
  accounts: [
    { id: nanoid(), name: 'Main Bank', balance: 1250.5 },
    { id: nanoid(), name: 'Wallet', balance: 120.0 },
  ],
  livePrices: [
    { id: 'gold', symbol: 'Gold', price: 1950 },
    { id: 'btc', symbol: 'BTC', price: 33000 },
    { id: 'usd', symbol: 'USD', price: 1 },
    { id: 'silver', symbol: 'Silver', price: 23 },
  ],
  assets: [
    { id: nanoid(), name: 'Gold', quantity: 0.5, livePrice: 1950 },
  ],
  loans: [
    { id: nanoid(), bankName: 'Bank A', amount: '$10,000', conditions: '5% APR, 24 months' },
  ],
  addAccount: (name: string, balance: number) =>
    set((state) => ({ accounts: [...state.accounts, { id: nanoid(), name, balance }] })),
}))

export default useAppStore
