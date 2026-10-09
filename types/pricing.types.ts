export enum PopularPlanType {
  NO = 0,
  YES = 1,
}

export interface PricingCardProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  href: string;
  plan: string;
  successUrl?: string;
  cancelUrl?: string;
  redirectUrl?: string;
  paymentLink?: string;
  billing: string;
}

export interface SubscriptionDataType {
  plan: string;
  stripeSubscriptionId: string;
  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "paused"
    | "trialing"
    | "unpaid";
  periodStart?: Date | undefined;
  periodEnd?: Date | undefined;
  cancelAtPeriodEnd?: boolean | undefined;
  cancelAt?: Date | undefined;
  canceledAt?: Date | undefined;
}

export interface Dictionary<T> {
  [key: string]: T;
}
