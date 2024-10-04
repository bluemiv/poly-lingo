import { useTranslationsQuery } from '@/queries/translationQuery';

export default function TranslationsPage() {
  const { data } = useTranslationsQuery();
  console.log(data);
  return <main>translations</main>;
}
