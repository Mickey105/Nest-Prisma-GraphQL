import { HttpModule } from '@nestjs/axios';
import { forwardRef, Module } from '@nestjs/common';
import { CartModule } from 'src/cart/cart.module';
import { SendgridService } from 'src/sendgrid/sendgrid.service';
import { ShippingModule } from 'src/shipping/shipping.module';
import { ShippingService } from 'src/shipping/shipping.service';
import { VendorsModule } from 'src/vendors/vendors.module';
import { OrdersResolver } from './order.resolver';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    VendorsModule,
    forwardRef(() => CartModule),
    ShippingModule,
    HttpModule,
  ],
  providers: [OrdersService, OrdersResolver, SendgridService, ShippingService],
  exports: [OrdersService],
})
export class OrdersModule {}
