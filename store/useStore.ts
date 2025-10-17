import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Concert, Ticket } from '../types/concert';

type CartItem = Concert & { qty: number };

interface Store {
  cart: CartItem[];
  tickets: Ticket[];
  addToCart: (concert: Concert) => void;
  purchase: () => Promise<void>;
  load: () => Promise<void>;
  clear: () => Promise<void>;
}

const CART_KEY = 'cart_v1';
const TICKETS_KEY = 'tickets_v1';

function generateTicketId(concertId: string): string {
  const random = Math.random().toString(36).slice(2, 10);
  const time = Date.now().toString(36);
  return `${concertId}-${time}-${random}`;
}

export const useStore = create<Store>((set, get) => ({
  cart: [],
  tickets: [],
  addToCart: (concert: Concert) => {
    set((state) => {
      const existingIndex = state.cart.findIndex((c) => c.id === concert.id);
      if (existingIndex >= 0) {
        const updated = [...state.cart];
        updated[existingIndex] = { ...updated[existingIndex], qty: updated[existingIndex].qty + 1 };
        AsyncStorage.setItem(CART_KEY, JSON.stringify(updated));
        return { cart: updated };
      }
      const next = [...state.cart, { ...concert, qty: 1 }];
      AsyncStorage.setItem(CART_KEY, JSON.stringify(next));
      return { cart: next };
    });
  },
  purchase: async () => {
    const state = get();
    const purchaseTime = new Date().toISOString();
    const newTickets: Ticket[] = state.cart.map((c) => ({
      ...c,
      ticketId: generateTicketId(c.id),
      purchasedAt: purchaseTime,
    }));
    const mergedTickets = [...state.tickets, ...newTickets];
    await AsyncStorage.multiSet([
      [TICKETS_KEY, JSON.stringify(mergedTickets)],
      [CART_KEY, JSON.stringify([])],
    ]);
    set({ tickets: mergedTickets, cart: [] });
  },
  load: async () => {
    const [cartStr, ticketsStr] = await AsyncStorage.multiGet([CART_KEY, TICKETS_KEY]).then((pairs) => pairs.map(([, v]) => v));
    set({
      cart: cartStr ? JSON.parse(cartStr) : [],
      tickets: ticketsStr ? JSON.parse(ticketsStr) : [],
    });
  },
  clear: async () => {
    await AsyncStorage.multiRemove([CART_KEY, TICKETS_KEY]);
    set({ cart: [], tickets: [] });
  },
}));
