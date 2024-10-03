import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ServiceTranslation extends Document {
  @Prop({ required: true })
  serviceName: string;

  @Prop({ required: true })
  version: number;

  @Prop([{ type: Object }])
  translations: Record<string, any>[];
}

export const ServiceTranslationSchema = SchemaFactory.createForClass(ServiceTranslation);
