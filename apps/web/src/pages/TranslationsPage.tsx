import { useServiceTranslationsQuery } from '@/queries/serviceTranslationQuery.ts';

export default function TranslationsPage() {
  const { data } = useServiceTranslationsQuery();
  console.log(data);
  return <main>translations</main>;
}
