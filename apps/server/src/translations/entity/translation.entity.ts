import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Translation extends Document {
  @Prop({ required: true })
  serviceName: string;

  @Prop({ required: true })
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
  translations: Record<string, any>[];
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
