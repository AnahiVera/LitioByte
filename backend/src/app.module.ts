import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TicketsModule } from './tickets/tickets.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TicketsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
