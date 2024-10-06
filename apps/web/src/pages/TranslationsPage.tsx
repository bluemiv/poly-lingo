import { useTranslationsQuery } from '@/queries/translationQuery';
import { Table } from 'antd';

export default function TranslationsPage() {
  const { data } = useTranslationsQuery();
  const dataSource = data?.results?.map((v, idx) => ({ idx: idx + 1, ...v })) ?? [];
  return (
    <div className="p-6 w-full h-full">
      <main className="bg-white rounded-lg p-6 w-full h-full">
        <Table
          columns={[
            { title: 'idx', dataIndex: 'idx' },
            { title: '서비스 이름', dataIndex: 'serviceName' },
          ]}
          dataSource={dataSource}
        />
      </main>
    </div>
  );
}
