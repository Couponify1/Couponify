export type coupon = {
  id: number;
  name: string;
  expiresAt: Date;
  category: string;
  amount: number;
  price: number;
  description: string;
  couponOwner: {
    id: number;
    name: string;
  };
};
