export type TicketPriority = 'low' | 'medium' | 'high';
export type TicketStatus = 'open' | 'in_progress' | 'closed';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
}


export interface CreateTicketInput {
  title: string;
  description: string;
  priority?: TicketPriority;
}