
export const EventType = {
  FLIGHT: 'FLIGHT',
  HOTEL: 'HOTEL',
  SIGHTSEEING: 'SIGHTSEEING',
  FOOD: 'FOOD',
  SHOPPING: 'SHOPPING',
  TRANSPORT: 'TRANSPORT',
  ACTIVITY: 'ACTIVITY'
} as const;

export type EventType = typeof EventType[keyof typeof EventType];

export interface AIInsight {
  story?: string;
  mustEat?: string[];
  mustBuy?: string[];
  tips?: string[];
  weatherForecast?: string;
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  location?: string;
  type: EventType;
  transportInfo?: string;
  reservationCode?: string;
  suggestedLeaveTime?: string;
  aiInsights?: AIInsight;
  closingTime?: string;
}

export interface DayItinerary {
  id: string;
  date: string;
  dayOfWeek: string;
  title: string;
  hotelLeaveTime?: string;
  items: ItineraryItem[];
}

export interface BudgetEntry {
  id: string;
  category: string;
  item: string;
  amount: number;
  currency: 'JPY' | 'TWD' | 'HKD';
  paidBy: 'P1' | 'P2' | 'Shared';
}

export interface HotelInfo {
  name: string;
  address: string;
  phone: string;
  checkIn: string;
  checkOut: string;
}

export interface FlightInfo {
  code: string;
  date: string;
  time: string;
  type: 'DEPARTURE' | 'RETURN';
}
