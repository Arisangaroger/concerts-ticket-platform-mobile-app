export type Concert = {
  id: string;
  artist: string;
  date: string;
  location: string;
  price: number;
  image: string;
  description: string;
};

export type Ticket = Concert & {
  ticketId: string;
  purchasedAt: string; // ISO string
};


