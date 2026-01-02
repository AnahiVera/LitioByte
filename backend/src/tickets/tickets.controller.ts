import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import type { CreateTicketInput, Ticket } from './ticket.type';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  createTicket(@Body() body: CreateTicketInput) {
    return this.ticketsService.create(body);
  }

  @Get()
  getTickets(
    @Query('status') status?: string,
    @Query('sort') sort?: string,
  ) {
    return this.ticketsService.findFilter(status, sort);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    return this.ticketsService.updateStatus(id, status);
  }
}
