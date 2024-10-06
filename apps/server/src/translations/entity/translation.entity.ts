import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Translation extends Document {
  @Prop({ required: true })
  serviceName: string;

  @Prop()
  description: string;

  @Prop({ default: 1 })
  version: number;

  @Prop([
    {
      code: String,
      ko: String,
      en: String,
      idn: String,
      modifiedAt: Date,
      history: [{ version: Number, ko: String, en: String, idn: String, modifiedAt: Date }],
    },
  ])
  data: Record<string, any>[];
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
