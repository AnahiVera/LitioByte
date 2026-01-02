
import { Injectable, BadRequestException } from '@nestjs/common';
import ticketsData from '../data/tickets.json';
import { CreateTicketInput, Ticket } from './ticket.type';


@Injectable()
export class TicketsService {
  private tickets = [...ticketsData];


  findAll() {
    return this.tickets;
  }


/* Crear ticket  */

  create(ticket: CreateTicketInput) {
   
  // Validaciones básicas
  if (!ticket.title || typeof ticket.title !== 'string' || ticket.title.trim() === '') {
    throw new BadRequestException('El título es obligatorio');
  }

  if (!ticket.description || typeof ticket.description !== 'string' || ticket.description.trim() === '') {
    throw new BadRequestException('La descripción es obligatoria');
  }

  // Prioridad válida
  const validPriorities = ['low', 'medium', 'high'];
  if (ticket.priority && !validPriorities.includes(ticket.priority)) {
    throw new BadRequestException('Prioridad inválida');
  }

  // Crear ticket con valores controlados
  const newTicket = {
    id:
      this.tickets.length > 0
        ? (Number(this.tickets[this.tickets.length - 1].id) + 1).toString()
        : '1',
    title: ticket.title.trim(),
    description: ticket.description.trim(),
    priority: ticket.priority ?? 'low',
    status: 'open',
    createdAt: new Date().toISOString(),
  };

  this.tickets.push(newTicket);
  return newTicket;
}


//Listado y ordenamiento
findFilter(status?: string, sort?: string) {
  const validStatuses = ['open', 'in_progress', 'closed'];
  const validSorts = ['priority', 'createdAt'];

  // Validar estado
  if (status && !validStatuses.includes(status)) {
    throw new BadRequestException('Estado inválido');
  }

  // Validar sort
  if (sort && !validSorts.includes(sort)) {
    throw new BadRequestException('Parámetro de orden inválido');
  }

  let result = [...this.tickets];

  // Filtrar por estado
  if (status) {
    result = result.filter((t) => t.status === status);
  }

  // Ordenar
  if (sort === 'priority') {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    result.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority],
    );
  }

  if (sort === 'createdAt') {
    result.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() -
        new Date(b.createdAt).getTime(),
    );
  }

  return result;
}

  

// Actualizar estado del ticket
  updateStatus(id: string, status: string) {
    const validStatuses = ["open", "in_progress", "closed"];
    const ticket = this.tickets.find((t) => t.id === id);
    if (!ticket) {
      throw new BadRequestException('Ticket no encontrado');
    }
    if (!validStatuses.includes(status)) {
      throw new BadRequestException('Estado inválido');
    }
    if (ticket.status === 'closed') {
      throw new BadRequestException('No se puede modificar un ticket cerrado');
    }
    // Solo permitir transiciones válidas
    if (
      (ticket.status === 'open' && status === 'in_progress') ||
      (ticket.status === 'in_progress' && status === 'closed')
    ) {
      ticket.status = status;
      
      return ticket;
    } else {
      throw new BadRequestException('Transición de estado no permitida');
    }
  }
}

